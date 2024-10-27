import React, { useEffect, useState } from 'react';
import { Github, Youtube } from 'lucide-react';

const roles = ['Cybersecurity Specialist', 'Ethical Hacker', 'Software Engineer', 'Student'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const updateText = () => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
      }
    };

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === role) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      } else {
        updateText();
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h2 className="text-2xl text-purple-400 mb-4">Hello!</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Vivek Rathod</span>
        </h1>
        <div className="text-3xl md:text-4xl font-bold min-h-[60px]">
          I'm a {displayText}
          <span className="animate-pulse">|</span>
        </div>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl">
          A dedicated Cybersecurity Student specializing in network security, penetration testing, and cyber defense strategies. Passionate about securing digital infrastructures and protecting against emerging threats.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://www.youtube.com/@Vivek-qw9sm"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            <Youtube className="h-5 w-5" />
            YouTube
          </a>
          <a
            href="https://github.com/Vivek5324"
            className="flex items-center gap-2 px-6 py-3 border border-purple-400 rounded-lg hover:bg-purple-900/50 transition"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}