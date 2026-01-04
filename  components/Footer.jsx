import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
          <Link href="#">About</Link>
          <Link href="#">Tours</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy</Link>
          <Link href="#" className="flex items-center gap-1"><MapPin size={14}/> Address</Link>
          <Link href="tel:+919876543210" className="flex items-center gap-1"><Phone size={14}/> Phone</Link>
          <Link href="https://wa.me/919876543210" className="flex items-center gap-1"><MessageCircle size={14}/> WhatsApp</Link>
          <span>| Google Map Embed |</span>
        </div>

        {/* Photo Section */}
        <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-lg border">
          <img
            src="/footer-photo.jpg"
            alt="Travel Office"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-52 border rounded-lg overflow-hidden mb-6">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509365!2d144.9556513153158!3d-37.8173279797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1fdfb37%3A0xf5771b5d6c3f8f0!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1611814842350!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Copyright */}
        <div className="text-xs">
          © 2026 All rights reserved | Dhyey Patel
        </div>
      </div>
    </footer>
  );
}
