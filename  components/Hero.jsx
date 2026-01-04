import React from "react";

export default function Hero() {
  return (
    <section className="w-full pt-4">

      {/* Slider / Travel Image */}
      <div className="w-full h-[420px] md:h-[520px] overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/hero-slider.jpg"
          alt="Big Travel Slider"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Headline & Subtext */}
      <div className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black">
          Trusted Travel Consultant for Every Journey
        </h1>

        <p className="text-xl text-gray-600 mt-4 font-medium">
          Domestic • International • Customized Tours
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-green-500 text-white px-7 py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition"
          >
            WhatsApp Now
          </a>

          <a
            href="/quote"
            className="border-2 border-blue-600 text-blue-600 px-7 py-3 rounded-xl text-lg font-semibold hover:bg-blue-50 transition"
          >
            Get Custom Quote
          </a>
        </div>
      </div>

    </section>
  );
}
