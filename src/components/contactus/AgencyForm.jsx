"use client";

import { useState } from "react";

export default function AgencyForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen w-full sm:w-[800px]  flex items-center justify-center bg-[#071119] text-[#00FF9D]">
      <div className="w-full p-8 rounded-lg shadow-lg">
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                num <= step
                  ? "border-[#00FF9D]"
                  : "border-gray-600 text-gray-600"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        <form className="space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xl font-medium mb-1 text-white"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  placeholder="Your full name"
                  className="w-full px-3 py-2 text-white h-16 bg-[#071119] border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xl font-medium mb-1 text-white"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 h-16 text-white bg-[#071119] border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xl font-medium mb-1 text-white"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full px-3 py-2 h-16 bg-[#071119] border  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label className="block text-xl font-medium mb-1">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-white text-xl">
                    <input
                      type="radio"
                      name="contact-method"
                      value="email"
                      className="text-white focus:ring-[#00FF9D] w-4 h-4"
                    />
                    <span>Email</span>
                  </label>
                  <label className="flex items-center space-x-2 text-white text-xl">
                    <input
                      type="radio"
                      name="contact-method"
                      value="phone"
                      className="text-white  focus:ring-[#00FF9D] w-4 h-4"
                    />
                    <span>Phone</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Project Details</h2>
              <div>
                <label
                  htmlFor="project-type"
                  className="block text-xl font-medium mb-1 text-white"
                >
                  Project Type
                </label>
                <select
                  id="project-type"
                  className="w-full px-3 py-2 bg-[#071119] border text-white h-16 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Development</option>
                  <option value="app">App Development</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="project-scope"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Project Scope
                </label>
                <textarea
                  id="project-scope"
                  placeholder="Describe your project"
                  className="w-full px-3 py-2 bg-[#071119] border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Desired Timeline
                </label>
                <input
                  id="timeline"
                  placeholder="e.g., 3 months"
                  className="w-full px-3 py-2 text-white h-16 bg-[#071119] border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Requirements and Goals</h2>
              <div>
                <label
                  htmlFor="key-features"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Key Features
                </label>
                <textarea
                  id="key-features"
                  placeholder="List the key features you want"
                  className="w-full px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="target-audience"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Target Audience
                </label>
                <input
                  id="target-audience"
                  placeholder="Describe your target audience"
                  className="w-full px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label
                  htmlFor="competitors"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Competitors or Similar Projects
                </label>
                <input
                  id="competitors"
                  placeholder="List any competitors or inspirations"
                  className="w-full px-3 py-2 bg-[#071119] border text-white h-16 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label
                  htmlFor="objectives"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Main Objectives
                </label>
                <textarea
                  id="objectives"
                  placeholder="What are the main goals of your project?"
                  className="w-full px-3 py-2 bg-[#071119] border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  rows={4}
                ></textarea>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Additional Information</h2>
              <div>
                <label
                  htmlFor="technologies"
                  className="block text-sm font-medium mb-1"
                >
                  Preferred Technologies
                </label>
                <input
                  id="technologies"
                  placeholder="Any specific technologies or tools?"
                  className="w-full px-3 py-2 bg-[#071119] border border-[#00FF9D] text-[#00FF9D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label
                  htmlFor="challenges"
                  className="block text-sm font-medium mb-1"
                >
                  Current Challenges
                </label>
                <textarea
                  id="challenges"
                  placeholder="Describe any current challenges or pain points"
                  className="w-full px-3 py-2 bg-[#071119] border border-[#00FF9D] text-[#00FF9D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="design-preferences"
                  className="block text-sm font-medium mb-1"
                >
                  Design Preferences
                </label>
                <textarea
                  id="design-preferences"
                  placeholder="Any design preferences or inspirations?"
                  className="w-full px-3 py-2 bg-[#071119] border border-[#00FF9D] text-[#00FF9D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-medium mb-1"
                >
                  Additional Comments
                </label>
                <textarea
                  id="comments"
                  placeholder="Any additional information or comments"
                  className="w-full px-3 py-2 bg-[#071119] border border-[#00FF9D] text-[#00FF9D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                  rows={4}
                ></textarea>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-700 text-[#00FF9D] rounded-md hover:bg-gray-600"
              >
                Previous
              </button>
            )}
            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-[#00FF9D] text-[#071119] rounded-md hover:bg-[#00e689]"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-[#00FF9D] text-[#071119] rounded-md hover:bg-[#00e689]"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
