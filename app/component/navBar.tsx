"use client";

import React, { useState } from 'react';
import { Circle, FileText, FileUser, GraduationCap, HeartHandshake, HouseIcon, LogOut, School, Settings, UserCircle } from 'lucide-react';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HouseIcon, href: '/dashboard' },
    { id: 'universities', label: 'Universities', icon: School, href: '/universities' },
    { id: 'applications', label: 'My Applications', icon: FileUser, href: '/applications' },
    { id: 'documents', label: 'Documents', icon: FileText, href: '/documents' },
    { id: 'setting', label: 'Settings', icon: Settings, href: '/settings' },
    { id: 'profile', label: 'Profile', icon: UserCircle, href: '/profile' },
  ];

  const secondaryNavItems = [
    { id: 'help-support', label: 'Help & Support', icon: HeartHandshake, href: '/support' },
    { id: 'logout', label: 'Logout', icon: LogOut, href: '/logout' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-64 h-full bg-gray-100 p-4 flex flex-col z-50">
      {/* Logo Section */}
      <div className="flex items-center mb-8">
        <GraduationCap className="p-2 rounded-lg bg-green-600 text-white w-10 h-10" />
        <p className="ml-2 text-lg font-bold text-gray-900">KoreaConnex</p>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center p-2 rounded-lg font-medium transition-colors duration-200 ${
              activeItem === item.id
                ? 'bg-green-100 text-green-700'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            {item.icon && <item.icon className="w-5 h-5 mr-2" />}
            {item.label}
          </a>
        ))}
      </div>

      {/* Secondary Navigation Items */}
      <div className="flex flex-col space-y-2 mt-7">
        {secondaryNavItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => setActiveItem(item.id)}
            className={`flex items-center p-2 rounded-lg font-medium transition-colors duration-200 ${
              activeItem === item.id
                ? 'bg-green-100 text-green-700'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
          >
            {item.icon && <item.icon className="w-5 h-5 mr-2" />}
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}