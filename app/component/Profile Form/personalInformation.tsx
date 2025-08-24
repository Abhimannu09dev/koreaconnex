"use client";
import { Button } from "antd";
import { BsQuestionCircle } from "react-icons/bs";
import { FormStepProps } from "../profileSetupDashboard";
import { useState } from "react";

const PersonalInformation: React.FC<FormStepProps> = ({
  handleNext,
}) => {
    const [fileName, setFileName] = useState("Upload"); // Default placeholder text

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileName(file ? file.name : "Upload"); // Show file name or revert to placeholder
    };
    return (
        <>
        <section className="bg-[#F1F1F1] p-10 rounded-xl mb-10">
            <h2 className="font-semibold text-xl">Personal Information</h2>
            <p style={{color: "var(--color-grayish)"}}>Tell us about yourself</p>
            <form className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Row */}
            <div className="flex flex-col">
                <label htmlFor="firstName" style={{color: "var(--color-grayish)"}}>First Name</label>
                <input
                type="text"
                id="firstName"
                placeholder="Please enter your frist name"
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                style={{color: "var(--color-placeholder)"}}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="middleName" style={{color: "var(--color-grayish)"}}>Middle Name</label>
                <input
                type="text"
                id="middleName"
                placeholder="Please enter your middle name"
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                style={{color: "var(--color-placeholder)"}}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastName" style={{color: "var(--color-grayish)"}}>Last Name</label>
                <input
                type="text"
                id="lastName"
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                placeholder="Please enter your last name"
                style={{color: "var(--color-placeholder)"}}
                />
            </div>

            {/* Second Row */}
            <div className="flex flex-col">
                <label htmlFor="dob" style={{color: "var(--color-grayish)"}}>Date of Birth</label>
                <input
                type="date"
                id="dob"
                className="bg-white rounded-lg h-14 p-4 border border-gray-300 "
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                placeholder="2000/01/02"
                style={{color: "var(--color-placeholder)"}}
                />
            </div>
            <div className="flex flex-col">
                <label style={{color: "var(--color-grayish)"}}>Gender</label>
                <div className="flex gap-4">
                    <label style={{color: "var(--color-grayish)"}} className="flex items-center">
                        <input type="radio" name="gender" id="male" className="mr-2 h-14" />
                        Male
                    </label>
                    <label style={{color: "var(--color-grayish)"}} className="flex items-center">
                        <input type="radio" name="gender" id="female" className="mr-2 h-14" />
                        Female
                    </label>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="citizenship" style={{color: "var(--color-grayish)"}}>Country of Citizenship</label>
                <input
                type="text"
                id="lastName"
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                placeholder="Please enter your citizenship country"
                style={{color: "var(--color-placeholder)"}}
                />
            </div>

            {/* Third Row */}
            <div className="flex flex-col">
                <label htmlFor="passportNumber" style={{color: "var(--color-grayish)"}}>Passport Number <BsQuestionCircle className="inline"/> </label>
                <input
                type="text"
                id="passportNumber"
                placeholder="Your password number"
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                style={{color: "var(--color-placeholder)"}}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="passportExpiry" style={{color: "var(--color-grayish)"}}>Passport Expiry Date</label>
                <input
                    type="date"
                    id="passportExpiry"
                    className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                    placeholder="2000/01/02"
                    style={{color: "var(--color-placeholder)"}}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="passportPhoto" style={{color: "var(--color-grayish)"}}>Upload Passport (BothSides) <BsQuestionCircle className="inline" /> </label>
                <label
                className="bg-white rounded-lg border border-gray-300 p-4 text-center"
                >
                <span className="text-grayish truncate max-w-[80%]">{fileName}</span>
                <input
                    type="file"
                    id="passportPhoto"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                />
                </label>
            </div>
            </div>
            <div className="flex justify-end">
                <Button 
                    onClick={handleNext}
                    type="primary"
                    style={{
                        backgroundColor:"var(--color-primary)",
                        marginTop:"1.5rem",
                        padding:"1rem",
                        color:"#fff",
                        borderRadius:"0.5rem",
                        width:"10rem",
                        height:"3rem"
                    }}>
                    Next
                </Button>
            </div>
        </form>
    </section>
    </>
  );
}
export default PersonalInformation;