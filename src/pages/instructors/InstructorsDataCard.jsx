import React from "react";

const InstructorsDataCard = ({ instructor }) => {
  const { instructorName, enrolledStudents, email, instructorImage, yogaName } =
    instructor;
  return (
    <div className="card card-compact bg-base-100 shadow-xl col-span-4">
      <figure>
        <img src={instructorImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Instructor: {instructorName}</h2>
        <p>Email: {email}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default InstructorsDataCard;
