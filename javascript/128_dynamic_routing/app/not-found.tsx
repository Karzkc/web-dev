import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Not Found</h2>
      <p className="mb-6 text-center">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        
          Return Home
        
      </Link>
    </div>
  )
}