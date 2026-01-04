import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="max-w-5xl mx-auto mt-12 px-6">
        <h1 className="text-4xl font-bold mb-5">Get in Touch</h1>
        <form className="grid gap-4">
          <input placeholder="Name" className="border p-2 rounded"/>
          <input placeholder="Phone" className="border p-2 rounded"/>
          <input placeholder="Email" className="border p-2 rounded"/>
          <textarea placeholder="Message" className="border p-2 rounded h-28"/>
          <button className="bg-orange-500 text-white py-3 rounded font-bold">Submit</button>
        </form>
        <div className="mt-6">
          <p>📞 +91 98765 43210</p>
          <p>💬 WhatsApp Support Available</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
