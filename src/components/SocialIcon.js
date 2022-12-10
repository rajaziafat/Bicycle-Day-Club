import React from "react";

function SocialIcon(props) {
  const { Icon, link = "/" } = props;
  return (
    <a
      {...props}
      className="w-10 h-10 rounded-full flex items-center justify-center text-white relative overflow-hidden group bg-light-gray z-10"
    >
      <div className="bg-green-to-blue absolute top-0 left-0 w-full h-full transition-all duration-[.3s] opacity-0 group-hover:opacity-100 -z-10"></div>
      {Icon ? <Icon /> : null}
    </a>
  );
}

export default SocialIcon;
