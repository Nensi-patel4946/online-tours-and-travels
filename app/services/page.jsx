import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import EnquiryForm from "@/components/EnquiryForm";
import tours from "./data/tours.json";

export default function Home() {
  return (
    <>
      <Header />

      <section className="h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: "url('/travel-hero.jpg')" }}>
        <h1 className="text-5xl font-bold">Trusted Travel Consultant for Every Journey</h1>
        <p className="mt-3 text-xl">Domestic • International • Customized Tours</p>
        <div className="flex gap-5 mt-6">
          <button className="bg-orange-500 px-6 py-3 rounded font-semibold">Get Custom Quote</button>
          <button className="bg-green-600 px-6 py-3 rounded font-semibold">WhatsApp Now</button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-10"><EnquiryForm /></div>

      <section className="max-w-6xl mx-auto mt-14">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tours.slice(0, 3).map((t) => (
            <div key={t.id} className="bg-white p-4 shadow rounded">
              <img src={t.image} className="rounded mb-3"/>
              <h3 className="text-xl font-bold">{t.title}</h3>
              <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3">Enquire Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-600 text-white py-10 mt-16 text-center">
        <h2 className="text-3xl font-bold">Planning Your Next Trip?</h2>
        <div className="flex justify-center gap-6 mt-5">
          <button className="bg-white text-orange-600 px-6 py-3 rounded font-bold">Get Free Consultation</button>
          <button className="bg-green-700 px-6 py-3 rounded font-bold">WhatsApp Now</button>
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
