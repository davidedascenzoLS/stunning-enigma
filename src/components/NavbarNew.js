"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Studio", href: "/studio" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contacts" },
    { name: "Eshop", href: "/eshop" }, // opzionale
  ];

  return (
    <>
      {/* Desktop Nav */}
      <nav className="bg-white fixed shadow-md h-screen w-64 z-50 hidden md:flex flex-col justify-start items-center py-0 font-thin font-sans">
        <div className="flex flex-col items-center space-y-0">
          <Link href="/" className="text-2xl font-sans mb-48">
            <Image
              src="/logo/Logo_LS_red.svg"
              alt="LS Logo"
              width={88}
              height={44}
              className="object-contain"
              priority
            />
          </Link>
          <div className="flex flex-col space-y-8 items-start text-sm">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-sm tracking-[0.1em] text-black font-thin transition-colors duration-400 hover:text-red-400"
              >
                <span>{link.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 tracking-[0.2em] bg-gray-50 shadow-md fixed top-0 left-0 right-0 z-50 font-thin font-sans text-gray-700">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-10 font-light font-sans tracking-[0.1em] text-white text-4xl"
          >
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="relative text-xl font-light group transition-colors duration-100"
              >
                <span>{link.name}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-100 group-hover:w-full"></span>
              </Link>
            ))}

            <Image
              src="/logo/Logo_LS.svg"
              alt="LS Logo Small"
              width={40}
              height={40}
              className="pt-12"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
