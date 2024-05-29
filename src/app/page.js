// app/page.js
// 'use client';
import {  secret } from '@aws-amplify/backend';

// import { useEffect } from 'react';

export default function Home() {
  const clientId= secret('SECRET')
    console.log('SECRET:', clientId);
  // }, []);

  return (
    <div>
      <h1>Check the console for the SECRET</h1>
    </div>
  );
}
