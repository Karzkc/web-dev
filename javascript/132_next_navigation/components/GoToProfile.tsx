// app/components/GoToProfile.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function GoToProfile() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/about')}>
      Go to About page
    </button>
  );
}
// userouter is a hook provided by Next.js that allows you to programmatically navigate between pages in your application. It is part of the Next.js Router API and is used in client components to handle navigation events without needing to use traditional anchor tags or links. This is particularly useful for dynamic routing scenarios where you want to navigate based on user interactions or application state changes.
// here we are using the useRouter hook to get access to the router object, which provides methods for navigation. In this case, we are using the push method to navigate to the '/about' page when the button is clicked. This allows for a more seamless and dynamic user experience, as it avoids full page reloads and maintains the client-side routing capabilities of Next.js.
