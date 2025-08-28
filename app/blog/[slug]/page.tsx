"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark, Heart } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React in 2024: A Complete Guide",
      slug: "getting-started-with-react-2024",
      content: `
# Getting Started with React in 2024: A Complete Guide

React continues to be one of the most popular frontend frameworks, and 2024 brings exciting new features and best practices. In this comprehensive guide, we'll walk through everything you need to know to start building modern React applications.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. Created by Facebook (now Meta), React has revolutionized how we think about building interactive UIs with its component-based architecture and virtual DOM.

## Setting Up Your Development Environment

Before we dive into React, let's set up a proper development environment:

### Prerequisites
- Node.js (version 18 or higher)
- A code editor (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Creating Your First React App

The easiest way to start a new React project is using Create React App or Vite:

\`\`\`bash
# Using Create React App
npx create-react-app my-react-app
cd my-react-app
npm start

# Using Vite (recommended for better performance)
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
\`\`\`

## Understanding React Components

Components are the building blocks of React applications. They're reusable pieces of UI that can manage their own state and lifecycle.

### Functional Components

Modern React primarily uses functional components with hooks:

\`\`\`jsx
import React, { useState } from 'react';

function Welcome({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Welcome;
\`\`\`

## React Hooks

Hooks are functions that let you use state and other React features in functional components:

### useState Hook
Manages local component state:

\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

### useEffect Hook
Handles side effects like API calls, subscriptions, or DOM manipulation:

\`\`\`jsx
useEffect(() => {
  // Effect logic here
  return () => {
    // Cleanup logic here
  };
}, [dependencies]);
\`\`\`

## Best Practices for 2024

1. **Use TypeScript**: Adds type safety and better developer experience
2. **Component Composition**: Prefer composition over inheritance
3. **Custom Hooks**: Extract reusable logic into custom hooks
4. **Performance Optimization**: Use React.memo, useMemo, and useCallback wisely
5. **Testing**: Write tests for your components using Jest and React Testing Library

## Building Your First Component

Let's create a simple todo list component:

\`\`\`jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
\`\`\`

## Next Steps

Now that you have a solid foundation in React, here are some next steps to continue your learning journey:

1. **Learn React Router** for navigation
2. **Explore state management** with Context API or Redux Toolkit
3. **Build projects** to practice your skills
4. **Learn Next.js** for full-stack React applications
5. **Understand testing** with Jest and React Testing Library

## Conclusion

React remains an excellent choice for building modern web applications. With its strong ecosystem, active community, and continuous improvements, learning React in 2024 is a great investment in your development career.

Remember, the best way to learn React is by building projects. Start small, experiment with different concepts, and gradually work your way up to more complex applications.

Happy coding! 🚀
      `,
      author: {
        name: "Arjun Sharma",
        avatar: "/professional-male-student-president.png",
        bio: "Full-stack developer and React enthusiast",
      },
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["React", "JavaScript", "Frontend", "Tutorial"],
      image: "/react-tutorial-blog-post.png",
    },
    // Add more posts here...
  ]

  return posts.find((post) => post.slug === slug)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const post = getBlogPost(params.slug)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!post) {
    return (
      <main className="min-h-screen aurora-bg">
        <Navigation />
        <div className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl text-white mb-4">Post Not Found</h1>
            <p className="text-[#B0B0B0] mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button className="bg-[#4A90E2] hover:bg-[#5BA0F2]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen aurora-bg">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-[#1A1F2E] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#4A90E2] to-[#50C878] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <Navigation />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-[#4A90E2] hover:text-[#5BA0F2] mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-[#B0B0B0]">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              <span className="px-3 py-1 bg-[#4A90E2]/20 text-[#4A90E2] rounded-full text-sm">{post.category}</span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-[#E0E0E0] font-semibold">{post.author.name}</p>
                  <p className="text-[#B0B0B0] text-sm">{post.author.bio}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`border-[#4A90E2]/30 ${isLiked ? "bg-[#4A90E2] text-white" : "text-[#4A90E2]"}`}
                >
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                  Like
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`border-[#50C878]/30 ${isBookmarked ? "bg-[#50C878] text-white" : "text-[#50C878]"}`}
                >
                  <Bookmark className={`h-4 w-4 mr-1 ${isBookmarked ? "fill-current" : ""}`} />
                  Save
                </Button>
                <Button size="sm" variant="outline" className="border-[#FF6B6B]/30 text-[#FF6B6B] bg-transparent">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg mb-8"
            />
          </div>

          {/* Article Content */}
          <div className="glass rounded-lg p-8 mb-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <div
                className="text-[#E0E0E0] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^# (.*$)/gm, '<h1 class="font-heading font-bold text-3xl text-white mb-6 mt-8">$1</h1>')
                    .replace(/^## (.*$)/gm, '<h2 class="font-heading font-bold text-2xl text-white mb-4 mt-6">$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3 class="font-heading font-bold text-xl text-white mb-3 mt-4">$1</h3>')
                    .replace(
                      /```(\w+)?\n([\s\S]*?)```/g,
                      '<pre class="bg-[#1A1F2E] rounded-lg p-4 overflow-x-auto mb-4"><code class="text-[#E0E0E0] text-sm">$2</code></pre>',
                    )
                    .replace(
                      /`([^`]+)`/g,
                      '<code class="bg-[#1A1F2E] px-2 py-1 rounded text-[#4A90E2] text-sm">$1</code>',
                    )
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="text-[#B0B0B0]">$1</em>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/^(?!<[h|p|u|o|c])/gm, '<p class="mb-4">')
                    .replace(/<p class="mb-4">(<[h|u|o|c])/g, "$1"),
                }}
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#4A90E2]/20 text-[#4A90E2] rounded-full text-sm">
                <Tag className="inline h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Author Card */}
          <div className="glass rounded-lg p-6">
            <div className="flex items-center">
              <img
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-1">
                <h3 className="font-heading font-bold text-xl text-white mb-1">{post.author.name}</h3>
                <p className="text-[#B0B0B0] mb-3">{post.author.bio}</p>
                <Button size="sm" className="bg-[#4A90E2] hover:bg-[#5BA0F2]">
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
