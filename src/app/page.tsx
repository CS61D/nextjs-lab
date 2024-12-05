import Link from 'next/link'
import demoPosts from './demoPosts'

export default async function Home() {

  const posts = demoPosts;

  return (
    <div className="min-h-screen bg-indigo-500 flex items-center justify-center">
      <div className="w-full bg-red-400 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-lime-300">Angela's Epic Blog</h1>
        <div className="my-2">
          <Link href={`/about`} className="text-white font-bold hover:text-purple-900 text-lg">
              About Me
          </Link>
        </div>
        <ul className="space-y-4 my-2">
          {posts.map((post) => (
            <li key={post.id} className="bg-lime-400 shadow-lg rounded-lg p-6">
              <p className="text-sky-400">{post.date}</p>
              <Link href={`/post/${post.id}`} className="text-sky-600 font-bold hover:text-purple-400 text-lg">
                {post.title}
              </Link>
              <p className="text-sky-800">{post.body.substring(0, 75)}...</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
