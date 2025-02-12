'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
  const { shortUrl } = params;
  const router = useRouter();

  useEffect(() => {
    async function performRedirect() {
      try {
        const response = await fetch(`/api/redirect/${shortUrl}`); // Fetch from API route
        const data = await response.json();

        if (data.url) {
          window.location.href = data.url; // Client-side redirect
        } else {
          router.push(process.env.NEXT_PUBLIC_HOST || "/"); // Redirect to root
        }
      } catch (error) {
        console.error('Error occurred:', error);
        router.push(process.env.NEXT_PUBLIC_HOST || "/"); // Redirect to root
      }
    }

    performRedirect();
  }, [shortUrl, router]);

  return (
    <div className='w-full h-[97vh] flex justify-center items-center bg-primary text-btnColor'>
      <p className='text-4xl'>Redirecting...</p>
    </div>
  );
}