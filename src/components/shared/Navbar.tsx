"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/hsse", label: "HSSE" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <nav className="flex justify-between items-center p-3 bg-white rounded-2xl md:px-12 sticky top-4 z-40 mb-2 md:mb-4">
      <Link href="/" className="z-60 flex items-center gap-2">
        <Image
          src="/images/logo.jpeg"
          alt="Logo"
          width={42}
          height={40}
          className="size-12 z-60"
          />
          <h1 className="text-xl text-primary leading-5 font-semibold">Phenomenal <br /> Energy</h1>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex items-center gap-12 mx-4 text-base font-medium text-gray-600">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname.startsWith(link.href) && link.href !== "/"
                ? "active-link"
                : pathname === "/" && link.href === "/"
                  ? "active-link"
                  : ""
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <Link href="/contact/#contact" className="px-8 py-3 rounded-xl bg-primary text-white font-semibold hidden lg:block">
        Work with us
      </Link>

      {/* Mobile Menu Button */}
      <button
        aria-label="Open menu"
        className="lg:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuIcon className="size-8" />
      </button>

      {/* Mobile Fullscreen Centered Menu */}
      <div
        className={`
          fixed inset-0 z-50 bg-white flex items-center justify-center
          transition-opacity duration-300 ease-in-out lg:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Close button in top-right */}
        <button
          aria-label="Close menu"
          className="absolute top-10 right-5 md:top-9 md:right-24"
          onClick={() => setOpen(false)}
        >
          <X className="size-8" />
        </button>

        {/* Centered links */}
        <div className="flex flex-col gap-8 text-4xl uppercase font-semibold text-gray-700 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                pathname.startsWith(link.href) && link.href !== "/"
                  ? "active-link"
                  : pathname === "/" && link.href === "/"
                    ? "active-link"
                    : ""
              }
            >
              {link.label}
            </Link>
          ))}

          <Link
            className="text-3xl py-4 px-8 rounded-xl bg-primary text-white font-semibold"
            href="/contact/#contact"
            onClick={() => setOpen(false)}
          >
            Work with us
          </Link>
        </div>
      </div>
    </nav>
  );
}
