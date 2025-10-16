import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../components/Blog/BlogLanding.css'

export default function BlogDetail() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    fetch('/dynamic-blogs/blogs.json')
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b) => b.id === parseInt(id))
        setBlog(foundBlog)
      })
      .catch((err) => console.error(err))
  }, [id])

  if (!blog) {
    return <h2>Blog not found</h2>
  }

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />

      <div className="blog-bottom-section">
        <Link to="/blog" className="back-button">← Back to Blog</Link>
        <p className="blog-bottom-text">
          Thanks for reading! We’d love to help you grow your business with our expert IT and digital solutions.
        </p>
        <a href="https://wa.me/917838649867" className="cta-button">Get in Touch</a>
      </div>
    </div>
  )
}
