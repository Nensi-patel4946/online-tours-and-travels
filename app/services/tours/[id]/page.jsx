import PackageCard from "@/components/PackageCard";

const tours = [
  { id: 1, title: "Singapore", img: "/images/tours/singapore.jpg", duration: "5D/4N" },
  { id: 2, title: "Thailand", img: "/images/tours/thailand.jpg", duration: "6D/5N" },
  { id: 3, title: "Europe", img: "/images/tours/europe.jpg", duration: "10 Days" },
  { id: 4, title: "Dubai", img: "/images/tours/dubai.jpg", duration: "4D/3N" },
];

export default function Tours() {
  return (
    <section className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-5">Tour Packages</h2>
      <div className="grid gap-4 sm:grid-cols-4">{tours.map((t) => <PackageCard key={t.id} {...t} />)}</div>
    </section>
  );
}
