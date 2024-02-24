// BlogPage.js
import React from 'react';
import './assets/stylesheets/blog.scss'

const blogData = [
  {
    id: 1,
    title: 'Sample Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '2024-02-16',
  },
  {
    id: 2,
    title: 'Sample Post 2',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    date: '2024-02-17',
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      {blogData.map((post) => (
        <div key={post.id} className="blog-card">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div className="blog-meta">
            <span>{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
