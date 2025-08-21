"use client";

export default function PersonalInformation() {
    return (
        <>
        <section className="h-full">
            <h2>Personal Information</h2>
            <p className="text-[#929292]">Tell us about yourself</p>
            <form className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Row */}
            <div className="flex flex-col">
                <label htmlFor="firstName" className="text-[#929292]">First Name</label>
                <input
                type="text"
                id="firstName"
                placeholder="Please enter your first name"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="middleName" className="text-[#929292]">Middle Name</label>
                <input
                type="text"
                id="middleName"
                placeholder="Please enter your middle name"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="dob" className="text-[#929292]">Date of Birth</label>
                <input
                type="date"
                id="dob"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                placeholder="2000/01/02"
                />
            </div>

            {/* Second Row */}
            <div className="flex flex-col">
                <label htmlFor="dob" className="text-[#929292]">Date of Birth</label>
                <input
                type="date"
                id="dob"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                placeholder="2000/01/02"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-[#929292]">Gender</label>
                <div className="flex gap-4">
                <label className="text-[#929292]">
                    <input type="radio" name="gender" id="male" className="mr-2" />
                    Male
                </label>
                <label className="text-[#929292]">
                    <input type="radio" name="gender" id="female" className="mr-2" />
                    Female
                </label>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="citizenship" className="text-[#929292]">Country of Citizenship</label>
                <input
                type="text"
                id="citizenship"
                placeholder="Country of Citizenship"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>

            {/* Third Row */}
            <div className="flex flex-col">
                <label htmlFor="passportNumber" className="text-[#929292]">Passport Number</label>
                <input
                type="text"
                id="passportNumber"
                placeholder="Your Passport Number"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="passportExpiry" className="text-[#929292]">Passport Expiry Date</label>
                <input
                type="date"
                id="passportExpiry"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => !e.target.value && (e.target.type = 'text')}
                placeholder="2000/01/02"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="passportUpload" className="text-[#929292]">Upload Passport (Both sides)</label>
                <div className="relative">
                <input
                    type="file"
                    id="passportUpload"
                    accept=".pdf,.jpg,.png"
                    multiple
                    className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292] opacity-0 absolute w-full"
                />
                <div className="bg-white rounded-lg h-10 p-4 border border-gray-300 flex items-center text-[#000] justify-center">
                    Upload
                </div>
                </div>
            </div>
            </div>
            <div className="flex justify-end">
            <button
                type="submit"
                className="mt-6 w-24 p-4 bg-[#29935C] text-white rounded-xl"
            >
                Next
            </button>
            </div>
        </form>
    </section>
    </>
  );
}