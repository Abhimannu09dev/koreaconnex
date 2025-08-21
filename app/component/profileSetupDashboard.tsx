"use client";

import { Bell, CircleQuestionMark, MessageSquare, User } from "lucide-react";
import PersonalInformation from "@/app/component/Profile Form/personalInformation";
import Address from "./Profile Form/address";
import EducationalInformation from "./Profile Form/educationalInformation";
import TestScore from "./Profile Form/testScore";
import FinalForm from "./Profile Form/finalForm";
import { useState } from "react";

export default function ProfileSetup(){
    const [step, setStep] = useState(1);


    const renderForm = () => {
        switch (step) {
            case 1: return <PersonalInformation />;
            case 2: return <Address />;
            case 3: return <EducationalInformation />;
            case 4: return <TestScore />;
            case 5: return <FinalForm />;
            default: return null;
        }
    };
    return(
        <>
            <section className="bg-white py-6 w-full md:pl-64 h-full">
                <header>
                    <div className="flex flex-row justify-between items-center px-4">
                        <p className="text-lg font-semibold text-[#252C32]">Dashboard</p>
                        <div className="flex flex-row gap-4 text-[#5B6871]">
                            <div><MessageSquare className="inline"/>Feedback? </div>
                            <Bell className="inline"/>
                            <CircleQuestionMark className="inline"/>
                            <User className="inline"/>
                        </div>
                    </div>
                </header>
                
                {/* progress bar */}
                {/* <section>
                    <div>Step 1 to 5</div>
                </section> */}

                <div className="flex flex-col">
                    <div className="text-center">
                        <h1 className="font-bold text-4xl mb-3">Complete Your Profile</h1>
                        <p>Provide detailed information to help us tailor your application journey.</p>
                    </div>
                    <main className="py-6 w-full flex justify-center">
                        <div className="bg-gray-100 p-4 m-10 rounded-xl">
                        {renderForm()}
                        <button
                            onClick={() => setStep((prev) => Math.min(prev + 1, 5))}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Next
                        </button>
                        {step > 1 && (
                            <button
                                onClick={() => setStep((prev) => prev - 1)}
                                className="mt-4 ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Previous
                            </button>
                        )}
                    </div>
                    </main>
                </div>                
            </section>
        </>
    )
}