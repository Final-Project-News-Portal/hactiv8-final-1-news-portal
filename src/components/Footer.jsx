import { ImGithub } from "react-icons/im";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 bg-black text-[#949494] py-10 px-4 sm:py-20 font-tittleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <p className="text-white text-2xl font-semibold">© Team-V</p>
          <div className="flex gap-4 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-semibold text-white mb-4">About us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>RCTN-KS08-010 - Iqbal</p>
            <p>RCTN-KS08-016 - Farhan</p>
            <p>RCTN-KS08-017 - El</p>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-semibold text-white mb-4">Helpful Links</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              wallet
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex flex-col md:flex-row md:justify-between">
            <input
              className="bg-transparent border px-4 py-2 text-sm md:w-2/3"
              placeholder="e-mail"
              type="text"
            />
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black md:w-1/3 mt-2 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

