import React from 'react';
import { MapPin, Phone, Mail, FileText, Linkedin, Instagram, Youtube } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, title: 'Address', content: 'Pune, India' },
  { icon: Phone, title: 'Phone', content: '+91 99755 07216', href: 'tel:+919975507216' },
  { icon: Mail, title: 'Email', content: 'rathodvivek916@gmail.com', href: 'mailto:rathodvivek916@gmail.com' },
  { icon: FileText, title: 'Resume', content: 'Download CV', href: '#' }
];

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/@Vivek-qw9sm' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vivek-rathod-666682300/' },
  { icon: Instagram, href: 'https://www.instagram.com/rvivek_5324/' }
];

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-purple-400 transition"
            >
              <div className="flex flex-col items-center text-center">
                <item.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-gray-300 hover:text-purple-400 transition">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Find me on</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="p-3 bg-slate-900 rounded-full hover:bg-purple-900/50 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-6 w-6 text-purple-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}