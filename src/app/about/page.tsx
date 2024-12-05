import Link from 'next/link'

export default async function About() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-indigo-500">
      <div className="w-full bg-black shadow-lg rounded-lg p-6 space-y-2">
        <Link href={`/`} className="text-white hover:text-purple-400 text-lg">
            > Home
        </Link>
        <div>
          <h1 className="text-3xl text-emerald-600 font-bold mb-4">About Me</h1>
          <p className='text-gray-500'>Hi! My name is Angela! Welcome to my blog!</p>
          <p className="text-white">I am a 4th year CS major at UC Berkeley.</p>
        </div>
      </div>
    </div>
  )
}
