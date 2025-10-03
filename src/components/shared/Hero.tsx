import { ArrowRightIcon } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="lg:h-[85vh] flex items-center max-lg:flex-col gap-2 lg:gap-4">
        <div className="bg-white rounded-2xl p-8 px-4 py-10 md:px-12 lg:pt-18 lg:px-16 lg:w-1/2 h-full  grid place-content-center">
          <h1 className="text-3xl font-semibold lg:mt-0 mb-4 lg:mb-8 block">
            Proactively Predicting Failures, Minimizing Risk and Maximizing Value.
          </h1>
          <p className="text-lg mb-4 text-gray-600">
          At Phenomenal Energy, we deliver world-class engineering, inspection, and maintenance solutions that ensure oil and gas facilities remain safe, reliable, and efficient. Through proven expertise, cutting-edge technology, and flawless execution, we help our clients extend asset life, minimize risks, and drive sustainable operations across onshore, offshore, and subsea environments.
          </p>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 max-md:w-full md:justify-start justify-around my-4 md:my-6">
            <Link href="/contact/#contact" className="flex justify-center items-center gap-2 bg-primary text-white px-8 py-3 font-semibold rounded-lg">
              Get started
              <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover/linkbtn:translate-x-0.5" />
            </Link>
            <Link href="/services" className="flex justify-center items-center text-primary font-semibold px-8 py-3 rounded-lg border border-primary">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="w-full lg:h-full lg:w-1/2 md:h-full space-y-2">
          <Image
            src="/images/hero.png"
            className="rounded-2xl w-full h-full object-cover pointer-events-none"
            alt="Hero"
            width={500}
            height={500}
          />
          <Image
            src="/images/img3.png"
            className="rounded-2xl w-full h-full object-cover pointer-events-none block lg:hidden"
            alt="Hero"
            width={500}
            height={500}
          />
          <Image
            src="/images/img2.png"
            className="rounded-2xl w-full h-full object-cover pointer-events-none block lg:hidden"
            alt="Hero"
            width={500}
            height={500}
          />
        </div>
      </section>
    )
}