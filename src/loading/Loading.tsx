import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        width={20}
        height={20}
        className="w-20 h-20 animate-spin"
        src="https://www.svgrepo.com/show/199956/loading-loader.svg"
        alt="Loading icon"
      />
    </div>
  );
}
