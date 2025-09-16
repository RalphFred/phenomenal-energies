import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white rounded-2xl mt-8">
      <div className="px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Phenomenal Energy Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </Link>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Phenomenal Energy
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 font-bold">
            Proactively predicting failures, minimizing risk, maximizing value
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/phenomenal-energy-nigeria-limited/"
                target="_blank"
                className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/hsse"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  HSSE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/asset-integrity-management"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Asset Integrity Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/inspection-services"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Inspection Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/engineering-and-technical-services"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  Engineering & Technical Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  9 Sulaimon Adekanmbi Close,
                  <br />
                  Igbo Efon, Lekki, Lagos, Nigeria
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@phenomenalenergyng.com"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  info@phenomenalenergyng.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="tel:+2349162210784"
                    className="text-gray-600 block hover:text-primary transition-colors text-sm"
                  >
                    +234 916 221 0784
                  </a>
                  <a
                    href="tel:+2348109198955"
                    className="text-gray-600 block hover:text-primary transition-colors text-sm"
                  >
                    +234 810 919 8955
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Phenomenal Energy. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
