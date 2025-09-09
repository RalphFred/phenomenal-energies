import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function AboutHome() {
  return (
    <section className="flex items-stretch gap-2 max-md:flex-col-reverse lg:gap-4 lg:h-[75vh]">
      <div className="w-full lg:h-full lg:w-1/2 md:h-full">
        <Image
          src="/images/img3.jpg"
          className="rounded-2xl w-full h-full object-cover pointer-events-none"
          alt="Hero"
          width={500}
          height={500}
        />
      </div>
      <div className="bg-white rounded-2xl p-8 px-4 py-10 lg:px-10 w-full md:w-2/3 lg:w-1/2 h-full grid place-content-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 block">About Us</h2>
        <p className="text-xl text-gray-700">
          Since 2012, Phenomenal Energy has been providing world-class
          engineering, inspection, and maintenance solutions for the oil & gas
          industry and allied sectors. With expertise in Asset Integrity
          Management, advanced inspection technologies, and technical services,
          we help operators safeguard critical assets, extend operational life,
          and ensure compliance with global standards. Trusted by leading energy
          companies, we deliver safe, reliable, and innovative solutions that power sustainable operations.
        </p>
        <div className="mt-8 flex flex-col lg:flex-row">
          <Link
            href="/about"
            className="flex items-center justify-center gap-4 w-auto bg-primary text-white px-8 py-3 font-semibold rounded-lg"
          >
            Read about us
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
