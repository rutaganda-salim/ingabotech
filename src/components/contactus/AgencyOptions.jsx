import { useState } from "react";
import AgencyForm from "./AgencyForm";

export default function AgencyOptions() {
  const [showForm, setShowForm] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div
      id="get-quote"
      className="min-h-screen flex items-center justify-center w-full bg-[#071119] text-[#00FF9D] p-4"
    >
      {!showForm ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div className="bg-[#071119] border border-[#00FF9D] rounded-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Onboarding Form</h2>
            <p className="text-[#00FF9D]/70 mb-4">
              Fill out our comprehensive onboarding form to get started
            </p>
            <div className="flex-grow">
              <p className="mb-2">
                Our onboarding form covers all the essential details we need to
                understand your project. It includes sections on:
              </p>
              <ul className="list-disc list-inside">
                <li>Contact Information</li>
                <li>Project Details</li>
                <li>Requirements and Goals</li>
                <li>Additional Information</li>
              </ul>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="w-full mt-4 bg-[#00FF9D] text-[#071119] py-2 rounded-md hover:bg-[#00FF9D]/80 transition-colors"
            >
              Start Onboarding Form
            </button>
          </div>

          <div className="bg-[#071119] border border-[#00FF9D] rounded-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-2">Book a Call</h2>
            <p className="text-[#00FF9D]/70 mb-4">
              Schedule a one-on-one call with our team
            </p>
            <div className="flex-grow">
              <p>
                Prefer a more personal touch? Book a call with one of our
                experts to discuss your project in detail. We'll be happy to
                answer any questions and provide tailored advice.
              </p>
            </div>
            <button
              onClick={() => setShowDialog(true)}
              className="w-full mt-4 bg-[#00FF9D] text-[#071119] py-2 rounded-md hover:bg-[#00FF9D]/80 transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      ) : (
        <AgencyForm />
      )}

      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#071119] border border-[#00FF9D] rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-2">Schedule Your Call</h2>
            <p className="text-[#00FF9D]/70 mb-4">
              Pick a date and time that works for you.
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full bg-[#071119] border border-[#00FF9D] rounded-md p-2 text-[#00FF9D]"
                onChange={(e) => handleDateSelect(new Date(e.target.value))}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#071119] border border-[#00FF9D] rounded-md p-2 text-[#00FF9D]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#071119] border border-[#00FF9D] rounded-md p-2 text-[#00FF9D]"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 border border-[#00FF9D] text-[#00FF9D] rounded-md hover:bg-[#00FF9D] hover:text-[#071119] transition-colors"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#00FF9D] text-[#071119] rounded-md hover:bg-[#00FF9D]/80 transition-colors">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
