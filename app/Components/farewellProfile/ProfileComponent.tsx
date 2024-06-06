"use client"
import React, { useState, useEffect } from 'react';
import styles from './ProfileComponent.module.css';
import Image from 'next/image';
import { db } from '../../Components/firebase/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { StaticImageData } from 'next/image';

type Person = {
  src: StaticImageData;
  name: string;
  dob: string;
  status: string;
  slug: string;
  skills: string[];
  description: string;
};

type Comment = {
  name: string;
  batch: string;
  comment: string;
};

const ProfileComponent: React.FC<{ person: Person }> = ({ person }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [index, setIndex] = useState(0);
  const [showAddComment, setShowAddComment] = useState(false);
  const [newComment, setNewComment] = useState<Comment>({
    name: '',
    batch: '',
    comment: ''
  });

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'comments'));
        setComments(querySnapshot.docs.map(doc => doc.data() as Comment));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, []);

  const handleNextComment = () => {
    setIndex((index + 1) % comments.length);
  };

  const handlePrevComment = () => {
    setIndex((index - 1 + comments.length) % comments.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % comments.length);
    }, 5000); // Change slide duration as needed

    return () => clearInterval(interval);
  }, [comments]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if any of the comment fields are empty
    if (!newComment.name || !newComment.batch || !newComment.comment) {
      alert('Please fill in all fields.');
      return;
    }

    // Check if the comment is too long
    if (newComment.comment.length > 250) {
      alert('Comment is too long. Please keep it under 250 characters.');
      return;
    }

    // If all checks pass, add the comment
    try {
      await addDoc(collection(db, 'comments'), newComment);
      setComments([...comments, newComment]);
      setNewComment({ name: '', batch: '', comment: '' });
      setShowAddComment(false); // Hide add comment section after submission
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Error adding comment. Please try again.');
    }
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>UNITED ENGINEERS' SPEAKING AND QUIZZING ORGANISATION</h1>
      </div>
      <div className={styles.agentInfo}>
        <Image src={person.src} alt={person.name} width={200} height={200} className={styles.agentImage} />
        <div className={styles.agentDetails}>
          <p className={styles.p}><strong>Agent Name:</strong> {person.name}</p>
          <p className={styles.p}><strong>DOB:</strong> {person.dob}</p>
          <p className={styles.p}><strong>Status:</strong> {person.status}</p>
          <p className={styles.p}><strong>Code Name:</strong> {person.slug}</p>
        </div>
      </div>
      <div className={styles.specialSkills}>
        <h2 className={styles.h2}>Special Skills</h2>
        <p className={styles.p}>{person.skills.join(', ')}</p>
      </div>
      <div className={styles.description}>
        <h2 className={styles.h2}>Description</h2>
        <p className={styles.p}>{person.description}</p>
      </div>

      <div className={styles.commentSection}>
        <h2 className={styles.h2}>Comments</h2>
        <div className={styles.commentSlider}>
          <button className={styles.sliderButton} onClick={handlePrevComment}>&lt;</button>
          <div className={styles.comment}>
            <p><strong>Name:</strong> {comments.length > 0 ? comments[index].name : ''}</p>
            <p><strong>Batch:</strong> {comments.length > 0 ? comments[index].batch : ''}</p>
            <p><strong>Comment:</strong> {comments.length > 0 ? comments[index].comment : ''}</p>
          </div>
          <button className={styles.sliderButton} onClick={handleNextComment}>&gt;</button>
        </div>
      </div>

      <div className={styles.addCommentSection}>
        {!showAddComment && (
          <button className={styles.addButton} onClick={() => setShowAddComment(true)}>Add Comment</button>
        )}
        {showAddComment && (
          <form className={styles.commentForm} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              name="name"
              placeholder="Your Name"
              value={newComment.name}
              onChange={handleInputChange}
              required
            />
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
            <div>
              <button type="submit" className={styles.button}>Submit</button>
              <button className={styles.button} type="button" onClick={() => setShowAddComment(false)}>Close</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfileComponent;
