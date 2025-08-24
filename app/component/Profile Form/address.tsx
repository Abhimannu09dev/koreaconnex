"use client";
import { Button } from "antd";
import { FormStepProps } from "../profileSetupDashboard";

const Address: React.FC<FormStepProps> = ({
  handleNext,
  handlePrevious,
}) => {
  return (
    <>
    <section className="h-full bg-[#F1F1F1] p-10 rounded-xl">
      <h2 className="font-semibold text-xl">Address & Contact</h2>
      <p style={{color: "var(--color-grayish)"}}>How can we reach you?</p>
      <form className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" style={{color: "var(--color-grayish)"}}>Country</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                <option disabled selected>--Select Country--</option>
                <option>Province No 1</option>
                <option>Bagmati</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" style={{color: "var(--color-grayish)"}}>State/Province</label>
            <select className="bg-white rounded-lg h-13 p-4 border border-gray-300" style={{color:"var(--color-placeholder)"}}>
                <option disabled selected>--Select State/Province--</option>
                <option>Nepal</option>
                <option>India</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" style={{color: "var(--color-grayish)"}}>City</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter city"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="address" style={{color: "var(--color-grayish)"}}>Address</label>
            <input
              type="text"
              id="address"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300 text-[#929292]"
              placeholder="Enter address"
            />
          </div>
          <div className="flex flex-col">
            <label style={{color: "var(--color-grayish)"}}>Postal Code</label>
            <input 
                type="text" 
                name="paostalCode" 
                id="postalCode" 
                className="bg-white rounded-lg h-14 p-4 border border-gray-300 text-[#929292]"
                placeholder="Enter Postal Code"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" style={{color: "var(--color-grayish)"}}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" style={{color: "var(--color-grayish)"}}>Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="+977 9812345678"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" style={{color: "var(--color-grayish)"}}>Secondary Contact(optional)</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
              placeholder="Please enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" style={{color: "var(--color-grayish)"}}>WhatsApp Contact(optional)</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-14 p-4 border border-gray-300"
              style={{color: "var(--color-placeholder)"}}
              placeholder="981234567"
            />
          </div>
          {/* Fourth Row */}
            <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="fathersName" style={{color: "var(--color-grayish)"}}>Father’s Name</label>
                        <input
                        type="text"
                        id="fathersName"
                        className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                        style={{color: "var(--color-placeholder)"}}
                        placeholder="Full Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fathersContactNumber" style={{color: "var(--color-grayish)"}}>Father’s Contact Number</label>
                        <input
                        type="text"
                        id="fathersContactNumber"
                        className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                        style={{color: "var(--color-placeholder)"}}
                        placeholder="9812345678"
                        />
                    </div>
                </div>
            </div>
          {/* Fifth row */}
            <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="mothersName" style={{color: "var(--color-grayish)"}}>Mother’s Name</label>
                        <input
                        type="text"
                        id="mothersName"
                        className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                        style={{color: "var(--color-placeholder)"}}
                        placeholder="Full Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mothersContactNumber" style={{color: "var(--color-grayish)"}}>Mother’s Contact Number</label>
                        <input
                        type="text"
                        id="mothersContactNumber"
                        className="bg-white rounded-lg h-14 p-4 border border-gray-300"
                        style={{color: "var(--color-placeholder)"}}
                        placeholder="9812345678"
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
            </div>
        </div>
      </form>
    </section>
    </>
  );
}
export default Address;