"use client";
import Image from "next/image";
import "../app/whatsapp-float.css";

export default function FloatingWhatsappButton() {
  return (
    <a
      href="https://wa.me/51901426737?text=Quiero%20mi%20web%20desde%20149%20soles&utm_source=website&utm_medium=floating_button&utm_campaign=landing_149"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-7 right-7 z-50 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg p-4 flex items-center justify-center whatsapp-float-anim"
      style={{ boxShadow: "0 4px 24px 0 rgba(37,99,235,0.25)" }}
    >
      <Image
        src="/whatsapp-logo.png"
        alt="WhatsApp"
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
        priority
      />
    </a>
  );
}
