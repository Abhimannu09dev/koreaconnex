"use client";

import { Bell, CircleQuestionMark, FilesIcon, GraduationCap, Home, MessageSquare, User } from "lucide-react";
import PersonalInformation from "@/app/component/Profile Form/personalInformation";
import Address from "./Profile Form/address";
import EducationalInformation from "./Profile Form/educationalInformation";
import TestScore from "./Profile Form/testScore";
import FinalForm from "./Profile Form/finalForm";
import SetupComplete from "./Profile Form/setupComplete"
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface FormStepProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  handleNext: () => void;
  handlePrevious: () => void;
  totalSteps: number;
}

export default function ProfileSetup() {
  const [step, setStep] = useState(1);

  const navItems = [
    { id: 1, label: "Personal Information",},
    { id: 2, label: "Address and Contact",},
    { id: 3, label: "Educational Background",},
    { id: 4, label: "English Proficiency Test",},
    { id: 5, label: "Final Submission",},
    { id: 6, label: "Setup Complete",},
  ];

const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInformation
            step={step}
            setStep={setStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalSteps={navItems.length}
          />
        );
      case 2:
        return (
          <Address
            step={step}
            setStep={setStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalSteps={navItems.length}
          />
        );
      case 3:
        return (
          <EducationalInformation
            step={step}
            setStep={setStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalSteps={navItems.length}
          />
        );
      case 4:
        return (
          <TestScore
            step={step}
            setStep={setStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalSteps={navItems.length}
          />
        );
      case 5:
        return (
          <FinalForm
            step={step}
            setStep={setStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalSteps={navItems.length}
          />
        );
      default:
        return (
          <PersonalInformation
            step={step}
            setStep={setStep}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            totalSteps={navItems.length}
          />
        );
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
    <section className="bg-white py-6 w-full md:pl-64 h-full">
      <header>
        <div className="flex flex-row justify-between items-center px-4">
          <p className="text-lg font-semibold text-[#252C32]">Dashboard</p>
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
        <div className="flex flex-row space-x-2">
          <div className="flex flex-col w-full mt-10">
            <div className="text-center">
              <h1 className="font-bold text-4xl mb-3">Complete Your Profile</h1>
              <p>Provide detailed information to help us tailor your application journey.</p>
              {/* Progress Indicator */}
              <div className="mt-4 flex flex-col items-center">
                <div className="w-4xl flex justify-between">
                  <p className="text-sm text-gray-600 flex space-around">
                    Step {step} of {navItems.length}
                  </p>
                  <p className="text-sm text-gray-600 flex space-around">
                    {Math.round((step / navItems.length) * 100)}% Complete
                  </p>
                </div>
                <div className="w-4xl bg-gray-200 rounded-full h-2.5 mt-2">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${(step / navItems.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <main className="py-6 w-full flex justify-center">
              {renderForm()}
            </main>
          </div>
        </div>
      </section>
    </section>
  );
}