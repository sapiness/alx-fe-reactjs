import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
const BlogPostDetails = () => {
  const { slug} = useParams();
  return (
    <div>
      <h2>Blog Post: {slug}</h2>
      <p>This is the blog post page for {slug}.</p>
    </div>
  );
};
export default BlogPostDetails;