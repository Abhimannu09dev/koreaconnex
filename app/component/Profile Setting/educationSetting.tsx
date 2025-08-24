"use client";
import { Button } from "antd";
export default function EducationalInformation() {
  return (
    <>
    <section className="h-full bg-[#F1F1F1] p-10 rounded-xl">
      <h2 className="font-medium text-base">Education Background</h2>
      <p className="text-[#929292]">Your academic journey so far</p>
      <form className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="highestEducation" className="text-[#606060]">Highest Education Level</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
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
              placeholder="Science"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-[#929292]">Program name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Bachlors in Computer Science"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="institution" className="text-[#929292]">Institution name</label>
            <input
              type="text"
              id="institution"
              placeholder="Kathmandu University"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="studyCountry" className="text-[#929292]">Country of Study</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="China">China</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-[#929292]">Board/University</label>
            <input 
                type="text" 
                name="paostalCode" 
                id="postalCode" 
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 text-[#929292] placeholder-[#111111E5]"
                placeholder="KU"/>
          </div>


          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="graduationYear" className="text-[#929292]">Graduation Year</label>
            <input
              type="text"
              id="graduationYear"
              placeholder="2023"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" className="text-[#929292]">Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
              placeholder="3.6"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="markingSystem" className="text-[#929292]">Marking system</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
                <option value="Grade">Garde(4.0 scale)</option>
                <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>
        <hr />
        
        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[#929292]">Education Level</label>
            <input
              type="text"
              id="country"
              placeholder="High School Degree"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-[#929292]">Program/Stream</label>
            <input
              type="text"
              id="state"
              placeholder="Science"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-[#929292]">Institution name</label>
            <input
              type="text"
              id="lastName"
              placeholder="St. Xavier’s College"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="studyCountry" className="text-[#929292]">Country of Study</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="board" className="text-[#929292]">Board/University</label>
            <input 
                type="text" 
                name="board" 
                id="postalCode" 
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
                placeholder="NEB"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="graduationYear" className="text-[#929292]">Graduation Year</label>
            <input
              type="email"
              id="graduationYear"
              placeholder="2019"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" className="text-[#929292]">Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 text-[#929292] placeholder-[#111111E5]"
              placeholder="4.0"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" className="text-[#929292]">Marking system</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
        </div>
        <hr />
        
        {/* Third Section of the form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[#929292]">Education Level</label>
            <input
              type="text"
              id="country"
              placeholder="Seconday Education (SEE)"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-[#929292]">Program/Stream</label>
            <input
              type="text"
              id="state"
              placeholder="GEMS School"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="studyCountry" className="text-[#929292]">Country of Study</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="board" className="text-[#929292]">Board/University</label>
            <input 
                type="text" 
                name="board" 
                id="postalCode" 
                className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
                placeholder="NEB"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="graduationYear" className="text-[#929292]">Graduation Year</label>
            <input
              type="email"
              id="graduationYear"
              placeholder="2019"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]"
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" className="text-[#929292]">Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300 text-[#929292] placeholder-[#111111E5]"
              placeholder="4.0"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" className="text-[#929292]">Marking system</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#111111E5]">
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
        </div>
        
        {/* Save */}
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