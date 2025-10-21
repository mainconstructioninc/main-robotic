"use client";

import { contactData } from "@/mock";
import { Input, Textarea, addToast } from "@heroui/react";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      addToast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h3 className="font-bold text-2xl mb-4 text-blue-900">
                  Let’s Get in Touch
                </h3>
                <p className="mb-6 text-gray-700">
                  Have a project in mind? We’d love to hear from you. Send us a
                  message and we’ll respond as soon as possible.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-900 p-3 rounded-xl">
                      <MapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600 text-sm">
                        {contactData.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-900 p-3 rounded-xl">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600 text-sm">
                        {contactData.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-900 p-3 rounded-xl">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600 text-sm">
                        {contactData.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-900 p-3 rounded-xl">
                      <Clock className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {contactData.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
                <div className="w-full h-64">
                  <iframe
                    title="Company Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.318806193609!2d106.82230972475058!3d-6.221626043766409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3052dc956d1%3A0x694dc3f20374c328!2sAXA%20TOWER!5e0!3m2!1sid!2sid!4v1761055780773!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="p-8 rounded-2xl border border-gray-200 shadow-sm bg-white">
                <h3 className="font-semibold text-lg mb-6 text-gray-900">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    id="name"
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <Input
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                  <Input
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                  <Input
                    id="subject"
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                  />
                  <Textarea
                    id="message"
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
