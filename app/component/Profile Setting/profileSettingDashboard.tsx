"use client";

import { Bell, CircleQuestionMark, FilesIcon, GraduationCap, Home, MessageSquare, User } from "lucide-react";
import PersonalInformation from "@/app/component/Profile Form/personalInformation";
import Address from "../Profile Form/address";
import EducationalInformation from "../Profile Form/educationalInformation";
import TestScore from "../Profile Form/testScore";
import { useState } from "react";

export default function ProfileSetup() {
  const [step, setStep] = useState(1);

  const navItems = [
    { id: 1, label: "Personal Information", icon: User },
    { id: 2, label: "Address and Contact", icon: Home },
    { id: 3, label: "Educational Background", icon: GraduationCap },
    { id: 4, label: "English Proficiency Test", icon: FilesIcon },
  ];

  const renderForm = () => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <Address />;
      case 3:
        return <EducationalInformation />;
      case 4:
        return <TestScore />;
      default:
        return <PersonalInformation />;
    }
  };

  const handleNavClick = (id: number) => {
    setStep(id);
  };

  const handleNext = () => {
    if (step < navItems.length) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <section className="bg-white py-6 w-full md:pl-64">
      <header>
        <div className="flex flex-row justify-between items-center px-4 mb-10">
          <p className="text-lg font-semibold" style={{color:"var --color-blackish"}}>Dashboard</p>
          <div className="flex flex-row gap-4 text-[#5B6871]">
            <div>
              <MessageSquare className="inline" /> Feedback?
            </div>
            <Bell className="inline" />
            <CircleQuestionMark className="inline" />
            <User className="inline" />
          </div>
        </div>
      </header>

      <section>
        <p className="pl-10 text-lg font-semibold">Your Profile</p>
        <div className="flex flex-row">
          <div className="pt-3 pl-10">
            {/* Navigation between setup */}
            <div className="pt-4 flex flex-col space-y-2 w-3xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center p-2 rounded-lg font-medium ${
                    step === item.id ? "text-white" : "text-gray-700"
                  }`}
                  style={{
                    backgroundColor: step === item.id ? "var(--color-primary)":"transparent",
                    color: step !== item.id ? "var(--color-grayish)" : undefined,
                  }}
                  aria-current={step === item.id ? "page" : undefined}
                >
                  {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full h-screen">
            {/* Render of forms */}
            <main className="py-6 w-full flex justify-center">
              {renderForm()}
            </main>
          </div>
        </div>
      </section>
    </section>
  );
}