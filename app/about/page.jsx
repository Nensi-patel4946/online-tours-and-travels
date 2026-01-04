import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto mt-12 px-6">
        <h1 className="text-4xl font-bold mb-4">About Bhakti Tours & Travels</h1>
        <p>We are trusted travel consultants offering domestic and international tour planning with visa support and 24/7 assistance.</p>
      </section>
      <Footer />
    </>
  );
}
