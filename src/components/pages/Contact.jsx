import { BsEnvelopeAt, BsGithub, BsLinkedin, BsMailbox2, BsMapFill, BsPhoneFill, BsWhatsapp } from "react-icons/bs";
import robotVideo from "../../assets/robot.mp4";
const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div
        id="contact"
        className="relative z-0 lg:w-8/12 md:w-11/12 w-full flex-col m-auto text-sm lg:text-base py-12 dark:text-white text-black"
      >
        {/* Title */}
        <p className="text-4xl md:text-5xl font-light bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent mb-6 text-center">
          Contact Now
        </p>
        <div className="mt-4 mx-auto w-24 h-[4px] bg-gradient-to-r from-blue-500 to-red-500 rounded-full"></div>

        {/* Contact Details + Form */}
        <div className="w-full lg:flex m-auto gap-6">
          {/* Right Section - Form */}
          <div className="lg:w-1/2 p-6  dark:border-gray-700 backdrop-blur-md mt-6 lg:mt-0">
            <p className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
              Send Message
            </p>
            <hr className="mb-4 border-gray-300 dark:border-gray-600" />
            <form
              action="https://formspree.io/f/mjkbygqk"
              method="POST"
              className="text-black dark:text-white space-y-4"
            >
              <input
                className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Name"
                type="text"
                name="Name"
                required
              />
              <input
                className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Email"
                type="email"
                name="email"
                required
              />
              <textarea
                className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                cols={4}
                rows={4}
                placeholder="Message"
                name="message"
                required
              />
              <button
                type="submit"
                className="mt-2 box hover:bg-gradient-to-r hover:text-white from-blue-600 to-red-500 font-semibold px-6 py-2 transition-all linear duration-500  text-sm text-gray-800  "
              >
                Hire Me
              </button>
            </form>
          </div>
          {/* Left Section - Video */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <video
              src={robotVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-[80%] h-auto hover:scale-105 bg-blend-multiply transition-transform duration-500"
            />
          </div>
        </div>

        <div className=" flex justify-between my-4 text-gray-800 text-sm mx-4">
          {/* Social Links */}
          <div className="flex gap-6 text-gray-700 text-3xl">
            <a
              href="mailto:dalvishrikant5456@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:scale-110 transition-transform duration-200"
            >
              <BsEnvelopeAt />
            </a>
            <a
              href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:scale-110 transition-transform duration-200"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/shrikant-d5456"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-gray-900 hover:scale-110 transition-transform duration-200"
            >
              <BsGithub />
            </a>
            <a
              href="https://wa.me/qr/OXX2A3XJPGKXA1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:scale-110 transition-transform duration-200"
            >
              <BsWhatsapp />
            </a>
          </div>
          <p>All rights reserved &copy; {currentYear}</p>
        </div>
      </div>

    </>
  );
};

export default Contact;
