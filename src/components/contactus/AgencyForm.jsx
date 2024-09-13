"use client";

import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function AgencyForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ccpxtjm", "template_ghiruhl", formValues, {
        publicKey: "NKCSolpNuoP0lqR-c",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
    projectType: "",
    projectScope: "",
    timeline: "",
    keyFeatures: "",
    targetAudience: "",
    competitors: "",
    objectives: "",
    technologies: "",
    challenges: "",
    designPreferences: "",
    comments: "",
  });

  const totalSteps = 4;

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "radio") {
      setFormValues({ ...formValues, [id]: checked ? value : "" });
    } else {
      setFormValues({ ...formValues, [id]: value });
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          formValues.name &&
          formValues.email &&
          formValues.phone &&
          formValues.contactMethod
        );
      case 2:
        return (
          formValues.projectType &&
          formValues.projectScope &&
          formValues.timeline
        );
      case 3:
        return (
          formValues.keyFeatures &&
          formValues.targetAudience &&
          formValues.competitors &&
          formValues.objectives
        );
      case 4:
        return (
          formValues.technologies &&
          formValues.challenges &&
          formValues.designPreferences &&
          formValues.comments
        );
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
      setStep(step + 1);
    } else {
      alert("Please complete all required fields.");
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen w-full sm:w-[800px] flex items-center justify-center bg-[#071119] text-[#00FF9D]">
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

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-white h-16 bg-[#071119] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
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
                  name="email"
                  placeholder="Your email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 h-16 text-white bg-[#071119] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
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
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={formValues.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 h-16 bg-[#071119] border text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
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
                      name="contactMethod"
                      id="contactMethod"
                      value="email"
                      checked={formValues.contactMethod === "email"}
                      onChange={handleChange}
                      className="text-white focus:ring-[#00FF9D] w-4 h-4"
                    />
                    <span>Email</span>
                  </label>
                  <label className="flex items-center space-x-2 text-white text-xl">
                    <input
                      type="radio"
                      id="contactMethod"
                      name="contactMethod"
                      value="phone"
                      checked={formValues.contactMethod === "phone"}
                      onChange={handleChange}
                      className="text-white focus:ring-[#00FF9D] w-4 h-4"
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
                  id="projectType"
                  name="projectType"
                  value={formValues.projectType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#071119] border text-white h-16 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                >
                  <option value="">Select project type</option>
                  <option value="website">Website Development</option>
                  <option value="app">Mobile App Development</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="consulting">SEO</option>
                  <option value="consulting">UI & UX Design</option>
                  <option value="consulting">Digital Marketing</option>
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
                  id="projectScope"
                  name="projectScope"
                  placeholder="Describe your project"
                  value={formValues.projectScope}
                  onChange={handleChange}
                  className="w-full resize-none px-3 py-2 bg-[#071119] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
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
                  name="timeline"
                  id="timeline"
                  placeholder="e.g., 3 months"
                  value={formValues.timeline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-white h-16 bg-[#071119] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
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
                  name="keyFeatures"
                  id="keyFeatures"
                  placeholder="List the key features you want"
                  value={formValues.keyFeatures}
                  onChange={handleChange}
                  className="w-full resize-none px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
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
                  name="targetAudience"
                  id="targetAudience"
                  placeholder="Describe your target audience"
                  value={formValues.targetAudience}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label
                  htmlFor="competitors"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Competitors
                </label>
                <input
                  name="competitors"
                  id="competitors"
                  placeholder="List any competitors"
                  value={formValues.competitors}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label
                  htmlFor="objectives"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Objectives
                </label>
                <textarea
                  name="objectives"
                  id="objectives"
                  placeholder="What are your main objectives?"
                  value={formValues.objectives}
                  onChange={handleChange}
                  className="w-full resize-none px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
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
                  className="block text-xl text-white font-medium mb-1"
                >
                  Preferred Technologies
                </label>
                <input
                  name="technologies"
                  id="technologies"
                  placeholder="Specify any preferred technologies"
                  value={formValues.technologies}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label
                  htmlFor="challenges"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Potential Challenges
                </label>
                <input
                  name="challenges"
                  id="challenges"
                  placeholder="Any potential challenges?"
                  value={formValues.challenges}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                />
              </div>
              <div>
                <label
                  htmlFor="design-preferences"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Design Preferences
                </label>
                <textarea
                  name="designPreferences"
                  id="designPreferences"
                  placeholder="Any design preferences?"
                  value={formValues.designPreferences}
                  onChange={handleChange}
                  className="w-full resize-none px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                  rows={4}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-xl text-white font-medium mb-1"
                >
                  Additional Comments
                </label>
                <textarea
                  name="comments"
                  id="comments"
                  placeholder="Any additional comments or notes"
                  value={formValues.comments}
                  onChange={handleChange}
                  className="w-full resize-none px-3 py-2 bg-[#071119] border h-16 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00FF9D]"
                  rows={4}
                ></textarea>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-700 text-white rounded-md"
              >
                Previous
              </button>
            )}
            {step < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`px-4 py-2 rounded-md ${
                  isStepValid() ? "bg-[#00FF9D]" : "bg-gray-500"
                } text-white`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-[#00FF9D] text-white rounded-md"
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
