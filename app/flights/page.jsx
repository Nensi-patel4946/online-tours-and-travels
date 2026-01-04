import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Flights() {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto mt-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Flight Booking Services</h1>
        <p>Book domestic & international flights at best prices.</p>
        <button className="bg-orange-500 text-white px-5 py-3 rounded mt-6 font-bold">Contact to Book</button>
      </section>
      <Footer />
    </>
  );
}
