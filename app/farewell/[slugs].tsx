"use client";
// pages/farewell/[slug].tsx

import { useRouter } from 'next/navigation';
import posts from '../../app/Components/farwellPostData'; // Import the post data

const FarewellPost: React.FC = () => {
    const router = useRouter();
    const { slug } = router.query;
    const post = posts.find(post => post.slug === slug);
  
    if (!post) {
      return <div>Post not found</div>;
    }
  
    return (
      <div>
        <h1>{post.description}</h1>
        <img src={post.imageUrl} alt={post.description} />
        <p>Author: {post.author}</p>
        {/* Render comments, etc. */}
      </div>
    );
  };
  
  export async function getStaticPaths() {
    const paths = posts.map(post => ({ params: { slug: post.slug } }));
    return {
      paths,
      fallback: false,
    };
  }
  
  export default FarewellPost;
  
