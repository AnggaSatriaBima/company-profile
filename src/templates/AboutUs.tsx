const AboutUs = () => {
  return (
      <div className="flex flex-col items-center py-10 h-screen">
        <p className="mt-14 text-4xl text-center text-neutral-900 max-w-4xl">
          About Us
        </p>
        <p className="mt-10 text-xl text-center text-neutral-500 max-w-4xl">
          Welcome to <span className="font-bold text-black">Classic</span>, the main destination for classic BMW car lovers and collectors. We are a car buying and selling shop that focuses on providing high quality classic BMW cars, both for collection and daily use.
        </p>
        <div className="flex justify-center mt-10">
          <a
            href="https://api.whatsapp.com/send?phone=81575220301"
            target="_blank"
            className="bg-gradient-to-r from-[#1c69d4] to-primary-500 py-3 px-14 mx-3 rounded-md text-white dark:text-white text-lg mt-4"
          >
            Consultation..
          </a>
        </div>
      </div>
  );
};

export { AboutUs };