"use client";
import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "✅ Enquiry Sent Successfully!" : "❌ Failed to Send");
      if (res.ok) setForm({ name: "", phone: "", date: "", message: "" });
    } catch {
      setStatus("❌ Network Error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-5 rounded-2xl max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-3">Get Custom Quote</h2>

      <input
        placeholder="Your Name"
        className="w-full border p-2 rounded-lg mb-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Phone Number"
        className="w-full border p-2 rounded-lg mb-2"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        required
      />

      <input
        type="date"
        className="w-full border p-2 rounded-lg mb-2"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        required
      />

      <textarea
        placeholder="Message"
        className="w-full border p-2 rounded-lg mb-2"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button className="w-full bg-black text-white p-2 rounded-xl">Submit</button>

      {status && <p className="mt-2 text-center">{status}</p>}
    </form>
  );
}
