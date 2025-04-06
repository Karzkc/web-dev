import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-blue-700">🌐 Middleware in Next.js</h2>

      <p className="text-gray-700">
        <strong>Middleware</strong> allows you to run custom code <em>before</em> a request is completed.
        You can rewrite, redirect, modify headers, or even respond directly based on the incoming request.
      </p>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-green-700">⚙️ Features:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Runs before cached content and route matching</li>
          <li>Executes custom logic at the edge before request completion</li>
          <li>Enables dynamic routing, redirection, and header modification</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-purple-700">✅ Best Use Cases:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Quick redirects based on request headers or URL params</li>
          <li>A/B testing by rewriting requests</li>
          <li>Modifying headers for specific routes/pages</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-red-700">❌ Not Ideal For:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Slow or heavy data fetching</li>
          <li>Session management or authentication (use middleware carefully for auth)</li>
        </ul>
      </div>
    </div>

  );
}
