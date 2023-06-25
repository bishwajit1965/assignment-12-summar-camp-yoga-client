import React from "react";

const PopularInstructorsCard = ({ instructor }) => {
  const { instructorName, enrolledStudents, instructorImage, yogaName } =
    instructor;
  return (
    <div className="card card-compact bg-base-100 shadow-xl col-span-4">
      <figure>
        <img src={instructorImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Yoga name: {yogaName}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Enrolled students: {enrolledStudents}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-xs">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorsCard;
