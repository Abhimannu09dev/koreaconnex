"use client";

import { Bell, CircleQuestionMark, MessageSquare, User } from "lucide-react";
import PersonalInformatiin from "@/app/component/Profile Form/personalInformation";
import Address from "./Profile Form/address";

export default function ProfileSetup(){
    return(
        <>
            <section className="bg-white py-6 w-full md:pl-64 h-screen">
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
                            {/* <PersonalInformatiin /> */}
                            <Address />
                        </div>
                    </main>
                </div>                
            </section>
        </>
    )
}