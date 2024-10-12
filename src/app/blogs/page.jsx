import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className="p-24">
            {
                blogs.map((blog => (
                    <div key= {blog.slug} className="border p-12">
                        <h3>{blog.title}</h3>
                        <h3>{blog.description}</h3>
                        <button className="bg-red-400 p-3 rounded-xl">
                            <Link href={`/blogs/${blog.slug}`}> View Details</Link>
                        </button>
                    </div>
                ) ))
            }
        </div>
    );
};

const blogs = [
    {
      slug: "how-to-learn-javascript",
      title: "How to Learn JavaScript",
      description: "A comprehensive guide on learning JavaScript effectively."
    },
    {
      slug: "10-tips-for-web-development",
      title: "10 Tips for Web Development",
      description: "Boost your web development skills with these essential tips."
    },
    {
      slug: "getting-started-with-react",
      title: "Getting Started with React",
      description: "An introduction to React.js and how to get started with it."
    },
    {
      slug: "mastering-css-grid",
      title: "Mastering CSS Grid",
      description: "Learn how to create complex layouts with CSS Grid."
    },
    {
      slug: "why-learn-typescript",
      title: "Why Learn TypeScript?",
      description: "The benefits of learning TypeScript and how it improves JavaScript development."
    }
  ];
  
  
  

export default BlogsPage;
