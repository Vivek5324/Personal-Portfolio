import React from 'react';
import { Code2, Palette, Camera, Edit3, Music4, Megaphone } from 'lucide-react';

const categories = [
  { icon: Code2, name: 'Development', count: '2,845+' },
  { icon: Palette, name: 'Design', count: '1,934+' },
  { icon: Camera, name: 'Photography', count: '1,123+' },
  { icon: Edit3, name: 'Writing', count: '3,442+' },
  { icon: Music4, name: 'Music', count: '942+' },
  { icon: Megaphone, name: 'Marketing', count: '1,726+' },
];

export default function Features() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Professional Services
          </h2>
          <p className="text-lg text-gray-600">
            Find expert freelancers across various categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-lg transition duration-300 cursor-pointer border border-purple-100 hover:border-purple-300"
            >
              <category.icon className="h-12 w-12 text-purple-700 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <span className="text-sm text-purple-600 font-medium">
                {category.count} gigs
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}