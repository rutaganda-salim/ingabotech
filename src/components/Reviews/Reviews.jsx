import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'K.Salomon',
    role: 'Finance Manager at Got It LTD',
    review:
      'IngaboTech made a big difference for our business. They created an effective digital marketing plan, set up our social media, and got us on Google My Business. Their advice was clear, and we saw more website visits and customer contacts. Highly recommend them!',
  },
  {
    id: 2,
    name: 'Jolie M',
    role: 'Founder and CEO of Qahwa House',
    review:
      'Twice, we’ve relied on IngaboTech for professional Starlink configuration and installation, and they exceeded expectations both times. Their team was prompt, knowledgeable, and ensured a smooth setup. We experienced reliable connectivity right away. Highly recommend!',
  },
];

const ReviewsSection = () => {
  return (
    <section id='reviews' className="bg-[#071119] text-white py-16 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">What do our customers say?</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Hear from some of our satisfied clients who have experienced exceptional service and results with us.
        </p>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white text-gray-700 p-6 rounded-lg max-w-lg text-center shadow-lg"
          >
            {/* Stylized Quotation Marks */}
            <p className="text-5xl text-blue-300 mb-4">“</p>

            {/* Review Text */}
            <p className="text-lg mb-4">{review.review}</p>

            {/* Reviewer Name and Role */}
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <p className="text-gray-500">{review.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
