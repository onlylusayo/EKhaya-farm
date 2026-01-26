import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-farm.png"
          alt="Ekhaya Farms agricultural fields"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-16 text-center text-white">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm">
          <MapPin className="w-4 h-4" />
          <span>Serving all 8 outlets of Malawi</span>
        </div>

        {/* Slogan */}
        <p className="uppercase tracking-widest text-accent font-semibold mb-4">
          Farming redefined
        </p>

        {/* Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Growing Malawi,
          <br />
          <span className="text-accent">Feeding Communities</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ekhaya Farms is a trusted Malawian agricultural company specializing in
          the production of high quality meat products, supplied exclusively
          through Ekhaya Farm Food Stores.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/distribution">
            <Button
              size="lg"
              className="rounded-xl px-8 gap-2 bg-white/10 text-white hover:bg-[#b5942f]"
            >
              Find a Store
              <MapPin className="w-4 h-4" />
            </Button>
          </Link>

          <Link href="/farms">
            <Button
              size="lg"
              className="rounded-xl px-8 gap-2 bg-transparent border border-white/30 text-white hover:bg-[#b5942f] hover:text-black"
            >
              Our Farming Practices
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
