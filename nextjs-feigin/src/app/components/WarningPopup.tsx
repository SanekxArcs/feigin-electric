"use client";

import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Clock, Mail } from 'lucide-react';

const WarningPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState('');

  // Calculate time elapsed since November 26, 2024
  useEffect(() => {
    const startDate = new Date('2024-11-26');
    
    const updateTimer = () => {
      const now = new Date();
      const diffTime = now.getTime() - startDate.getTime();
      
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const months = Math.floor(days / 30);
      const remainingDays = days % 30;
      
      setTimeElapsed(`${months} months and ${remainingDays} days`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Warning Badge when popup is closed */}
      {!isVisible && (
        <div className="fixed top-20 right-4 z-50">
          <button
            onClick={() => setIsVisible(true)}
            className="bg-red-600 text-white p-3 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 animate-pulse"
            title="Click to view payment warning"
          >
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-bold">WARNING</span>
            </div>
          </button>
        </div>
      )}

      {/* Main Popup */}
      {isVisible && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-6 h-6" />
            <h2 className="text-xl font-bold">⚠️ WARNING!</h2>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close warning"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Timer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-yellow-600 mr-2" />
              <div>
                <p className="text-sm font-semibold text-yellow-800">Time Since Order Start Date (26.11.2024):</p>
                <p className="text-lg font-bold text-yellow-900">{timeElapsed}</p>
              </div>
            </div>
          </div>

          {/* Warning Message */}
          <div className="space-y-4 text-gray-800">
            <div className="text-center bg-gray-50 p-4 rounded-lg border">
              <h3 className="text-xl font-bold text-red-700 mb-2">UNPAID WORK NOTICE</h3>
              <p className="text-lg font-semibold text-balance text-gray-800">
                <strong>Feigin Electric Sp. z o.o.</strong>
              </p>
              <p className="text-md text-gray-600">
                <strong>Andrew Charnosh</strong>
              </p>
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-md font-semibold text-red-600 mb-3">
                This company commissioned website development services but has failed to honor payment obligations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Website delivered and operational for 2 months</strong></li>
                <li>• <strong>Outstanding payment period: {timeElapsed}</strong></li>
                <li>• <strong>Project commencement date: November 26, 2024</strong></li>
                <li>• <strong>Multiple payment reminders sent - no response</strong></li>
                <li>• History of delayed payments and poor payment practices</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-orange-800">
                ⚠️ <strong>BUSINESS WARNING:</strong> Exercise extreme caution when considering business relationships with this entity.
              </p>
              <p className="text-sm mt-2 text-orange-700">
                Based on direct experience: Unreliable payment practices, poor communication, and disregard for contractual obligations.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm">
                <strong>💡 Professional Note:</strong> Despite payment issues, you may proceed to view the high-quality work delivered - 
                demonstrating professional standards that exceed their current website quality.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm font-semibold text-gray-800 mb-3">
                📢 Want to share your thoughts? Visit their social media pages:
              </p>
              <div className="space-y-2">
                <a 
                  href="https://www.facebook.com/feiginelectricgroup" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  🔗 Facebook: @feiginelectricgroup
                </a>
                <a 
                  href="https://www.linkedin.com/company/feiginelectricpoland/posts/?feedView=all" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  🔗 LinkedIn: Feigin Electric Poland
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Feel free to leave comments about their business practices
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setIsVisible(false)}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Continue to View the Excellent Work Done
              </button>
              <button 
                onClick={() => window.open('mailto:info@feiginelectric.pl?subject=Regarding%20Unpaid%20Website%20Development&body=Hello%2C%0A%0AI%20am%20writing%20regarding%20the%20unpaid%20website%20development%20work%20that%20has%20been%20outstanding%20for%20several%20months.%20I%20noticed%20the%20warning%20on%20your%20website%20about%20this%20issue.%0A%0APlease%20resolve%20this%20payment%20matter%20promptly.%0A%0AThank%20you.')}
                className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5" />
                <span>Email Them About This Issue</span>
              </button>
            </div>
            <div className="text-center">
              
              <p className="text-xs text-gray-500 mt-2">
                Click to send them an email about this unpaid work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      )}
    </>
  );
};

export default WarningPopup;
