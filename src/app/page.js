// app/page.js
// 'use client';

// import { useEffect } from 'react';

export default function Home() {
  // useEffect(() => {
    console.log('SECRET:', process.env.SECRET);
  // }, []);

  return (
    <div>
      <h1>Check the console for the SECRET</h1>
    </div>
  );
}
