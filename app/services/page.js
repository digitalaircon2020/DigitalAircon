"use client"; 

import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100 px-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-200 rounded-full animate-pulse mb-6">
          <svg
            className="w-12 h-12 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-blue-900 mb-2">
          Coming Soon!
        </h1>

        <p className="text-blue-700 max-w-md mx-auto">
          We're working hard to bring you our full range of services. Stay tuned for updates!
        </p>

        <div className="mt-6">
          <button
            onClick={() => router.push("/")}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
