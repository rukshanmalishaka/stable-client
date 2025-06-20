"use client"
import { useState, useEffect } from 'react';
import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Research from "@/components/Research";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // After 2 seconds, hide the loader
    }, 2000);  // Adjust time as needed

    return () => clearTimeout(timer);  // Cleanup on component unmount
  }, []);

  return (
    <div className="px-10">
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Hero />
          <About />
          <Features />
          <ComingSoon />
          <Research />
        </>
      )}
    </div>
  );
}
