"use client";
import React, { useState, useEffect } from "react";
import styles from "./ProfileComponent.module.css";
import Image from "next/image";
import { db, auth } from "../../Components/firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { StaticImageData } from "next/image";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type Person = {
  src: StaticImageData;
  name: string;
  slug: string;
  skills: string[];
  description: string;
};

type Comment = {
  id: string;
  name: string;
  batch: string;
  comment: string;
};

const ProfileComponent: React.FC<{ person: Person }> = ({ person }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [index, setIndex] = useState(0);
  const [showAddComment, setShowAddComment] = useState(false);
  const [newComment, setNewComment] = useState<Comment>({
    id: "",
    name: "",
    batch: "",
    comment: "",
  });
  const [userName, setUserName] = useState<string | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const q = query(collection(db, "users", person.slug, "comments"));
        const querySnapshot = await getDocs(q);
        setComments(
          querySnapshot.docs.map((doc) => {
            const data = doc.data() as Comment;
            return { ...data, id: doc.id };
          })
        );
      } catch (error) {
        console.error("Error fetching comments:", error);
        toast.error("Error fetching comments. Please try again later.");
      }
    };
    fetchComments();
  }, [person.slug]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleNextComment = () => {
    setIndex((index + 1) % comments.length);
  };

  const handlePrevComment = () => {
    setIndex((index - 1 + comments.length) % comments.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % comments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [comments]);

  const handleAddComment = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowAddComment(true);
      } else {
        router.push("/farewell/login");
      }
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newComment.batch || !newComment.comment) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (newComment.comment.length > 250) {
      toast.error("Comment is too long. Please keep it under 250 characters.");
      return;
    }

    try {
      if (editingCommentId) {
        await updateDoc(
          doc(db, "users", person.slug, "comments", editingCommentId),
          {
            batch: newComment.batch,
            comment: newComment.comment,
          }
        );
        const updatedComments = comments.map((comment) => {
          if (comment.id === editingCommentId) {
            return {
              ...comment,
              batch: newComment.batch,
              comment: newComment.comment,
            };
          }
          return comment;
        });
        setComments(updatedComments);
        toast.success("Comment updated successfully!");
        setEditingCommentId(null);
      } else {
        const docRef = await addDoc(
          collection(db, "users", person.slug, "comments"),
          {
            ...newComment,
            name: userName || "Anonymous",
          }
        );
        setComments([
          ...comments,
          { ...newComment, name: userName || "Anonymous", id: docRef.id },
        ]);
        toast.success("Comment added successfully!");
      }
      setNewComment({ id: "", name: "", batch: "", comment: "" });
      setShowAddComment(false);
    } catch (error) {
      console.error("Error adding comment:", error);
      toast.error("Error adding comment. Please try again.");
    }
  };

  const handleEditComment = (id: string) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    if (commentToEdit) {
      setNewComment(commentToEdit);
      setShowAddComment(true);
      setEditingCommentId(id);
    }
  };

  const handleDeleteComment = async (id: string) => {
    try {
      await deleteDoc(doc(db, "users", person.slug, "comments", id));
      const updatedComments = comments.filter((comment) => comment.id !== id);
      setComments(updatedComments);
      toast.success("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Error deleting comment. Please try again.");
    }
  };

  return (
    <div className={styles.profileContainer}>
      <ToastContainer />
      <div className={styles.header}>
        <h1 className={styles.title}>
          UNITED ENGINEERS' SPEAKING AND QUIZZING ORGANISATION
        </h1>
      </div>
      <div className={styles.agentInfo}>
        <Image
          src={person.src}
          alt={person.name}
          width={200}
          height={200}
          className={styles.agentImage}
        />
        <div className={styles.agentDetails}>
          <div className={styles.nameBlock}>
            <p className={styles.h2}>
              <strong>Agent Name:</strong>
            </p>
            <p className={styles.p2}>{person.name}</p>
          </div>
          <div className={styles.nameBlock}>
            <p className={styles.h2}>
              <strong>Agent ID:</strong>
            </p>
            <p className={styles.p2}>{person.slug}</p>
          </div>
          <div className={styles.nameBlock}>
            <p className={styles.h2}>
              <strong>Skills:</strong>
            </p>
            <p className={styles.p2}>{person.skills.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className={styles.topComments}>
        <h2 className={styles.h2}>Top Comments</h2>
        <div className={styles.comment1}>
          <p className={styles.p3}>
            {comments.length > 0 && comments[index]
              ? comments[index].comment
              : ""}
          </p>
          <p className={styles.p4}>
            {comments.length > 0 && comments[index] ? comments[index].name : ""}
          </p>
        </div>
      </div>
      <div className={styles.description}>
        <h2 className={styles.h2}>Description</h2>
        <p className={styles.p}>{person.description}</p>
      </div>

      <div className={styles.commentSection}>
        <h2 className={styles.h2}>Comments</h2>
        <div className={styles.commentSlider}>
          <button className={styles.sliderButton} onClick={handlePrevComment}>
            &lt;
          </button>
          <div className={styles.comment1}>
            <p className={styles.p3}>
              {comments.length > 0 && comments[index]
                ? comments[index].comment
                : ""}
            </p>
            <p className={styles.p4}>
              {comments.length > 0 && comments[index]
                ? comments[index].name
                : ""}
            </p>
          </div>
          <button className={styles.sliderButton} onClick={handleNextComment}>
            &gt;
          </button>
        </div>
      </div>
      <div className={styles.addCommentSection}>
        {!showAddComment && (
          <button className={styles.addButton} onClick={handleAddComment}>
            Add Comment
          </button>
        )}
        {showAddComment && (
          <form className={styles.commentForm} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              name="batch"
              placeholder="Your Batch"
              value={newComment.batch}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="comment"
              className={styles.textArea}
              placeholder="Your Comment"
              value={newComment.comment}
              onChange={handleInputChange}
              required
              maxLength={250}
            ></textarea>
            <div className={styles.buttonAdd}>
              <button type="submit" className={styles.button}>
                {editingCommentId ? "Update" : "Submit"}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={() => {
                  setShowAddComment(false);
                  setEditingCommentId(null);
                  setNewComment({ id: "", name: "", batch: "", comment: "" });
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      {auth.currentUser && (
      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment2}>
            <p className={styles.p3}>" {comment.comment} "</p>
            <div className={styles.commentDetails}>
              <p className={styles.p5}>{comment.name}</p>
            </div>
            
              <div className={styles.commentActions}>
                <button
                  className={styles.editButton}
                  onClick={() => handleEditComment(comment.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default ProfileComponent;
