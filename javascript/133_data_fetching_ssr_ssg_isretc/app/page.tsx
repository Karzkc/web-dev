interface Post {
  id: string
  title: string
  content: string
  author: string
}

export default async  function Home() {
  const data = await fetch('https://api.vercel.app/blog',{next:{revalidate:2}})
  const posts: Post[] = await data.json()
  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.id}:- {post.title}: {post.author} <br /></li>
        ))}
      </ul>
    </main>
  )
}
