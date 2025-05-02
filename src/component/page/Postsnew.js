import React, { useState, useEffect } from 'react';

// If using Axios, import it:
// import axios from 'axios';

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts using useEffect
  useEffect(() => {
    // Fetch posts from the WordPress REST API
    fetch('http://localhost/wordpress/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });

    // If using Axios, you could do:
    // axios.get('https://your-wordpress-site.com/wp-json/wp/v2/posts')
    //   .then((response) => {
    //     setPosts(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching posts:', error);
    //     setLoading(false);
    //   });

  }, []);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordPressPosts;
