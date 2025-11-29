import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="text-xl font-semibold mb-4">Our Information</h2>

      <div className="space-y-4 text-gray-700">
        <p className="flex items-center gap-3">
          <FaPhoneAlt className="text-yellow-500" /> +91 123 456 7890
        </p>

        <p className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-500" /> info@driftacademy.com
        </p>

        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-yellow-500" /> 
          K3 Plaza, Dodhpur Main Road,  
          Kela Nagar, Aligarh, UP, India
        </p>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Follow Us</h3>
      <div className="flex gap-4 text-2xl text-gray-700">
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
  );
}
