// WhatsAppButton.jsx
import React from "react";
import "./styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "923435349407"; // Use your number without + or spaces
  const message = "Hi, I visited your website and want to know more.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;
