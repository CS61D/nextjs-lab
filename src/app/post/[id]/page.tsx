import Link from 'next/link'
import demoPosts from '../../demoPosts'

export default async function Post({ post }) {

  if (!post) {
    return <h1>Post not found</h1>
  }

  return (
    <div className="flex flex-col justify-center min-h-screen bg-indigo-500">
      <div className="w-full bg-black shadow-lg rounded-lg p-6 space-y-2">
        <Link href={`/`} className="text-white hover:text-purple-400 text-lg">
            > Home
        </Link>
        <div>
          <h1 className="text-3xl text-emerald-600 font-bold mb-4">{post.title}</h1>
          <p className='text-gray-500'>{post.date}</p>
          <p className="text-white">{post.body}</p>
        </div>
      </div>
    </div>
  )
}
