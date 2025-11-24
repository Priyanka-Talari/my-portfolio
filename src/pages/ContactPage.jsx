import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! 🐟 (This is a demo)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full animate-fadeIn">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
          Let's Connect
        </h2>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-4">
          Send your message through the clouds ☁️
        </p>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 sm:space-y-6 border-2 border-gray-100">
          <div>
            <label className="block text-gray-700 mb-2 font-semibold text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl text-gray-800 focus:border-amber-400 focus:outline-none focus:bg-white transition-all text-sm sm:text-base"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl text-gray-800 focus:border-amber-400 focus:outline-none focus:bg-white transition-all text-sm sm:text-base"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-semibold text-sm sm:text-base">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="5"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-2 border-gray-200 rounded-lg sm:rounded-xl text-gray-800 focus:border-amber-400 focus:outline-none focus:bg-white transition-all resize-none text-sm sm:text-base"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 sm:py-4 bg-amber-400 text-white rounded-full font-bold text-base sm:text-lg hover:bg-amber-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Send Message 🐟
          </button>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-6">
          <div className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
            <Mail className="mx-auto mb-2 text-amber-500" size={24} />
            <p className="text-gray-600 mb-1 font-medium text-xs sm:text-sm">Email</p>
            <p className="text-gray-800 font-semibold text-xs sm:text-base break-all">priyankatalari16@gmail.com</p>
          </div>
          <div className="text-center bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
            <svg viewBox="0 0 60 40" className="w-10 h-7 sm:w-12 sm:h-8 mx-auto mb-2">
              <ellipse cx="30" cy="20" rx="20" ry="12" fill="#F4D03F"/>
              <circle cx="35" cy="16" r="3" fill="#7DBADB"/>
              <path d="M 10 20 L 0 12 L 5 20 L 0 28 Z" fill="#F4D03F"/>
            </svg>
            <p className="text-gray-600 mb-1 font-medium text-xs sm:text-sm">Location</p>
            <p className="text-gray-800 font-semibold text-xs sm:text-base"> Mumbai☁️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;