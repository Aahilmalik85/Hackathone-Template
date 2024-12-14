import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/image-1.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "/image-2.png",
      description: "Stylish cafe chair.",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "/image-3.png",
      description: "Luxury big sofa.",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 28,
      image: "/image-4.png",
      description: "Outdoor bar table & stool.",
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      age: 28,
      image: "/image-5.png",
      description: "Night lamp.",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      age: 28,
      image: "/image-9.jpeg",
      description: "Small mug.",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      age: 28,
      image: "/image-7.png",
      description: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      age: 28,
      image: "/image-8.jpeg",
      description: "Minimalist flower pot.",
    },
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-center text-4xl font-bold mb-12">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
          >
            <div className="w-full h-64 relative">
              <Image
                src={card.image}
                alt={card.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h5 className="font-bold text-xl">{card.name}</h5>
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
              <h5 className="font-bold text-lg mt-4">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="text-[#B88E2F] px-6 py-2 border-2 border-[#B88E2F] rounded hover:bg-[#B88E2F] hover:text-white transition">
          Show More
        </button>
      </div>
    </div>
  );
}