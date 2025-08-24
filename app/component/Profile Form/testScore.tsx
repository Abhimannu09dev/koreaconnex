"use client";
import { Button } from "antd";
import { FormStepProps } from "../profileSetupDashboard";
const TestScore: React.FC<FormStepProps> = ({
  handleNext,
  handlePrevious,
}) => {
  return (
    <>
      <section className="h-full bg-[#F1F1F1] p-10 rounded-xl">
        <h2 className="font-semibold text-xl">Test Scores</h2>
        <p className="text-[#929292]">Share your standardized test results</p>
        <form className="mt-4">
          {/* English Proficiency Test */}
          <div className="flex flex-col space-y-5 mb-5">
            <div className="flex flex-row space-x-4 items-center">
              <h3 className="text-lg">English Proficiency Test</h3>
              <p style={{color:"var(--color-grayish)"}}><input type="checkbox" name="doneELTTest" id="doneEPTTest"/>I haven’t done EPT yet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Row */}
              <div className="flex flex-col">
                <label htmlFor="country"  style={{color:"var(--color-grayish)"}}>Test Type</label>
                <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                  <option selected disabled>--Select your test type--</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" style={{color:"var(--color-grayish)"}}>Score</label>
                <input
                  type="text"
                  id="score"
                  placeholder="Score"
                  className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                  style={{color:"var(--color-placeholder)"}}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="examDate" style={{color:"var(--color-grayish)"}}>Date of Exam</label>
                <input
                  type="date"
                  id="examDate"
                  placeholder=""
                  className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                  style={{color:"var(--color-placeholder)"}}
                />
              </div>
            </div>
            <div className="gap-6 mb-10">
              <div className="flex flex-col">
                <label htmlFor="transcript" style={{color:"var(--color-grayish)"}}>Upload Transcripit</label>
                <input
                  type="file"
                  id="transcript"
                  className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-10 file:h-14 "
                  style={{color:"var(--color-placeholder)"}}
                />
              </div>
            </div>
          </div>


          {/* Korean Language Test */}
          <div className="flex flex-col space-y-5">
            <div className="flex space-x-4 items-center">
              <h3 className="text-lg">Korean Language Test</h3>
              <p style={{color:"var(--color-grayish)"}}><input type="checkbox" name="doneKLTTest" id="doneKLTTest" />I haven’t done KLT yet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* First Row */}
              <div className="flex flex-col">
                <label htmlFor="country" style={{color:"var(--color-grayish)"}}>Test Type</label>
                <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                  <option selected disabled>--Select your test type--</option>
                  <option value="">Option 1</option>
                  <option value="">Option 2</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="state" style={{color:"var(--color-grayish)"}}>Score</label>
                <input
                  type="text"
                  id="score"
                  placeholder="Score"
                  className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                  style={{color:"var(--color-placeholder)"}}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="examDate" style={{color:"var(--color-grayish)"}}>Date of Exam</label>
                <input
                  type="date"
                  id="examDate"
                  placeholder=""
                  className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                  style={{color:"var(--color-placeholder)"}}
                />
              </div>
            </div>
            <div className="gap-6 mb-10">
              <div className="flex flex-col">
                <label htmlFor="transcript" style={{color:"var(--color-grayish)"}}>Upload Transcripit</label>
                <input
                  type="file"
                  id="transcript"
                  className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-10 file:h-14 "
                  style={{color:"var(--color-placeholder)"}}
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex justify-between"> 
          <Button 
              onClick={handlePrevious}
              type="primary"
              style={{
                  backgroundColor:"var(--color-secondary-grayish)",
                  marginTop:"1.5rem",
                  padding:"1rem",
                  color:"#000",
                  borderRadius:"0.5rem",
                  width:"10rem",
                  height:"3rem"
              }}>
              Back
          </Button>
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
      </section>
    </>
  );
}
export default TestScore;