import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  return (
    <>
      <section
        className={`flex flex-col text-center justify-center p-10 h-[50vh] bg-gradient-to-b from-blue-500 to-sky-100`}
      >
        <h1 className="text-2xl font-bold mb-10">
          European PREP CENTER for PAN-EU Amazon Sellers
        </h1>
        <div className="font-bold">
          <h2>ONE PRICE!</h2>
          <h2>ONE DESTINATION!</h2>
          <h2>NO HIDDEN FEES!</h2>
        </div>

        <div className="flex justify-center">
          <Link
            href="/getstarted"
            className="bg-primary mt-3 px-5 py-2 rounded-[50px] text-white"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
