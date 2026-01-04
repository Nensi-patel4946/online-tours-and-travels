// components/Header.js
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Left Section */}
        <div className="flex items-center gap-3 font-bold text-xl">
          <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center">
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          </div>
          <span>LOGO</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-gray-800 font-medium">
          <Link href="/" className="hover:text-purple-600 transition">Home</Link>
          <Link href="/tours" className="hover:text-purple-600 transition">Tours</Link>
          <Link href="/about" className="hover:text-purple-600 transition">About</Link>
          <Link href="/contact" className="hover:text-purple-600 transition">Contact</Link>

          {/* Call Button */}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-1 hover:text-purple-600 transition"
          >
            <Phone className="w-[18px] h-[18px]" />
            <span>Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-green-600 transition"
          >
            <MessageCircle className="w-[18px] h-[18px]" />
            <span>WhatsApp</span>
          </a>
        </nav>

      </div>
    </header>
  );
}
