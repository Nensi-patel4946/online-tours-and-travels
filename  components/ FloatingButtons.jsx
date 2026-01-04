import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3">
      <a href="tel:+919999999999" className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
        <Phone size={22} />
      </a>
      <a href="https://wa.me/919999999999" className="bg-green-500 text-white p-3 rounded-full shadow-lg">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
