"use client";
import { Button } from "antd";
import { BsQuestionCircle } from "react-icons/bs";

export default function PersonalInformation() {
    return (
        <>
        <section className="bg-[#F1F1F1] p-10 rounded-xl">
            <h2 className="font-semibold text-xl">Personal Information</h2>
            <p className="text-[#929292]">Tell us about yourself</p>
            <form className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Row */}
            <div className="flex flex-col">
                <label htmlFor="firstName" className="text-[#929292]">First Name</label>
                <input
                type="text"
                id="firstName"
                placeholder="James"
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="middleName" className="text-[#929292]">Middle Name</label>
                <input
                type="text"
                id="middleName"
                placeholder="Please enter your middle name"
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastName" className="text-[#929292]">Last Name</label>
                <input
                type="text"
                id="lastName"
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
                placeholder="Maharjan"
                />
            </div>

            {/* Second Row */}
            <div className="flex flex-col">
                <label htmlFor="dob" className="text-[#929292]">Date of Birth</label>
                <input
                type="date"
                id="dob"
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                placeholder="2000/01/02"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-[#929292]">Gender</label>
                <div className="flex gap-4">
                <label className="flex items-center">
                    <input type="radio" name="gender" id="male" className="mr-2 h-13" />
                    Male
                </label>
                <label className="flex items-center">
                    <input type="radio" name="gender" id="female" className="mr-2 h-13" />
                    Female
                </label>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="citizenship" className="text-[#929292]">Country of Citizenship</label>
                <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
                    <option value="Grade">Nepal</option>
                    <option value="Percentage">India</option>
                </select>
            </div>

            {/* Third Row */}
            <div className="flex flex-col">
                <label htmlFor="passportNumber" className="text-[#929292]">Passport Number <BsQuestionCircle className="inline"/> </label>
                <input
                type="text"
                id="passportNumber"
                placeholder="PA0123456"
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="passportExpiry" className="text-[#929292]">Passport Expiry Date</label>
                <input
                    type="date"
                    id="passportExpiry"
                    className="bg-white rounded-lg h-13 p-4 border border-gray-300 text-[#111111E5]"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                    placeholder="2000/01/02"
                />
            </div>
            </div>
            <div className="flex justify-end">
                <Button 
                    type="primary"
                    style={{
                        backgroundColor:"#29935C",
                        marginTop:"1.5rem",
                        padding:"1rem",
                        color:"#fff",
                        borderRadius:"0.5rem",
                        width:"10rem",
                        height:"3rem"
                    }}>
                    Save
                </Button>
            </div>
        </form>
    </section>
    </>
  );
}