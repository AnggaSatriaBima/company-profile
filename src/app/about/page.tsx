"use client";
import { AboutUs } from "@/templates/AboutUs";
import { useState } from "react";
import Loading from "@/loading/Loading";

export default function About() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <>
      {!loading ? (
        <>
          <AboutUs />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
