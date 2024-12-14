import Image from "next/image";

export default function Slide() {
  return (
    <div className="slideSection bg-[#f3dcc0] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[1760px] h-[470px] gap-8 justify-items-center">
      <div className="slideText pt-9 text-center sm:text-left m-20">
        <h4 className="font-extrabold text-2xl sm:text-3xl text-center">50+ Beautiful rooms inspiration</h4>
        <p className="text-sm sm:text-base text-center font-bold">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you
        </p>
        <button className="bg-[#B88E2F] text-white py-2 px-4 rounded hover:bg-[#a07c27] transition m-10">
          Explore More
        </button>
      </div>
      <div className="slideImages flex justify-center sm:justify-start">
      <Image src="/inner (1).png" alt="Logo" width={404} height={582} />
      </div>
      <div className="slideImages mt-3 flex justify-center sm:justify-start">
      <Image src="/Sideinner (1).png" alt="Logo" width={404} height={582} />
      </div>
    </div>
  );
}