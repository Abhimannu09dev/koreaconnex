"use client";

import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { id: 'privacy-policy', label: 'Privacy Policy', href: '/privacy-policy' },
    { id: 'terms-and-conditions', label: 'Terms and Conditions', href: '/terms' },
    { id: 'disclaimer', label: 'Disclaimer', href: '/disclaimer' },
    { id: 'legal', label: 'Legal', href: '/legal' },
    { id: 'help-and-support', label: 'Help and Support', href: '/support' },
  ];

  const socialLinks = [
    {
      id: 'facebook',
      label: 'Facebook',
      href: 'https://facebook.com',
      icon: <Facebook className="w-5 h-5 text-white" />,
      bgClass: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: <Instagram className="w-5 h-5 text-white" />,
      bgClass: 'bg-pink-500 hover:bg-pink-600',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="w-5 h-5 text-white" />,
      bgClass: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 'x',
      label: 'X',
      href: 'https://x.com',
      icon: <X className="w-5 h-5 text-white" />,
      bgClass: 'bg-gray-900 hover:bg-gray-800',
    },
  ];

  return (
    <footer className="bg-gray-100 py-6 w-full md:pl-64">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {footerLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-gray-500 hover:text-gray-700 font-medium transition-colors p-2"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${item.label}`}
              className={`p-3 rounded-full transition-colors ${item.bgClass}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}