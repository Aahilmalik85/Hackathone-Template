import Image from "next/image";

import Din from "../../Public/dining.jpeg";
import Liv from "../../public/living.jpeg";
import Bed from "../../public/bedroom.jpeg";

export default function SubHero() {
  return (
    <div className="py-16 px-4">
      <div className="text-center mb-12">
        <h3 className="text-[#292826] font-extrabold text-2xl sm:text-3xl lg:text-4xl">
          Browse The Range
        </h3>
        <p className="text-gray-600 mt-3 text-base sm:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="text-center">
          <div className="w-72 h-48 relative">
            <Image
              src={Din}
              alt="Dining"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h6 className="font-bold text-xl mt-6">Dining</h6>
        </div>
        <div className="text-center">
          <div className="w-72 h-48 relative">
            <Image
              src={Liv}
              alt="Living"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h6 className="font-bold text-xl mt-6">Living</h6>
        </div>
        <div className="text-center">
          <div className="w-72 h-48 relative ">
            <Image
              src={Bed}
              alt="Bedroom"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h6 className="font-bold text-xl mt-6">Bedroom</h6>
        </div>
      </div>
    </div>
  );
}