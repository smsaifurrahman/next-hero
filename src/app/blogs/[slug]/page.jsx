import React from 'react';

const page = ({params}) => {
    console.log(params);
    const {title,description}= blogs.find((blog) => blog.slug == params.slug)
    return (
        <div className="h-screen">
            <h5>{title}</h5>
            <h5>{description}</h5>
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

export default page;