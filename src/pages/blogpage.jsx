import React from 'react'
import '../components/Blog/BlogLanding.css'
import { Link } from 'react-router-dom'
import { blogData } from '../components/Blog/blogData'

export default function BlogPage() {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blogs</h1>
      <div className="blog-list">
        {blogData.map((blog, index) => (
          <div
            key={blog.id}
            className={`blog-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="blog-card-image">
              <Link to={`/blog/${blog.id}`}>
                <img src={blog.image} alt={blog.title} />
              </Link>
            </div>
            <div className="blog-card-content">
              <Link to={`/blog/${blog.id}`} className="blog-card-text-link">
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
              </Link>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
