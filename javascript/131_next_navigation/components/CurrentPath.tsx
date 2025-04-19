// app/components/CurrentPath.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function CurrentPath() {
  const pathname = usePathname();

  return <p>Current path: {pathname}</p>;
}

// usePathname is a hook provided by Next.js that allows you to access the current pathname of the URL. It is part of the Next.js Router API and is used in client components to get the current path without needing to pass it down as a prop from a parent component. This is particularly useful for dynamic routing scenarios where the path may change based on user interactions or navigation events.
// usePathname is a client-side hook, meaning it can only be used in components that are rendered on the client side. It cannot be used in server components or in the server-side rendering context. This is because server components do not have access to the browser's URL or navigation state, as they are rendered on the server before being sent to the client.