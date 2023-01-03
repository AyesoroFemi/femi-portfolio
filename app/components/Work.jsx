import React from "react";

function Work({ year, company, role, profile, children }) {
  return (
    <div className="grid grid-cols-3 pt-24 border-b-[1px] border-gray-100 pb-8">
      <div>
        <p>{year}</p>
        <h5 className="text-xl text-[#F9C221]">{company}</h5>
      </div>
      <div>
        <p>{role}</p>
        <p>{profile}</p>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Work;
