import { Suspense } from "react";
import ServiceDetails from "./ServiceDetails";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#eef4ff] via-[#d9e8ff] to-[#bbd4ff] px-4">
          <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[#d0ddf5] p-8 sm:p-12 animate-pulse">

            {/* Title Skeleton */}
            <div className="h-8 sm:h-10 w-3/4 bg-[#1e40af]/20 rounded-lg mb-6"></div>

            {/* Subtitle Skeleton */}
            <div className="h-5 w-2/3 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-5 w-full bg-gray-300 rounded-md mb-4"></div>
            <div className="h-5 w-5/6 bg-gray-300 rounded-md mb-8"></div>

            {/* SEO-Friendly Loading Text */}
            <p className="text-center text-[#1e40af] font-semibold text-base sm:text-lg">
              Preparing Apple Aircon services…
            </p>

            {/* CTA Skeleton */}
            <div className="mt-8 flex justify-center">
              <div className="h-12 w-48 rounded-full bg-[#1e40af]/30"></div>
            </div>

          </div>
        </div>
      }
    >
      <ServiceDetails />
    </Suspense>
  );
}
