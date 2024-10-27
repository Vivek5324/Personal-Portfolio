import React from 'react';
import { Code2, Palette, Camera, Languages } from 'lucide-react';

const skills = [
  { name: 'C', level: 95 },
  { name: 'Python', level: 85 },
  { name: 'Data Visualization', level: 90 },
  { name: 'English', level: 95 }
];

export default function About() {
  return (
    <div id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-6">
              I am Vivek, a B.Tech CSE Student Specializing in Cyber Security at ADYPU Pune. As an aspiring Cybersecurity professional, I'm deeply passionate about Ethical Hacking and Cyber Defense. My journey in the tech world extends beyond security, as I've engaged in various projects including malware detection AI and video editing for a gaming channel. I combine my technical expertise with creative skills to deliver comprehensive solutions in both cybersecurity and digital content creation.
            </p>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div>
                <h3 className="font-semibold mb-2">Profile</h3>
                <p>B.Tech & Computer Science Engineering</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Domain</h3>
                <p>Video Editing BFSI & Digital Marketing</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <p>English, Hindi, Marathi, Kannada</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Interests</h3>
                <p>Traveling, Photography, Gaming</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}