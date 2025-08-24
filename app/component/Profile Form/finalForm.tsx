"use client";

import { Button } from "antd";
import { FormStepProps } from "../profileSetupDashboard";

const FinalForm: React.FC<FormStepProps> = ({
  handlePrevious,
}) => {
  return (
    <>
        {/* Actual */}
        <section className="bg-[#F1F1F1] p-10 rounded-xl">
            <h2 className="font-semibold text-xl">Visa History & Finalize</h2>
            <p style={{color: "var(--color-grayish)"}}>Almost done!</p>
            <form className="mt-10">        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Row */}
                <div className="flex flex-col">
                    <label style={{color:"var(--color-grayish)"}}>Have you ever been denied a visa to South Korea?</label>
                    <div className="flex gap-4">
                    <label style={{color:"var(--color-grayish)"}}>
                        <input type="radio" name="beenKorea" id="yesKorea" className="mr-2" />
                        Yes
                    </label>
                    <label style={{color:"var(--color-grayish)"}}>
                        <input type="radio" name="beenKorea" id="noKorea"  className="mr-2" />
                        No
                    </label>
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="visatype" style={{color:"var(--color-grayish)"}}>Visa Type</label>
                    <input
                    type="text"
                    id="visatype"
                    placeholder="--Select Visa Type--"
                    className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#929292]"
                    />
                </div>
                    
                {/* Second Row */}
                <div className="flex flex-col">
                    <label htmlFor="appliedYear" style={{color:"var(--color-grayish)"}}>Application Year</label>
                    <input
                        type="text"
                        id="appliedYear"
                        placeholder="e.g. 2022"
                        className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#929292]"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="denialReason" style={{color:"var(--color-grayish)"}}>Reason for Denial</label>
                    <input
                        type="text"
                        id="denialReason"
                        placeholder="--Select a Reason--"
                        className="bg-white rounded-lg h-13 p-4 border border-gray-300 placeholder-[#929292]"
                    />
                </div>
            </div>
            {/* Third row */}
            <div className="flex flex-col mt-4">
                <label htmlFor="additionalNotes" style={{color:"var(--color-grayish)"}}>Additional Notes (optional)</label>
                <textarea 
                    name="additionalNotes" 
                    id="additionalNotes" 
                    cols={30} 
                    rows={5} 
                    className="bg-white rounded-lg p-4 border border-gray-300 placeholder-[#929292]" 
                    placeholder="e.g. Rejected due to missing financial documents"/>
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
                    Submit
                </Button>
            </div>
        </form>
      </section>
    </>
  );
}
export default FinalForm;