import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tours from "../../data/tours.json";

export default function TourDetail({ params }) {
  const tour = tours.find(t => t.id == params.id);
  if (!tour) return <h2 className="text-center mt-10 text-2xl">Package Not Found</h2>;

  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto mt-12 px-6">
        <h1 className="text-4xl font-bold mb-3">{tour.title}</h1>
        <img src={tour.image} className="rounded shadow mb-5 w-full"/>
        <p className="text-lg"><b>Duration:</b> {tour.duration}</p>
        <p className="text-lg"><b>Location:</b> {tour.location}</p>

        <h3 className="text-2xl font-bold mt-6 mb-2">Highlights</h3>
        <ul className="list-disc pl-6">
          {tour.highlights.map((h,i)=><li key={i}>{h}</li>)}
        </ul>

        <h3 className="text-2xl font-bold mt-6 mb-2">Itinerary</h3>
        {tour.itinerary.map((d,i)=><p key={i} className="border p-2 rounded my-2">Day {i+1}: {d}</p>)}

        <button className="bg-green-700 text-white px-5 py-3 rounded mt-6 font-bold">Enquire on WhatsApp</button>
      </section>
      <Footer />
    </>
  );
}
