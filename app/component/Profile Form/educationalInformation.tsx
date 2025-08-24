"use client";
import { Button } from "antd";
import { FormStepProps } from "../profileSetupDashboard";

const EducationalInformation: React.FC<FormStepProps> = ({
  handleNext,
  handlePrevious,
}) => {
  return (
    <>
    <section className="h-full bg-[#F1F1F1] p-10 rounded-xl">
      <h2 className="font-semibold text-xl">Education Background</h2>
      <p style={{color: "var(--color-grayish)"}}>Your academic journey so far</p>
      <form className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="highestEducation" style={{color:"var(--color-grayish)"}}>Highest Education Level</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color: "var(--color-placeholder)"}}>
                <option>Bachlor's Degree</option>
                <option>Diploma</option>
                <option>High School</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="stream" style={{color:"var(--color-grayish)"}}>Program/Stream</label>
            <input
              type="text"
              id="stream"
              placeholder="e.g. Science, Management"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="program" style={{color:"var(--color-grayish)"}}>Program name</label>
            <input
              type="text"
              id="program"
              placeholder="e.g. Bachlors in Computer Science"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color:"var(--color-placeholder)"}}
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="studyCountry" style={{color:"var(--color-grayish)"}}>Country of Study</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color: "var(--color-placeholder)"}}>
                <option selected disabled>Select Country</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
                <option value="China">China</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label style={{color:"var(--color-grayish)"}}>Board/University</label>
            <input 
                type="text" 
                name="Board" 
                id="Board" 
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                style={{color:"var(--color-placeholder)"}}
                placeholder="e.g. NEB, Cambridge, TU"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="institution" style={{color:"var(--color-grayish)"}}>Institution name</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color: "var(--color-placeholder)"}}>
                <option >Bachlor's </option>
                <option>Diploma</option>
                <option>High School</option>
            </select>
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="graduationYear" style={{color:"var(--color-grayish)"}}>Graduation Year</label>
            <input
              type="text"
              id="graduationYear"
              placeholder="2023"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="GPA" style={{color:"var(--color-grayish)"}}>Grade / GPA / %</label>
            <input
              type="text"
              id="GPA"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color:"var(--color-placeholder)"}}
              placeholder="e.g. 3.6, 90%, A+"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="markingSystem" style={{color:"var(--color-grayish)"}}>Marking system</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                <option selected disabled>Select Marking Grade</option>
                <option value="Grade">Garde(4.0 scale)</option>
                <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="flex flex-col">
            <label htmlFor="transcript" style={{color:"var(--color-grayish)"}}>Upload Transcripit</label>
            <input
              type="file"
              id="transcript"
              className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-4 file:h-14 "
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="ceritficate" style={{color:"var(--color-grayish)"}}>Upload Certificate</label>
            <input
              type="file"
              id="ceritficate"
              className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-4 file:h-14 "
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
        </div>
        <hr />
        
        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-4">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="educationLevel" style={{color:"var(--color-grayish)"}}>Education Level</label>
            <input
              type="text"
              id="educationLevel"
              placeholder="High School Degree"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="program" style={{color:"var(--color-grayish)"}}>Program/Stream</label>
            <input
              type="text"
              id="program"
              placeholder="e.g. Science, Management"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" style={{color:"var(--color-grayish)"}}>Program name</label>
            <input
              type="text"
              id="state"
              placeholder="e.g. Bachlor's in computer science"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
            />
          </div>
          {/* Second row */}
          <div className="flex flex-col">
            <label htmlFor="studyCountry" style={{color:"var(--color-grayish)"}}>Country of Study</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                <option disabled selected>Select country</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="board" style={{color:"var(--color-grayish)"}}>Board/University</label>
            <input 
                type="text" 
                name="board" 
                id="postalCode" 
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                style={{color:"var(--color-placeholder)"}}
                placeholder="e.g. NEB, Cambridge,TU"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="InstitutionName" style={{color:"var(--color-grayish)"}}>Institution name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Institution Name"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
            />
          </div>
          {/* Third row */}
          <div className="flex flex-col">
            <label htmlFor="graduationYear" style={{color:"var(--color-grayish)"}}>Graduation Year</label>
            <input
              type="email"
              id="graduationYear"
              placeholder="e.g. 2023"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color:"var(--color-placeholder)"}}
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" style={{color:"var(--color-grayish)"}}>Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              placeholder="e.g. 3.6, 85%, A+"
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" style={{color:"var(--color-grayish)"}}>Marking system</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300]" style={{color:"var(--color-placeholder)"}}>
                <option selected disabled>Select grading scale</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" style={{color:"var(--color-grayish)"}}>Upload Transcripit</label>
            <input
              type="file"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-4 file:h-14 "
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" style={{color:"var(--color-grayish)"}}>Upload Certificate</label>
            <input
              type="file"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-4 file:h-14 "
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
        </div>
        <hr />
        
        {/* Third Section of the form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-4">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" style={{color:"var(--color-grayish)"}}>Education Level</label>
            <input
              type="text"
              id="country"
              placeholder="School Level"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="state" style={{color:"var(--color-grayish)"}}>Institution Name</label>
            <input
              type="text"
              id="state"
              placeholder="Enter Institution Name"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color:"var(--color-placeholder)"}}
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="studyCountry" style={{color:"var(--color-grayish)"}}>Country of Study</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="board" style={{color:"var(--color-grayish)"}}>Board/University</label>
            <input 
                type="text" 
                name="board" 
                id="postalCode" 
                className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                style={{color:"var(--color-placeholder)"}}
                placeholder="e.g. NEB, Cambridge, TU"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="graduationYear" style={{color:"var(--color-grayish)"}}>Graduation Year</label>
            <input
              type="email"
              id="graduationYear"
              placeholder="e.g. 2023"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color:"var(--color-placeholder)"}}
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" style={{color:"var(--color-grayish)"}}>Grade / GPA / %</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              placeholder="e.g. 3.6,85%, A+"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" style={{color:"var(--color-grayish)"}}>Marking system</label>
            <select className="bg-white rounded-lg h-14 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                <option disabled selected>Select grading scale</option>
                <option value="Nepal">Nepal</option>
                <option value="India">India</option>
            </select>
          </div>
          
        </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" style={{color:"var(--color-grayish)"}}>Upload Transcripit</label>
            <input
              type="file"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-4 file:h-14 "
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" style={{color:"var(--color-grayish)"}}>Upload Certificate</label>
            <input
              type="file"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 border border-gray-300 file:bg-[#F2F2F2] file:text-[#909090E5] file:rounded-md file:px-4 file:h-14 "
              style={{color:"var(--color-placeholder)"}}
            />
          </div>
        </div>
        
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
      </form>
    </section>
    </>
  );
}
export default EducationalInformation;