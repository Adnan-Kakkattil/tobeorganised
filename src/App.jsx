import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Play,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Star,
  Calendar,
  Users,
  Camera,
  Award,
  ArrowUpRight
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000",
  wedding: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
  corporate: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
  gala: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1000",
  about: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
  team: [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1514525253361-bee8a187499b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=800"
  ]
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-500 ${isScrolled ? "bg-white/80 py-4 shadow-sm backdrop-blur-lg" : "bg-transparent py-5 md:py-8"}`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center space-x-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isScrolled ? "bg-black" : "bg-white"}`}>
            <span className={`font-serif text-xl font-bold ${isScrolled ? "text-white" : "text-black"}`}>T</span>
          </div>
          <span className={`font-serif text-lg font-bold uppercase tracking-tight sm:text-xl md:text-2xl ${isScrolled ? "text-black" : "text-white"}`}>
            ToBeOrgansied
          </span>
        </motion.div>

        <div className="hidden items-center space-x-12 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:opacity-70 ${isScrolled ? "text-black" : "text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <button
            className={`rounded-full border px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all hover:bg-amber-400 hover:text-black ${isScrolled ? "border-black text-black" : "border-white text-white"}`}
          >
            Inquire Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled ? "text-black" : "text-white"} /> : <Menu className={isScrolled ? "text-black" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white md:hidden"
          >
            <div className="flex flex-col space-y-6 p-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-serif text-xl text-black sm:text-2xl">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={IMAGES.hero} alt="Hero Event" className="h-full w-full scale-110 object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.25em] text-white/80 sm:text-xs md:text-sm md:tracking-[0.4em]">
            Premium Event Management Company
          </span>
          <h1 className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl md:mb-8 md:text-7xl lg:text-9xl">
            We Design <br />
            <span className="font-light italic">Emotions.</span>
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row">
            <button className="group flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-white/90 sm:w-auto sm:px-10 sm:py-5">
              Explore Our World <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="group flex items-center space-x-4 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 transition-colors group-hover:bg-white/10">
                <Play className="ml-1 h-4 w-4 fill-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Watch Reel</span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
        <div className="h-20 w-[1px] bg-gradient-to-b from-white/80 to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl"
            >
              <img src={IMAGES.about} alt="Planning detail" className="h-full w-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 hidden h-64 w-64 rounded-2xl bg-black p-10 text-white shadow-2xl md:block">
              <p className="mb-4 font-serif text-3xl italic">"Details define the soul of the event."</p>
              <div className="mb-4 h-px w-20 bg-white/30" />
              <p className="text-xs uppercase tracking-widest opacity-60">ToBeOrgansied Philosophy</p>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-black/40">Our Story</span>
            <h2 className="mb-6 font-serif text-3xl leading-tight text-black sm:text-4xl md:mb-8 md:text-6xl">
              Where Elegance <br /> Meets Precision.
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-600 md:mb-8 md:text-lg">
              Founded on the belief that every celebration is a unique narrative, ToBeOrgansied is an event management company that transcends traditional
              planning. We do not just organize; we
              curate atmospheres that resonate with your personal style and corporate identity.
            </p>
            <p className="mb-10 text-base leading-relaxed text-gray-600 md:mb-12 md:text-lg">
              From intimate high-profile dinners to monumental brand launches, our multi-disciplinary team ensures every touchpoint is curated with artistic
              flair and logistical mastery.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="mb-2 font-serif text-4xl text-black">15+</h4>
                <p className="text-xs font-bold uppercase tracking-widest opacity-40">Years Experience</p>
              </div>
              <div>
                <h4 className="mb-2 font-serif text-4xl text-black">850+</h4>
                <p className="text-xs font-bold uppercase tracking-widest opacity-40">Global Events</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Couture Weddings",
      desc: "Transforming your love story into a sensory masterpiece. From palace venues to private islands.",
      image: IMAGES.wedding,
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Corporate Spectacles",
      desc: "High-impact brand experiences that command attention and drive engagement across industries.",
      image: IMAGES.corporate,
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Gala & Private Soirees",
      desc: "Immersive theme design and entertainment curation for the most discerning hosts worldwide.",
      image: IMAGES.gala,
      icon: <Star className="h-6 w-6" />
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end md:gap-8">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-black/40">What We Offer</span>
            <h2 className="font-serif text-3xl text-black sm:text-4xl md:text-6xl">Our Expertise</h2>
          </div>
          <p className="max-w-md text-base text-gray-500 md:text-lg">We provide a 360deg approach to event production, handling everything from concept design to on-site management.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative mb-8 aspect-[3/4] overflow-hidden rounded-2xl">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
                <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">{service.icon}</div>
              </div>
              <h3 className="mb-4 font-serif text-2xl transition-colors group-hover:text-amber-400">{service.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-500">{service.desc}</p>
              <button className="flex items-center text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-4">
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="overflow-hidden bg-black py-16 text-white md:py-24">
      <div className="container mx-auto mb-12 px-4 sm:px-6 md:mb-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-white/40">Selected Works</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl">Iconic Moments</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
        {IMAGES.gallery.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 0.98 }}
            className={`group relative cursor-pointer overflow-hidden ${index === 1 || index === 4 ? "md:row-span-2" : ""}`}
          >
            <img src={img} alt={`Event ${index + 1}`} className="aspect-[3/4] h-full w-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end bg-black/60 p-4 opacity-0 transition-opacity group-hover:opacity-100 sm:p-6 md:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/60">Summer 2024</p>
              <h4 className="font-serif text-lg italic sm:text-xl md:text-2xl">Grand Estate Gala</h4>
              <ArrowUpRight className="mt-4 h-6 w-6 text-white/40 transition-colors group-hover:text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="rounded-full border border-white/20 px-10 py-5 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-black">
          View Full Archive
        </button>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="border-y border-gray-100 bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="relative">
            <div className="pointer-events-none absolute -left-4 -top-8 font-serif text-[5rem] leading-none text-gray-100 md:-left-10 md:-top-10 md:text-[10rem]">
              "
            </div>
            <p className="relative z-10 font-serif text-2xl italic leading-relaxed text-black sm:text-3xl md:text-4xl">
              "Working with ToBeOrgansied was seamless. They understood our brand ethos instantly and translated it into a launch event that our clients are still
              talking about months later."
            </p>
            <div className="mt-12 flex items-center space-x-6">
              <img src={IMAGES.team[0]} alt="Client" className="h-16 w-16 rounded-full object-cover" />
              <div>
                <h5 className="text-lg font-bold">Alexandra Thorne</h5>
                <p className="text-sm uppercase tracking-widest text-gray-500">CMO, Stellar Tech</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-8 text-center">
              <Calendar className="mb-4 h-8 w-8 opacity-30" />
              <p className="text-sm font-bold uppercase tracking-widest">Flawless execution</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-6 text-center md:translate-y-8 md:p-8">
              <Camera className="mb-4 h-8 w-8 opacity-30" />
              <p className="text-sm font-bold uppercase tracking-widest">Artistic vision</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-6 text-center md:-translate-y-8 md:p-8">
              <Users className="mb-4 h-8 w-8 opacity-30" />
              <p className="text-sm font-bold uppercase tracking-widest">Bespoke service</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-8 text-center">
              <Star className="mb-4 h-8 w-8 opacity-30" />
              <p className="text-sm font-bold uppercase tracking-widest">Elite network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-5">
          <div className="flex flex-col justify-between bg-black p-8 text-white md:p-12 lg:col-span-2 lg:p-16">
            <div>
              <h2 className="mb-6 font-serif text-3xl md:mb-8 md:text-4xl">
                Begin Your <br /> Journey
              </h2>
              <p className="mb-10 text-white/60 md:mb-12">Tell us about your vision, and we will bring it to life with unparalleled precision.</p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-white/40" />
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest">Email</p>
                    <p className="text-lg">hello@tobeorgansied.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-white/40" />
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest">Office</p>
                    <p className="text-lg">88 Madison Ave, New York</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-white/40" />
                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest">Phone</p>
                    <p className="text-lg">+1 (555) 000-1111</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex space-x-6">
              <Instagram className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
              <Facebook className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
              <Twitter className="h-6 w-6 cursor-pointer transition-colors hover:text-white" />
            </div>
          </div>

          <div className="p-8 md:p-12 lg:col-span-3 lg:p-16">
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40">Full Name</label>
                  <input
                    type="text"
                    className="w-full border-b border-gray-200 bg-transparent py-3 transition-colors focus:border-black focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40">Email Address</label>
                  <input
                    type="email"
                    className="w-full border-b border-gray-200 bg-transparent py-3 transition-colors focus:border-black focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40">Event Type</label>
                  <select className="w-full appearance-none border-b border-gray-200 bg-transparent py-3 transition-colors focus:border-black focus:outline-none">
                    <option>Couture Wedding</option>
                    <option>Corporate Gala</option>
                    <option>Product Launch</option>
                    <option>Private Soiree</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-40">Budget Range</label>
                  <select className="w-full appearance-none border-b border-gray-200 bg-transparent py-3 transition-colors focus:border-black focus:outline-none">
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-40">Message</label>
                <textarea
                  rows="4"
                  className="w-full resize-none border-b border-gray-200 bg-transparent py-3 transition-colors focus:border-black focus:outline-none"
                  placeholder="Share your vision with us..."
                />
              </div>
              <button className="w-full rounded-full bg-black px-12 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-gray-900 sm:w-auto sm:py-6">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-20 md:grid-cols-4 md:gap-12">
          <div className="col-span-2">
            <div className="mb-8 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                <span className="font-serif text-xl font-bold text-white">T</span>
              </div>
              <span className="font-serif text-2xl font-bold uppercase tracking-tighter text-black">ToBeOrgansied</span>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-gray-500 md:text-lg">
              We are an event management company creating world-class experiences that leave a lasting emotional imprint.
            </p>
          </div>
          <div>
            <h6 className="mb-8 text-xs font-bold uppercase tracking-widest">Navigate</h6>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-500 transition-colors hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 transition-colors hover:text-black">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-500 transition-colors hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-500 transition-colors hover:text-black">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-8 text-xs font-bold uppercase tracking-widest">Follow</h6>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-500 transition-colors hover:text-black">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition-colors hover:text-black">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition-colors hover:text-black">
                  Vimeo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 transition-colors hover:text-black">
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">© 2026 ToBeOrgansied Event Management. All rights reserved.</p>
          <div className="flex space-x-8 text-sm text-gray-400">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
