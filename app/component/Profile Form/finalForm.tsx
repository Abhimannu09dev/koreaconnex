"use client";

export default function finalForm() {
  return (
    <>
      <h2>Visa History & Finalize</h2>
      <p className="text-[#929292]">Almost done!</p>
      <form className="mt-4 text-[#929292]">        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Row */}
            <div className="flex flex-col">
                <label className="text-[#929292]">Have you ever been denied a visa to South Korea?</label>
                <div className="flex gap-4">
                <label className="text-[#929292]">
                    <input type="radio" name="beenKorea" id="yesKorea" className="mr-2" />
                    Yes
                </label>
                <label className="text-[#929292]">
                    <input type="radio" name="beenKorea" id="noKorea"  className="mr-2" />
                    No
                </label>
                </div>
            </div>
            <div className="flex flex-col">
                <label htmlFor="visatype" >Visa Type</label>
                <input
                type="text"
                id="visatype"
                placeholder="--Select Visa Type--"
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>
                
            {/* Second Row */}
            <div className="flex flex-col">
                <label htmlFor="denialReason" >Reason for Denial</label>
                <input
                    type="text"
                    id="denialReason"
                    placeholder="--Select a Reason--"
                    className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="appliedYear" >Application Year</label>
                <input
                    type="text"
                    id="appliedYear"
                    placeholder="e.g. 2022"
                    className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                />
            </div>
        </div>
        {/* Third row */}
        <div className="flex flex-col">
            <label htmlFor="additionalNotes" >Additional Notes(optional)</label>
            <textarea 
                name="additionalNotes" 
                id="additionalNotes" 
                cols={30} 
                rows={5} 
                className="bg-white rounded-lg p-4 border border-gray-300 placeholder-[#929292]" 
                placeholder="e.g. Rejected due to missing financial documents"/>
        </div>
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
      
    </>
  );
}