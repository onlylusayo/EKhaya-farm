import { Target, Eye, Heart, Shield, Users, Drumstick } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with honesty and transparency across every stage of livestock farming, meat handling, and retail operations.",
  },
  {
    icon: Drumstick,
    title: "Responsible Farming",
    description:
      "We raise livestock responsibly, prioritizing animal welfare, food safety, and sustainable farming practices.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We empower local communities through fair employment, livestock partnerships, and reliable access to quality meat.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "Uncompromising standards ensure only safe, fresh, and high-quality meat reaches our customers.",
  },   
]

const milestones = [
  { year: "2009", event: "Ekhaya Farms founded in Lilongwe as a livestock farming operation" },
  { year: "2012", event: "First Ekhaya Farm Food Store opens, selling fresh meat directly to customers" },
  { year: "2015", event: "Expanded meat distribution to 3 districts" },
  { year: "2018", event: "Launched structured livestock farmer partnership program" },
  { year: "2021", event: "Reached all 8 districts of Malawi through Ekhaya Farm Food Stores" },
  { year: "2024", event: "Serving over 50,000 families daily with quality meat products" },
]

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                About Us
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6 text-balance">
                Our Story: From Livestock to Table
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Ekhaya Farms was founded with a clear purpose: to provide Malawian
                families with meat they can trust. What began as a small livestock
                farm has grown into a nationwide network delivering safe,
                high-quality meat through our own Ekhaya Farm Food Stores.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-[#b5942f]/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#b5942f]" />
                </div>

                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  To responsibly raise livestock and supply safe, high-quality
                  meat products across Malawi, while supporting local communities
                  and strengthening national food security.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-[#b5942f]/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-[#b5942f]" />
                </div>

                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  To be Malawi&apos;s most trusted meat brand, recognized for
                  responsible livestock farming, consistent quality, and
                  transparency from farm to store.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Our Values
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f] text-balance">
                What Guides Us Every Day
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b5942f]/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-[#b5942f]" />
                  </div>

                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
                Our Journey
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#b5942f] text-balance">
                Milestones Along the Way
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      } pl-12 md:pl-0`}
                    >
                      <div className="bg-card rounded-xl p-6 border border-border inline-block">
                        <span className="text-[#b5942f] font-bold text-lg">
                          {milestone.year}
                        </span>
                        <p className="text-foreground mt-1">
                          {milestone.event}
                        </p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#b5942f] md:-translate-x-1/2" />

                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <img
                src="/image.png"
                alt="Ekhaya Farms livestock and meat team"
                className="rounded-2xl w-full object-cover"
              />

              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Meet the People Behind Ekhaya
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our team consists of dedicated livestock farmers, meat
                  handlers, butchers, and retail professionals who take pride in
                  delivering quality meat to Malawian families.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  From caring for animals on our farms to serving customers in
                  our stores, every member of the Ekhaya family plays a vital
                  role in maintaining trust, quality, and consistency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
