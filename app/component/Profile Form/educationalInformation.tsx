"use client";

export default function EducationalInformation() {
  return (
    <>
    <section className="h-full">
      <h2>Education Background</h2>
      <p className="text-[#929292]">Your academic journey so far</p>
      <form className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[#929292]">Highest Education Level</label>
            <select className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]">
                <option>Bachlor's Degree</option>
                <option>Diploma</option>
                <option>High School</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-[#929292]">Program/Stream</label>
            <input
              type="text"
              id="state"
              placeholder="eg. Science/ Management"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-[#929292]">Program name</label>
            <input
              type="text"
              id="lastName"
              placeholder="ed. Bachlor's in computer science"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-[#929292]">Country of Study</label>
            <select className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]">
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="USA">USA</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-[#929292]">Board/University</label>
            <input 
                type="text" 
                name="paostalCode" 
                id="postalCode" 
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
                placeholder="e.g. NEB, Cambridge, TU"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#929292]">Institution name</label>
            <input
              type="text"
              id="institution"
              placeholder="Enter Institution name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="graduationYear" className="text-[#929292]">Graduation Year</label>
            <input
              type="text"
              id="graduationYear"
              placeholder="eg. 2023"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" className="text-[#929292]">Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="e.g. 3.6, 85%, A+"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="markingSystem" className="text-[#929292]">Marking system</label>
            <select>
                <option value="Grade">Garde</option>
                <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>
        <hr />
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[#929292]">Highest Education Level</label>
            <input
              type="text"
              id="country"
              placeholder="Please enter your first name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-[#929292]">Program/Stream</label>
            <input
              type="text"
              id="state"
              placeholder="Please enter your middle name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-[#929292]">Program name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Please enter your last name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-[#929292]">Country of Study</label>
            <input
              type="text"
              id="address"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="Enter your address"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#929292]">Board/University</label>
            <input 
                type="text" 
                name="paostalCode" 
                id="postalCode" 
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
                placeholder="Enter Postal Code"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#929292]">Institution name</label>
            <input
              type="email"
              id="citizenship"
              placeholder="Please enter your email"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-[#929292]">Graduation Year</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="+977 9812345678"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" className="text-[#929292]">Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="Please enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" className="text-[#929292]">Marking system</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="981234567"
            />
          </div>
        </div>
        <hr />
        
        {/* Another Section of the form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[#929292]">Education Level</label>
            <input
              type="text"
              id="country"
              placeholder="Please enter your first name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-[#929292]">Program/Stream</label>
            <input
              type="text"
              id="state"
              placeholder="eg. Science/Management"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-[#929292]">Program name</label>
            <input
              type="text"
              id="lastName"
              placeholder="eg. Bachlor's in Computer Science"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-[#929292]">Country of Study</label>
            <input
              type="text"
              id="address"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="Enter your address"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#929292]">Board/University</label>
            <input 
                type="text" 
                name="paostalCode" 
                id="postalCode" 
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
                placeholder="Enter Postal Code"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#929292]">Institution name</label>
            <input
              type="email"
              id="citizenship"
              placeholder="Please enter your email"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-[#929292]">Graduation Year</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="+977 9812345678"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" className="text-[#929292]">Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="Please enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" className="text-[#929292]">Marking system</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="981234567"
            />
          </div>
        </div>
        <hr />
        

        <div className="flex justify-between">
        <button
            type="submit"
            className="mt-6 w-24 p-4 bg-[#E7E7E7] text-black rounded-xl"
          >
            Back
          </button>
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