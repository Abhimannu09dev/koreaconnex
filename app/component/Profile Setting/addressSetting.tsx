"use client";
import { Button } from "antd";

export default function Address() {
  return (
    <>
    <section className="h-full bg-[#F1F1F1] p-10 rounded-xl">
      <h2 className="font-semibold text-xl">Address & Contact</h2>
      <p className="text-[#929292]">How can we reach you?</p>
      <form className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Row */}
          <div className="flex flex-col">
            <label htmlFor="country" className="text-[#929292]">Country</label>
            <input
              type="text"
              id="country"
              placeholder="Please enter your first name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state" className="text-[#929292]">State/Province</label>
            <input
              type="text"
              id="state"
              placeholder="Please enter your middle name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-[#929292]">City</label>
            <input
              type="text"
              id="lastName"
              placeholder="Please enter your last name"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col">
            <label htmlFor="address" className="text-[#929292]">Address</label>
            <input
              type="text"
              id="address"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="Enter your address"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[#929292]">Postal Code</label>
            <input 
                type="text" 
                name="paostalCode" 
                id="postalCode" 
                className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
                placeholder="Enter Postal Code"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#929292]">Email</label>
            <input
              type="email"
              id="citizenship"
              placeholder="Please enter your email"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>

          {/* Third Row */}
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-[#929292]">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="+977 9812345678"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="secondaryContact" className="text-[#929292]">Secondary Contact(optional)</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="Please enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="passportUpload" className="text-[#929292]">WhatsApp Contact(optional)</label>
            <input
              type="text"
              id="secondaryContact"
              className="bg-white rounded-lg h-10 p-4 border border-gray-300 text-[#929292]"
              placeholder="981234567"
            />
          </div>
          {/* Fourth Row */}
            <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="fathersName" className="text-[#929292]">Father’s Name</label>
                        <input
                        type="text"
                        id="fathersName"
                        className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                        placeholder="Full Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="fathersContactNumber" className="text-[#929292]">Father’s Contact Number</label>
                        <input
                        type="text"
                        id="fathersContactNumber"
                        className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                        placeholder="9812345678"
                        />
                    </div>
                </div>
            </div>
          {/* Fifth row */}
            <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label htmlFor="mothersName" className="text-[#929292]">Mother’s Name</label>
                        <input
                        type="text"
                        id="mothersName"
                        className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#929292]"
                        placeholder="Full Name"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="mothersContactNumber" className="text-[#929292]">Mother’s Contact Number</label>
                        <input
                        type="text"
                        id="mothersContactNumber"
                        className="bg-white rounded-lg h-10 p-4 border border-gray-300 placeholder-[#000]"
                        placeholder="9812345678"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
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
                      Save
                  </Button>
                </div>
            </div>
        </div>
      </form>
    </section>
    </>
  );
}