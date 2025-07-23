import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Smile, Phone } from "lucide-react";

export default function MindHeaven() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <header className="bg-white shadow-md py-6 px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">MindHeaven</h1>
        <Button className="bg-blue-600 text-white">Contact Us</Button>
      </header>

      <main className="p-6 max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-4">Your Mental Wellness Matters</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            MindHeaven is your safe space for healing, self-care, and support. Our mission is to promote mental health awareness and provide tools for emotional well-being.
          </p>
          <Button className="bg-blue-600 text-white px-6 py-3">Get Started</Button>
        </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-6 py-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Therapy Sessions</h3>
              <p>Connect with licensed therapists for online or in-person sessions.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Smile className="w-10 h-10 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Self-Care Tools</h3>
              <p>Guided meditations, breathing exercises, and journaling prompts.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Phone className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p>We're here for you anytime you need to talk or get help.</p>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section className="bg-blue-50 rounded-xl p-6 mt-12 shadow">
          <h2 className="text-2xl font-bold mb-4">Reach Out to Us</h2>
          <form className="grid gap-4 md:grid-cols-2">
            <Input type="text" placeholder="Your Name" className="col-span-2 md:col-span-1" />
            <Input type="email" placeholder="Your Email" className="col-span-2 md:col-span-1" />
            <Textarea placeholder="Your Message" className="col-span-2" rows={5} />
            <Button className="bg-blue-600 text-white col-span-2 w-full">Send Message</Button>
          </form>
        </section>
      </main>
    </div>
  );
}
