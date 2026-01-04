import Image from "next/image";

export default function PackageCard({ name, duration, image }) {
  return (
    <div className="border rounded-2xl shadow hover:scale-105 transition p-4 bg-white">
      <Image src={image} alt={name} width={350} height={220} className="rounded-xl"/>
      <h3 className="text-xl font-bold mt-3">{name}</h3>
      <p className="text-gray-600">{duration}</p>
      <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg">Enquire Now</button>
    </div>
  );
}
