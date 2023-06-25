import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-12 space-y-6">
      <p className="text-center text-amber-500">
        ------------ <i>{subTitle}</i> ------------
      </p>
      <h2 className="font-bold py-2 text-2xl text-center uppercase border-b-2 border-t-2 border-amber-500  md:w-80 text-amber-600 mx-auto my-4">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
