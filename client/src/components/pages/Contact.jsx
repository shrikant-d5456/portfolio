import { useState } from "react";
import { BsArrowRight, BsEnvelopeAt, BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [messageType, setMessageType] = useState("hiring");

  return (
    <section id="contact" className="relative overflow-hidden  py-24 text-white sm:py-32">
      <div className="mx-auto grid w-[min(100%-3rem,1360px)] gap-14 lg:grid-cols-[380px_1fr] lg:gap-20">
        <div className="flex flex-col">
          <div className="mb-12 text-6xl font-light leading-none text-fuchsia-500 sm:text-7xl">↗</div>

          <h2 className="max-w-xs text-5xl font-light leading-[1.02] tracking-[-0.06em] sm:text-6xl">
            It's time
            <br />
            to talk!
            <br />
            <span className="gradient-text">Contact me</span>
          </h2>

          <div className="mt-12 flex max-w-xs flex-wrap gap-3">
            <a href="https://github.com/shrikant-d5456" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-4 py-3 font-semibold text-white transition hover:bg-[#29292d]"><BsGithub className="text-lg" /> GitHub</a>
            <a href="https://www.linkedin.com/in/shrikant-dalvi-025ba4318" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-4 py-3 font-semibold text-white transition hover:bg-[#29292d]"><BsLinkedin className="text-lg" /> LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg  px-4 py-3 font-semibold text-white transition hover:bg-[#29292d]"><BsInstagram className="text-lg" /> Instagram</a>
            <a href="https://wa.me/qr/OXX2A3XJPGKXA1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-4 py-3 font-semibold text-white transition hover:bg-[#29292d]"><BsWhatsapp className="text-lg" /> WhatsApp</a>
          </div>
        </div>

        <div className="pt-8 lg:pt-24 ">
          <p className="max-w-4xl  leading-8 text-slate-200 text-sm">
            Best way to reach out is <a href="mailto:dalvishrikant5456@gmail.com" className="text-sm underline decoration-fuchsia-400 underline-offset-4">dalvishrikant5456@gmail.com</a> or just simply fill out the form below.
            <br />
            Don't be shy, I love to talk to new people and make new connections.
          </p>

          <form action="https://formspree.io/f/mjkbygqk" method="POST" className="mt-10">
            <div className="grid gap-7 md:grid-cols-2">
              <label className="text-sm font-medium text-slate-200">
                Your Name
                <input className="mt-2 w-full rounded-xl border-1 border-[#45454c] bg-transparent  px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-500" placeholder="John Doe" type="text" name="Name" required />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Your Email
                <input className="mt-2 w-full rounded-xl border-1 border-[#45454c] bg-transparent  px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-500" placeholder="John Doe" type="email" name="email" required />
              </label>
            </div>

            <label className="mt-7 block text-sm font-medium text-slate-200">
              Your Message
              <textarea className="mt-2 min-h-44 w-full resize-y rounded-xl border-1 border-[#45454c] bg-transparent  px-4 py-3 text-base text-white outline-none transition placeholder:text-slate-400 focus:border-fuchsia-500" placeholder="John Doe" name="message" required />
            </label>

            <div className="relative -mt-6 ml-3 flex flex-wrap gap-2">
              <button type="button" onClick={() => setMessageType("hiring")} className={`rounded-xl border-2 px-4 py-2 text-sm font-medium transition ${messageType === "hiring" ? "border-[#45454c] bg-[#1b1b1e] text-white" : "border-transparent bg-[#1b1b1e] text-slate-500"}`}>
                <span className="mr-2 inline-block h-3.5 w-3.5 rounded-full bg-emerald-400 align-[-1px]" /> Interested In Hiring!
              </button>
              <button type="button" onClick={() => setMessageType("chat")} className={`rounded-xl border-2 px-4 py-2 text-sm font-medium transition ${messageType === "chat" ? "border-[#45454c] bg-[#1b1b1e] text-white" : "border-transparent bg-[#1b1b1e] text-slate-500"}`}>
                <span className="mr-2 inline-block h-3.5 w-3.5 rounded-full bg-rose-400 align-[-1px]" /> Some Chit-Chat! 🍵
              </button>
              <input type="hidden" name="messageType" value={messageType} />
            </div>

            <button type="submit" className="mt-8 inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-lg font-bold text-white shadow-[0_10px_30px_rgba(217,70,239,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(217,70,239,0.4)]">
              Send Message <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-violet-600"><BsArrowRight /></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
