import React from 'react';

const Bio = () => {
  const socialLinks = [
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername',
      label: 'Twitter'
    },
    {
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/yourusername',
      label: 'Instagram'
    },
    {
      icon: 'fas fa-envelope',
      url: 'mailto:your.email@example.com',
      label: 'Email'
    },
    {
      icon: 'fas fa-globe',
      url: 'https://yourwebsite.com',
      label: 'Website'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Profile Section */}
        <div className="text-center mb-12 animate-fade-in">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-800 rounded-full mx-auto overflow-hidden border-4 border-bio-red shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <i className="fas fa-user text-4xl md:text-5xl text-white opacity-60"></i>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Your Name
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-6">
            Your Professional Title
          </h2>
          
          {/* Bio Description */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
            A passionate professional dedicated to creating amazing experiences. 
            I love connecting with people and sharing ideas that make a difference.
          </p>

          {/* Call to Action */}
          <div className="inline-flex items-center gap-2 bg-bio-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer mb-12">
            <i className="fas fa-coffee"></i>
            <span>Let's Connect</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <h3 className="text-center text-gray-400 font-semibold mb-8 text-lg">
            Find me on
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-md mx-auto">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 rounded-lg bg-gray-900 hover:bg-bio-red transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                aria-label={link.label}
              >
                <i className={`${link.icon} text-2xl text-gray-400 group-hover:text-white transition-colors duration-300 mb-2`}></i>
                <span className="text-xs text-gray-500 group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Made with <i className="fas fa-heart text-bio-red"></i> and passion
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
