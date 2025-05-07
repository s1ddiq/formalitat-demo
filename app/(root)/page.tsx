import React from "react";
import { montserrat } from "../fonts";
import {
  ArrowBigRight,
  ClipboardCheckIcon,
  FunctionSquare,
  Handshake,
  Pin,
} from "lucide-react";
import ClothingCard from "@/components/ClothingCard";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ReviewCard from "@/components/ReviewCard";
import FAQCarousel from "@/components/FAQCarousel";
import Link from "next/link";

const Home = () => {
  return (
    <main className="w-full min-h-screen text-2xl">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <img
          src="/images/landing.png"
          alt="Landing Formalitat Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="w-full xl:px-64 lg:px-48 md:px-32 sm:px-24 px-4 py-20 flex justify-center items-center flex-col text-center gap-6 animate-fade-in mt-12">
          <Image
            src="/images/logo.png"
            width={150}
            height={150}
            alt="Logo"
            className="rounded-full shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] tracking-wide">
            Formalitat – Formal Attire
          </h1>
          <p className="text-white max-w-xl text-lg md:text-xl italic opacity-80">
            "The only thing more extraordinary than our clothing is our story."
          </p>
          <Button
            text="Check our Roblox page"
            arrow={false}
            className="!w-72 mt-4 text-base"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[var(--primary)] z-0" />
      </section>

      {/* Main Content */}
      <section
        className={`${montserrat.className} xl:px-64 lg:px-22 md:px-16 sm:px-8 px-4 bg-[var(--primary)] py-8 space-y-24`}
      >
        {/* Our Story */}
        <div className="flex flex-col gap-5">
          <h1 className="text-[var(--secondary)] text-6xl font-bold">
            Our Story <Pin className="inline rotate-45" size={38} />
          </h1>
          <p className="text-white">
            Formalitat was established in Italy, Milano in 1845. Despite immense
            uncertainty and unrest during the ongoing Italian Revolution,
            Formalitat continued to see success and growth over the next decade,
            opening the first Formalitat store in 1853 becoming one of the
            finest formal wear brands, producing extravagant clothes with the
            highest quality and most skillful craftsmanship.
          </p>
          <div className="w-full h-[2px] bg-[var(--secondary)]" />
        </div>

        {/* Our Clothing */}
        <div className="flex flex-col gap-5">
          <h1 className="text-[var(--secondary)] text-6xl font-bold">
            Our Clothing
          </h1>
          <p className="text-white">
            We have over 100+ formal outfits ready to give you comfort, elegance
            and your own unique style!
          </p>
          <div className="flex justify-between mt-8 gap-5">
            <ClothingCard
              text="Female Attire"
              description="Feminine attire can range from breezy, casual dresses to glamorous looks for special occasions or events. Accessories such as jewelry, handbags, and scarves can also be added to complete the look."
              url="/images/womens-outfits.png"
            />
            <ClothingCard
              text="Male Attire"
              description="Men’s clothing typically consists of pants, shirt, jacket, and shoes. For a more formal look, dress pants and a collared shirt are recommended. Additionally, casual Fridays often call for a polo shirt or a t-shirt."
              url="/images/mens-outfits.png"
            />
            <ClothingCard
              text="Collections"
              description="Seasonal collections, business collections and more! Formalitat does walk the extra mile and do what most will not do, feel free to check out our extraordinary christmas & halloween collection."
              url="/images/collections-outfits.png"
            />
          </div>
        </div>

        {/* Formalitat's Promise */}
        <div className="w-full mt-32">
          <p className="text-6xl font-bold text-center text-[var(--secondary)]">
            Formalitat's Promise
          </p>
          <div className="flex justify-between gap-8 mt-24 text-white text-center">
            <div className="space-y-6">
              <Image
                src="/icons/wink.png"
                width={64}
                height={64}
                alt="Wink"
                className="mx-auto"
              />
              <p className="text-[var(--secondary)] text-3xl font-bold mb-2">
                Stability
              </p>
              <p className="text-lg">
                All our employees are skilled and conscientious, with the right
                experience.
              </p>
            </div>
            <div className="space-y-6">
              <ClipboardCheckIcon
                size={64}
                className="text-[var(--secondary)] mx-auto"
              />
              <p className="text-[var(--secondary)] text-3xl font-bold mb-2">
                Completely flexible
              </p>
              <p className="text-lg">
                Experience the freedom and flexibility of our community. Work
                together to create something truly special!
              </p>
            </div>
            <div className="space-y-6">
              <Handshake
                size={64}
                className="text-[var(--secondary)] mx-auto"
              />
              <p className="text-[var(--secondary)] text-3xl font-bold mb-2">
                We keep our word
              </p>
              <p className="text-lg">
                We are persistent and reliable. We always arrive at the agreed
                time and do our best to solve your problem.
              </p>
            </div>
          </div>
        </div>

        {/* Discord Widget */}
        <div className="mt-32">
          <p className="text-[var(--secondary)] text-6xl font-bold mb-2 text-center">
            Join the community - 3k+ members!
          </p>
          <iframe
            src="https://discord.com/widget?id=951119623980458014&amp;theme=dark"
            width="350"
            className="!w-full mt-18"
            height="500"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="Discord Widget"
          />
        </div>

        {/* Services Grid */}
        <div className="mt-24">
          <p className="text-6xl font-bold text-center text-[var(--secondary)] mb-16">
            We offer services for our <br /> customers & partners
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 text-white">
            {/* SSUs & Events */}
            <div className="bg-[var(--primary-dark)] p-6 rounded-2xl hover:scale-101 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2">
                SSU's & Events
              </h3>
              <p className="text-base opacity-80 mb-4">
                We host server start-ups and exciting events to keep our
                customers engaged. Join SSUs when our employees are active.
              </p>
              <button className="text-[var(--secondary)] underline">
                Read More
              </button>
            </div>
            {/* Assistance */}
            <div className="bg-[var(--primary-dark)] p-6 rounded-2xl hover:scale-101 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2">
                Assistance
              </h3>
              <p className="text-base opacity-80 mb-4">
                Our active team members are available during SSUs to personally
                assist you in the homestore.
              </p>
              <button className="text-[var(--secondary)] underline">
                Read More
              </button>
            </div>
            {/* Request Help */}
            <div className="bg-[var(--primary-dark)] p-6 rounded-2xl hover:scale-101 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2">
                Request Help
              </h3>
              <p className="text-base opacity-80 mb-4">
                No SSU or employee around? If you're in our Roblox group, use
                the in-game feature to request help and enjoy special perks.
              </p>
              <button className="text-[var(--secondary)] underline">
                Read More
              </button>
            </div>
            {/* Booster Perks */}
            <div className="bg-[var(--primary-dark)] p-6 rounded-2xl hover:scale-101 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-[var(--secondary)] mb-2">
                Booster Perks
              </h3>
              <p className="text-base opacity-80 mb-4">
                Unlock exclusive perks with boosters—early sneak peeks, in-game
                tags, and many more premium benefits.
              </p>
              <button className="text-[var(--secondary)] underline">
                Read more
              </button>
            </div>
            {/* Giveaways */}
            <div className="bg-[var(--primary-dark)] p-6 rounded-2xl hover:scale-101 transition-transform duration-300">
              <ArrowBigRight
                size={128}
                className="text-white bg-[var(--secondary)] rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Spotlight Section */}
        <div className="mt-24 h-[50vh] relative">
          <Image
            src="/images/watch.png"
            width={500}
            height={500}
            alt="Watch"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-60"
          />
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-center text-[var(--secondary)] z-10">
            Explore our first-class homestore, featuring the highest quality
            of formal attire
          </p>
        </div>

        {/* Customer Reviews */}
        <div className="flex flex-col gap-5 mt-48">
          <h1 className="text-[var(--secondary)] text-6xl font-bold">
            Customer Reviews <Pin className="inline rotate-45" size={38} />
          </h1>
          <div className="w-full h-[2px] bg-[var(--secondary)]" />
          <div className="flex w-full justify-between gap-5">
            <ReviewCard
              text="MysteryMouthwash"
              description="“Amazing homestore that offers help and support from the employees and staff. I am amazed by the quality of the homestore and clothing.”"
              url="/images/review1.png"
            />
            <ReviewCard
              text="Joseph_Newi"
              description="“Formalitat is the place where i’ve had the best homestore experience so far, amazing clothes and great customer service from every employee.”"
              url="/images/review2.png"
            />
            <ReviewCard
              text="DreamNowThen"
              description="“Formalitat has truly exceeded my expectations. I highly recommend their services to anyone looking for a reliable and stylish formal attire experience!”"  
              url="/images/review3.png"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-5 mt-48">
          <h1 className="text-[var(--secondary)] text-6xl font-bold">FAQ</h1>
          <p className="text-gray-400">
            Frequently asked questions by our customers{" "}
            <FunctionSquare size={24} className="inline" />
          </p>
          <div className="w-full h-[2px] bg-[var(--secondary)]" />
          <FAQCarousel />
        </div>
      </section>

      {/* Call‑to‑Action Overlay Section */}
      <div className="relative">
        <Image
          src="/images/footer-bg.png"
          width={980}
          height={668}
          alt="Footer BG"
          className="w-full h-auto object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center pt-32 z-[999]">
          <p className="text-[4rem] md:text-[6rem] font-bold text-[var(--secondary)] text-center pt-12 leading-tight">
            Formal Attire for any <br /> place, we got it all.
          </p>
          <p className="text-white max-w-2xl text-center font-bold mt-4">
            Not only to parties, weddings, casinos and birthdays, but anywhere
            you want to go.
          </p>
          <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-8 mt-8">
            <Button text="Check Store" arrow />
            <hr className="hidden sm:block h-24 border-l border-gray-400" />
            <p className="text-white text-center">
              Or join our discord:
              <span className="text-2xl text-[var(--secondary)] font-bold block">
                discord.gg/formalitat
              </span>
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-[var(--primary)] z-10" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[var(--primary)] z-10" />
      </div>

      {/* Footer */}
      <div className="-mt-32 flex justify-center items-center h-[50vh] bg-[var(--primary)]">
        <footer className="w-full text-center">
          <p className="text-5xl text-[var(--secondary)] font-bold">
            Demo website created by #s1ddiq on discord contact to see full
            version.
          </p>
          <Link href='https://s1ddiqs-room.vercel.app/' className='underline text-blue-500 text-3xl'>My Portfolio</Link>
        </footer>
      </div>
    </main>
  );
};

export default Home;
