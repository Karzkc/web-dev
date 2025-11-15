// apiDemo.mjs
import fetch from 'node-fetch';

// 1️⃣ GET Request - Fetching a list of posts
async function fetchPosts() {
  console.log("🟢 GET /posts");
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log("✅ Got posts:", data.slice(0, 2)); // Show only first 2 posts
}

// 2️⃣ GET Request - Fetch single post by ID
async function fetchPostById(id) {
  console.log(`🟢 GET /posts/${id}`);
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();
  console.log("✅ Got post:", post);
}

// 3️⃣ POST Request - Create a new post (fake)
async function createPost() {
  console.log("🟢 POST /posts");
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Hello Kartik',
      body: 'This is a fake POST request',
      userId: 1,
    }),
  });

  const result = await response.json();
  console.log("✅ Created post:", result);
}

// Run All
(async () => {
  await fetchPosts();
})();
