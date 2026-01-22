"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-black font-medium text-sm tracking-wider uppercase mb-4 block">
              Contact Us
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#b5942f] mb-6">
              Get in Touch
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              For general inquiries, partnerships, or business communication,
              please reach us using the details below during office hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Head Office */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-serif text-2xl font-bold text-[#b5942f] mb-6">
              Head Office
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b5942f] mt-1" />
                <div>
                  <p className="text-foreground">Ekhaya Farms Headquarters</p>
                  <p className="text-muted-foreground text-sm">
                    Plot 456, Area 3, Lilongwe, Malawi
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b5942f]" />
                <div>
                  <p className="text-foreground">+265 1 234 567</p>
                  <p className="text-muted-foreground text-sm">
                    +265 1 234 568 (Fax)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b5942f]" />
                <div>
                  <p className="text-foreground">info@ekhayafarms.mw</p>
                  <p className="text-muted-foreground text-sm">
                    support@ekhayafarms.mw
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#b5942f] mt-1" />
                <div>
                  <p className="text-foreground">Office Hours</p>
                  <p className="text-muted-foreground text-sm">
                    Monday – Friday: 8:00 AM – 5:00 PM
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Saturday: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Department Contacts */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Department Contacts
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Customer Service</span>
                <span className="text-foreground">
                  support@ekhayafarms.mw
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  Farmer Partnerships
                </span>
                <span className="text-foreground">
                  partners@ekhayafarms.mw
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Media & Press</span>
                <span className="text-foreground">
                  media@ekhayafarms.mw
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Careers</span>
                <span className="text-foreground">
                  careers@ekhayafarms.mw
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps?q=Lilongwe,+Malawi&output=embed"
              width="100%"
              height="400"
              className="border-0 w-full h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ekhaya Farms Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
