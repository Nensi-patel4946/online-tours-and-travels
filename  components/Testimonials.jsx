export default function Testimonials() {
  return (
    <section className="text-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <div className="grid gap-3 sm:grid-cols-3 px-4">
        {["Great service & planning", "Smooth international trip", "Highly recommended"].map((t, i) => (
          <div key={i} className="bg-white p-3 rounded-2xl shadow-md">"{t}" – Client</div>
        ))}
      </div>
    </section>
  );
}
