
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { specialties, subspecialties, doctors } from '../app/doctors';

export default function HomePage() {
  const [activeSub, setActiveSub] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = searchQuery === '' || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      doctor.speciality.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubspecialty = activeSub === 'All' || 
      doctor.tags?.includes(activeSub);
    
    return matchesSearch && matchesSubspecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">MEDIX</Link>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search doctors..."
                  className="border rounded-full py-1 pl-10 pr-4 text-sm w-40 md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Specialties Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Specialties</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {specialties.map((specialty) => (
              <div 
                key={specialty.id} 
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <Image
                    src={specialty.icon}
                    alt={specialty.label}
                    width={80}
                    height={80}
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-center">{specialty.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3">
            {['All', ...subspecialties].map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSub(sub)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  activeSub === sub 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </section>

        {/* Doctors Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredDoctors.length > 0 ? 'Recommended Doctors' : 'Featured Doctors'}
            </h2>
            <span className="text-gray-500">
              {filteredDoctors.length} {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} available
            </span>
          </div>

          {filteredDoctors.length === 0 && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg text-blue-800 flex items-center">
              <svg 
                className="w-5 h-5 mr-2 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              No doctors match your search. Showing featured doctors instead.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(filteredDoctors.length > 0 ? filteredDoctors : doctors.slice(0, 3)).map((doctor) => (
              <Link 
                href={`/doctor/${doctor.id}`}
                key={doctor.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="p-5">
                  <div className="flex items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
                        <Image
                          src={`/images/doctors/${doctor.id}.jpg`}
                          alt={doctor.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-5 h-5 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{doctor.name}</h3>
                      <p className="text-blue-600 text-sm">{doctor.speciality}</p>
                      <p className="text-gray-500 text-sm mt-1">{doctor.clinic}</p>
                      
                      <div className="flex items-center mt-2 space-x-4">
                        <div className="flex items-center text-sm">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span>{doctor.ratingPercent}% ({doctor.reviewsCount})</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg 
                            className="w-4 h-4 mr-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {doctor.distance}
                        </div>
                      </div>

                      {doctor.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {doctor.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              {tag}
                                                  </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}