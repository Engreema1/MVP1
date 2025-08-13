'use client';

import React, { useState } from "react";
import { doctors } from "../../doctors";
import { useRouter } from 'next/navigation';

export default function DoctorsPage() {
  const [activeTab, setActiveTab] = useState("description");
  const router = useRouter();

  const handleDoctorClick = (id) => {
    router.push(`/doctors/${id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-3xl mx-auto p-4">
        {/* Promo Banner */}
        <section className="mb-8">
          <div className="rounded-xl bg-gradient-to-r from-blue-50 to-white p-4 flex items-center justify-between shadow-sm">
            <div>
              <div className="text-xl font-semibold text-blue-700">20% OFF</div>
              <div className="text-sm text-blue-600">
                First Visit, Use Code: <span className="font-bold">MEDIX</span>
              </div>
            </div>
            <img
              src="/images/brain.jpg"
              alt="Promotion"
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
          </div>
        </section>

        {/* Doctors List */}
        <section>
          <h3 className="text-lg font-semibold mb-4">Recommended Doctors</h3>
          <div className="space-y-6">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg p-6 space-y-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleDoctorClick(doctor.id)}
              >
                {/* Doctor Header */}
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img
                      src={`/images/doctors/${doctor.id}.jpg`}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div className="absolute -top-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="text-green-600 text-xs font-semibold mb-1">Available Today</div>
                    <h2 className="text-lg font-bold">{doctor.name}</h2>
                    <p className="text-sm text-gray-700 italic">
                      {doctor.degree} – {doctor.speciality}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-6 mt-2 text-gray-600 text-sm font-medium">
                      <div className="flex items-center gap-1">
                        <span className="text-green-600">👍</span>
                        {doctor.ratingPercent}%
                      </div>
                      <div className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
                        </svg>
                        {doctor.reviewsCount} Reviews
                      </div>
                    </div>

                    {/* Doctor Details */}
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                      <div>
                        <div className="font-semibold flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Location:
                        </div>
                        <div>{doctor.clinic}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Distance:</div>
                        <div>{doctor.distance}</div>
                      </div>
                      <div>
                        <div className="font-semibold flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          Experience:
                        </div>
                        <div>{doctor.experience}</div>
                      </div>
                      <div>
                        <div className="font-semibold flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                          </svg>
                          Language:
                        </div>
                        <div>{doctor.language}</div>
                      </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="mt-6 border-b border-gray-200">
                      <nav className="flex space-x-8">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("description");
                          }}
                          className={`py-2 px-1 font-medium text-sm ${
                            activeTab === "description"
                              ? "text-blue-600 border-b-2 border-blue-600"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          Description
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("gallery");
                          }}
                          className={`py-2 px-1 font-medium text-sm ${
                            activeTab === "gallery"
                              ? "text-blue-600 border-b-2 border-blue-600"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          Gallery
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("reviews");
                          }}
                          className={`py-2 px-1 font-medium text-sm ${
                            activeTab === "reviews"
                              ? "text-blue-600 border-b-2 border-blue-600"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          Reviews
                        </button>
                      </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="mt-4">
                      {activeTab === "description" && (
                        <div className="text-gray-700 text-sm">
                          <p>{doctor.description}</p>
                        </div>
                      )}

                      {activeTab === "gallery" && (
                        <div className="grid grid-cols-3 gap-2">
                          {doctor.gallery.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`Gallery ${index + 1}`}
                              className="rounded-lg object-cover h-24 w-full"
                              onClick={(e) => e.stopPropagation()}
                            />
                          ))}
                        </div>
                      )}

                      {activeTab === "reviews" && (
                        <div className="space-y-4">
                          {doctor.reviews.map((review, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold">{review.name}</span>
                                <span className="text-yellow-500">
                                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm">{review.comment}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex gap-4">
                      <button
                        className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Book appointment
                      </button>
                      <button
                        className="flex-1 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Consultation. {doctor.consultationFee} SAR
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}