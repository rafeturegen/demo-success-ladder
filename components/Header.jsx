"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
    return (
      <motion.header 
      id="header" 
      className="max-w-7xl mx-auto px-8 py-5 flex flex-wrap items-center justify-between font-brico"
      initial={{ opacity:0, y:-100 }}
      animate={{ opacity:1, y:0 }}
      >
          <div className="flex gap-2">
            <Image src="/icon.jpg" width={50} height={50} alt="Success Ladder Icon"></Image>
            <h2 className="text-white mt-[7px] text-xl">Success Ladder</h2>
          </div>
          <div className="flex gap-8">
          <Link href="/" className="text-white hover:underline text-lg">
                Home
          </Link>
          <Link href="/classes" className="text-white hover:underline text-lg">
                Classes
          </Link>
          <Link href="/study" className="text-white hover:underline text-lg">
                Study
          </Link>
          <Link href="/contribute" className="text-white hover:underline text-lg">
                Contribute
          </Link>
          </div>
      </motion.header>
    )
}