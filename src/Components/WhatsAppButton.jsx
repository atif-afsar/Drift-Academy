import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+917300666551"; // <-- replace with your number (no + symbol)
  const message = "Hello! I want to know more about Drift Academy.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center"
      style={{ boxShadow: "0px 4px 15px rgba(0,0,0,0.4)" }}
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
