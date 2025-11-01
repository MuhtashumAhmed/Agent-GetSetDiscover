import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { AiOutlineLinkedin } from "react-icons/ai";

const socialIcons = [
  { icon: CiFacebook, name: "Facebook" },
  { icon: FaXTwitter, name: "Twitter" },
  { icon: FaInstagram, name: "Instagram" },
  { icon: PiYoutubeLogoLight, name: "YouTube" },
  { icon: AiOutlineLinkedin, name: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="mt-6 mb-6 grid grid-cols-1 justify-items-center md:mb-0 md:flex justify-between pr-4">
      {/* left box  */}
      <div className=" flex flex-col gap-y-4 md:flex-row gap-x-6 px-5 mb-6">
        <p className="text-gray-text-color text-xs text-center md:text-left">
          Copyright © 2025 Get Set Discover
        </p>

        <div className="text-light-gray-text-color text-xs text-nowrap md:text-xs flex gap-x-4">
          <Link>Privacy Policy</Link>
          <Link>Term and conditions</Link>
          <Link>Contact</Link>
        </div>
      </div>

      {/* right box */}
      <div className="flex space-x-3">
        {socialIcons.map(({ icon: Icon, name }, index) => (
          <Icon
            key={index}
            title={name}
            size={20}
            className="cursor-pointer text-[#757D83] hover:text-gray-600 transition-colors duration-200"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
