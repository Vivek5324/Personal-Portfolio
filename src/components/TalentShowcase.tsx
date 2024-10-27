import React from 'react';
import { Star, MapPin, Award } from 'lucide-react';

const freelancers = [
  {
    name: 'Priya Sharma',
    title: 'UI/UX Designer',
    rating: 4.9,
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    verified: true,
  },
  {
    name: 'Rahul Verma',
    title: 'Full Stack Developer',
    rating: 4.8,
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
    verified: true,
  },
  {
    name: 'Ananya Patel',
    title: 'Digital Marketer',
    rating: 4.9,
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    verified: true,
  },
];

export default function TalentShowcase() {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Talent
          </h2>
          <p className="text-lg text-gray-600">
            Work with the best freelancers in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-purple-100"
            >
              <div className="aspect-w-16 aspect-h-9 bg-purple-100">
                <img
                  src={freelancer.image}
                  alt={freelancer.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {freelancer.name}
                    {freelancer.verified && (
                      <Award className="inline-block ml-2 h-5 w-5 text-yellow-500" />
                    )}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 font-medium">{freelancer.rating}</span>
                  </div>
                </div>
                <p className="text-purple-700 font-medium mb-4">
                  {freelancer.title}
                </p>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {freelancer.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}