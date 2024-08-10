"use client"
import { Footer } from "@/templates/Footer";
import { VerticalFeatures } from "@/templates/VerticalFeatures";
import { useState } from "react";
import Loading from "@/loading/Loading";

export default function Product() {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 800)
    return (
        <>
            {
                !loading ? 
                <>
                    <VerticalFeatures />
                </>
                :
                <Loading />
            }
            <Footer />
        </>
    );
}
