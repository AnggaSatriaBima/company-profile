"use client";
import { useEffect, useState } from "react";
import Loading from "@/loading/Loading";
import Card from "@/card/Card";

export default function Teams() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  setTimeout(() => {
    setLoading(false);
  }, 800);

  interface name {
    title: string;
    first: string;
    last: string;
  }
  interface picture {
    large: string;
  }
  interface description {
    description: string;
  }
  interface timezone {
    timezone: description;
  }

  interface Res {
    name: name;
    picture: picture;
    location: timezone;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData.results);
      } catch (error: any) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {!loading ? (
        <>
          <div className="pt-4 dark:border-b border-white min-h-[800px] mb-[8rem]">
            <h2 className="text-3xl font-bold text-gray-900 flex justify-center pb-5">
              Our Teams
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 pb-2">
              {data.length > 0 &&
                data.map((res: Res, index) => {
                  return (
                    <Card
                      key={index}
                      name={`${res.name.title}. ${res.name.first} ${res.name.last}`}
                      img={res.picture.large}
                      timezone={res.location.timezone.description}
                    />
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
