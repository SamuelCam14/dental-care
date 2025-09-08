import React from "react";

const SocialLink = ({ href, icon, color, ariaLabel }) => {
  return (
    <a
      href={href}
      className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label={ariaLabel}
    >
      <svg
        className={`w-5 h-5 ${color}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={icon} />
      </svg>
    </a>
  );
};

export default SocialLink;
