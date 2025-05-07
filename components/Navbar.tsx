'use client'
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const activeTab = usePathname();
    // const pathname = usePathname();
    // console.log(activeTab)
   return (
    <header
      className={`${montserrat.className} h-32 bg-[var(--primary)] xl:px-64 sticky top-0 z-9999999`}
    >
      <nav className="w-full h-full flex justify-between items-center">
        <Image
          src="/images/logo-cover-fb.png"
          width={256}
          height={112}
          alt="Logo"
        />
        <div className="flex gap-8 text-white font-semibold items-center">
          <Link href="/" className={`${activeTab === '/' ? '!text-[var(--secondary)]': ''}`}>Home</Link>
          <Link href="/about-us" className={`${activeTab === '/about-us' ? '!text-[var(--secondary)]': ''}`}>About Us</Link>
          <Link href="/services" className={`${activeTab === '/services' ? '!text-[var(--secondary)]': ''} space-x-2 relative group`}>
            <p className="inline">Services</p>
            <ChevronDown className="inline" />
            <div className="absolute top-8 p-2 rounded-lg shadow-lg bg-[var(--secondary)] group-hover:opacity-100 w-48 opacity-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <p>YOUR TEXT HERE</p>
              <p>YOUR TEXT HERE</p>
            </div>
          </Link>
          <Link href="/products" className={`${activeTab === '/products' ? '!text-[var(--secondary)]': ''} space-x-2 relative group`}>
            <p className="inline">Products</p>
            <ChevronDown className="inline" />
            <div className="absolute top-8 p-2 rounded-lg shadow-lg bg-[var(--secondary)] group-hover:opacity-100 w-48 opacity-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <p>YOUR TEXT HERE</p>
              <p>YOUR TEXT HERE</p>
            </div>
          </Link>
          <Button text="Careers - Join Our Team" route="/careers" arrow={false}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
