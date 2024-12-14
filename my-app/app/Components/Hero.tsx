import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-full">
        <Image
          src="/home.jpeg"
          layout="fill"
          objectFit="cover"
          alt="Hero Image"
        />
        <div className="absolute inset-0 flex justify-center items-center ">
          <div className="bg-[#FFF3E3] max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl rounded-md p-8 md:p-12 text-center md:text-left">
            <h6 className="font-bold text-base md:text-lg">New Arrival</h6>
            <h3 className="text-2xl md:text-3xl animate-pulse lg:text-4xl font-extrabold text-[#B88E2F] mt-2 md:mt-4">
              Discover Our <br /> New Collection
            </h3>
            <p className="mt-2 md:mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
            </p>
            <button className="mt-4 md:mt-6 bg-[#B88E2F] text-white py-2 px-8 md:px-12 rounded">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}