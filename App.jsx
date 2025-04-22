import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ValoriteConstruction() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Valorite Construction</h1>
        <p className="text-lg">Residential Renovation Experts</p>
      </header>

      {/* Navigation */}
      <nav className="bg-green-100 text-green-800 p-4 flex gap-6 font-semibold">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Home Section */}
      <section id="home" className="p-8 text-center bg-green-50">
        <h2 className="text-2xl font-bold mb-4">Your Dream Home Starts Here</h2>
        <p className="mb-6">We specialize in transforming houses into beautiful, functional living spaces.</p>
        <Button className="bg-green-700 hover:bg-green-800 text-white">Get a Free Quote</Button>
      </section>

      {/* Services Section */}
      <section id="services" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Kitchen Remodeling",
            "Bathroom Renovation",
            "Basement Finishing",
            "Flooring & Tiling",
            "Interior Painting",
            "Custom Carpentry"
          ].map(service => (
            <Card key={service} className="shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p>High-quality workmanship with attention to detail.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-8 bg-green-50">
        <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
        <p className="max-w-3xl mx-auto text-center">
          At Valorite Construction, we believe in honest work, clear communication, and delivering results that exceed expectations. With years of experience in residential renovation, our team is dedicated to bringing your vision to life.
        </p>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-green-100 h-40 rounded-xl shadow-inner"></div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-8 bg-green-50">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="p-2 border rounded" />
          <textarea placeholder="Your Message" className="p-2 border rounded h-32" />
          <Button className="bg-green-700 hover:bg-green-800 text-white">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center p-4 mt-8">
        &copy; {new Date().getFullYear()} Valorite Construction. All rights reserved.
      </footer>
    </div>
  );
}
