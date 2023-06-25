import React from "react";

const PopularClassesCard = ({ yoga }) => {
  const { yogaName, enrolledStudents, yogaImage } = yoga;
  return (
    <div className="card card-compact bg-base-100 shadow-xl col-span-4">
      <figure>
        <img src={yogaImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Yoga name: {yogaName}</h2>
        <p>Number of students: {enrolledStudents}</p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
