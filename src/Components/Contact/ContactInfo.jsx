import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="text-xl font-semibold mb-4">Our Information</h2>

      <div className="space-y-4 text-gray-700">
        <p className="flex items-center gap-3">
          <FaPhoneAlt className="text-yellow-500" /> 073006 66551
        </p>

        <p className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-500" /> driftpvt.ltd@gmail.com
        </p>

        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-yellow-500" />
          K3 Plaza, Third Floor, Dodhpur Main Road,
          <br /> Near Kela Nagar Chauraha, Aligarh
        </p>
      </div>

      <h3 className="font-semibold mt-6 mb-2">Follow Us</h3>
      <div className="flex items-center gap-5 text-2xl">
        <a
          href="https://www.instagram.com/drift_academy_pvt.ltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/70 hover:text-yellow-500 transition-colors duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/driftacademypvtltd/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/70 hover:text-yellow-500 transition-colors duration-300"
        >
          <FaFacebook />
        </a>
        
        
      </div>
    </div>
  );
}
