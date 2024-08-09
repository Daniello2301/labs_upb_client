"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const router = useRouter();

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-blue-300 transition-colors hover:bg-blue-400"
        onClick={() => {
          reset();
          router.back();
        }}
      >
        Try again
      </button>
    </main>
  );
}

export default Error;
