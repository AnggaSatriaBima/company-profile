"use client";
import { Base } from "@/templates/Base";
import { Footer } from "@/templates/Footer";
import { useState } from "react";
import Loading from "@/loading/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <>
      {!loading ? (
        <>
          <Base />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
