"use client"

import { Bed, Briefcase, Crown, MessageCircle, Package, Sparkles, Star } from 'lucide-react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Luxe Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury at Grand Luxe Hotel"
          description="Discover unparalleled comfort and elegance in the heart of the city. Our premium accommodations and world-class amenities ensure an unforgettable stay."
          tag="Luxury Stay"
          tagIcon={Crown}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby"
          imagePosition="right"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "View Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Grand Luxe Hotel"
          description={[
            "For over three decades, Grand Luxe Hotel has been synonymous with exceptional service and timeless elegance.",
            "Our commitment to excellence ensures every guest experiences the pinnacle of luxury hospitality in an atmosphere of refined comfort and sophistication."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "amenities"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our carefully curated collection of premium amenities designed to exceed your expectations"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind in our award-winning spa featuring premium treatments and relaxation facilities",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel spa and wellness center"
            },
            {
              title: "Rooftop Pool & Bar",
              description: "Enjoy breathtaking city views while relaxing by our infinity pool or sipping cocktails at the rooftop bar",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel rooftop pool"
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our Michelin-starred restaurant featuring contemporary cuisine and exceptional service",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel fine dining restaurant"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxurious Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering unparalleled comfort and style"
          tag="Room Types"
          tagIcon={Bed}
          products={[
            {
              id: "suite",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential suite"
            },
            {
              id: "deluxe",
              name: "Deluxe City View",
              price: "$449/night",
              imageSrc: "https://images.pexels.com/photos/26859049/pexels-photo-26859049.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe room with city view"
            },
            {
              id: "standard",
              name: "Grand Standard",
              price: "$299/night",
              imageSrc: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Standard hotel room"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Accommodation Packages"
          description="Select the perfect package for your stay with our thoughtfully curated offerings"
          tag="Packages"
          tagIcon={Package}
          plans={[
            {
              id: "weekend",
              badge: "Popular Choice",
              badgeIcon: Star,
              price: "$349/night",
              subtitle: "Perfect for weekend getaways",
              features: [
                "Deluxe room accommodation",
                "Complimentary breakfast",
                "Wi-Fi access",
                "Concierge service"
              ]
            },
            {
              id: "business",
              badge: "Best Value",
              badgeIcon: Briefcase,
              price: "$449/night",
              subtitle: "Ideal for business travelers",
              features: [
                "Executive room with city view",
                "Business center access",
                "Airport transfer included",
                "Priority check-in/out"
              ]
            }
          ]}
          layout="default"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover what makes Grand Luxe Hotel exceptional through the words of our valued guests"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO",
              company: "TechCorp Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Director",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "VP Marketing",
              company: "Innovation Labs",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Managing Partner",
              company: "Sterling Associates",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Thompson portrait"
            },
            {
              id: "5",
              name: "Lisa Chang",
              role: "Executive Director",
              company: "Premium Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Chang portrait"
            }
          ]}
          layout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Stay"
          description="Experience luxury and comfort at Grand Luxe Hotel. Contact us to make your reservation or inquire about our services."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkout",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Submit Reservation"
          imageSrc="https://images.pexels.com/photos/8667538/pexels-photo-8667538.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge desk"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Luxe Hotel"
          columns={[
            {
              items: [
                {
                  label: "About",
                  href: "about"
                },
                {
                  label: "Rooms",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                }
              ]
            },
            {
              items: [
                {
                  label: "Dining",
                  href: "restaurant"
                },
                {
                  label: "Spa",
                  href: "spa"
                },
                {
                  label: "Events",
                  href: "events"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}