"use client";
import React, { useEffect } from 'react';
import { Typography } from '@/components';
import PreRegisterButton from '@/components/pre-register/pre-register';

export default function Page() {
  
  useEffect(() => {
    fetch("/api/clue")  
      .then(res => res.json())
      .then(data => console.log("API response:", data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Typography.H1>Playground</Typography.H1>
        <Typography.Muted className="text-left mb-4">
          Todo: add the updated preregister button in navbar
        </Typography.Muted>
        <PreRegisterButton />
      </div>
    </div>
  );
}
