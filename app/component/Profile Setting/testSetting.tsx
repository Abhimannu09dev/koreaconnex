"use client";
import { Button } from "antd";

export default function testScore() {
  return ( 
    <>
      <section className="bg-[#F1F1F1] p-10 rounded-xl">
      <h2 className="font-semibold text-xl">English Proficiency Test</h2>
      <p className="text-[#929292]">Share your standardized test results</p>
      {/* English Proficiency Test Form */}
      <form className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[#929292]">Test Type</label>
            <select className="bg-white rounded-lg  p-4 border border-gray-300">
                <option>Person Test of English</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-[#929292]">Score</label>
            <input
              type="text"
              id="score"
              placeholder="76"
              className="h-13 bg-white rounded-lg p-4 border border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-[#929292]">Date of Exam</label>
            <input
              type="Date"
              id="examDate"
              placeholder="ed. Bachlor's in computer science"
              className="bg-white rounded-lg h-13 p-4 border border-gray-300"
            />
          </div>
        </div>
        {/* Save Button */}
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