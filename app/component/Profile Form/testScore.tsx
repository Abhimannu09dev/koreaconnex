"use client";

export default function testScore() {
  return (
    <>
      <h2>Test Scores</h2>
      <p className="text-[#929292]">Share your standardized test results</p>
      <form className="mt-4 text-[#929292]">
        {/* English Proficiency Test */}
        <h3 className="inline text-[#252C32]">English Proficiency Test</h3><input type="checkbox" name="doneTest" id="doneTest" />I haven’t done EPT yet
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" >Test Type</label>
            <input
              type="text"
              id="testScore"
              placeholder="--Select your test score--"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" >Score</label>
            <input
              type="text"
              id="score"
              placeholder="Score"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="examDate" >Date of Exam</label>
            <input
              type="date"
              id="examDate"
              placeholder=""
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
        </div>


        {/* Korean Language Test */}
        <h3 className="inline text-[#252C32]">Korean Language Test</h3><input type="checkbox" name="doneTest" id="doneTest" />I haven’t done KLT yet
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" >Test Type</label>
            <input
              type="text"
              id="testScore"
              placeholder="--Select your test score--"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" >Score</label>
            <input
              type="text"
              id="score"
              placeholder="Score"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="examDate" >Date of Exam</label>
            <input
              type="date"
              id="examDate"
              placeholder=""
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
        </div>
      </form>
    </>
  );
}