import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    period: 'Aug 2024-Present',
    title: 'Management Lead',
    company: 'Cyber Alchemists - SOE - Ajeenkya DY Patil University',
    description: 'Leading management initiatives and coordinating cybersecurity projects within the School of Engineering.'
  },
  {
    period: 'Jun 2024-Jul 2024',
    title: 'Lead Generation Executive',
    company: 'LeadNexus',
    description: 'Specialized in B2B marketing and communication, focusing on lead generation and customer acquisition through strategic outreach.'
  },
  {
    period: 'Jun 2023-Jun 2024',
    title: 'Youth Ambassador',
    company: 'Viral Fission',
    description: 'Leveraged social media platforms to promote business and expand viewer base for advertising campaigns. Developed strategic content and engaged with youth audiences.'
  },
  {
    period: 'Sep 2021-Mar 2022',
    title: 'Video Editor & Social Media Manager',
    company: 'Arkade YT',
    description: 'Created engaging video content using Adobe Creative Suite, managed social media presence, and implemented content optimization strategies that drove channel growth.'
  }
];

const education = [
  {
    period: '2022-2026',
    degree: 'Bachelor of Technology',
    institution: 'Ajeenkya D Y Patil University',
    grade: 'Currently Pursuing'
  },
  {
    period: '2020-2022',
    degree: 'Higher Secondary School',
    institution: 'Chate jr. College of Science',
    grade: 'First class'
  }
];

export default function Resume() {
  return (
    <div id="resume" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="h-6 w-6 text-purple-400" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.title} className="relative pl-6 border-l-2 border-purple-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-400" />
                  <span className="text-sm text-purple-400">{exp.period}</span>
                  <h4 className="text-xl font-semibold mt-1">{exp.title}</h4>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-purple-400" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-6 border-l-2 border-purple-400">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-400" />
                  <span className="text-sm text-purple-400">{edu.period}</span>
                  <h4 className="text-xl font-semibold mt-1">{edu.degree}</h4>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="mt-2 text-gray-300">{edu.grade}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/file/d/11XZGdY0cpg6RzIOMz_WBDJQoRNfRIimt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}