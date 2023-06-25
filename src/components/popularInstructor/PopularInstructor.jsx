import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    // Fetch data from gallery collection
    fetchInstructorsData().then((result) => {
      setInstructors(result);
    });
  }, []);

  // Function to fetch data from collection
  const fetchInstructorsData = async () => {
    const response = await fetch("http://localhost:5000/instructors");
    const instructors = await response.json();
    console.log("Popular Instructors:", instructors);
    return instructors;
  };

  return (
    <div>
      <SectionTitle
        subTitle={"Here are our expert"}
        title={"Popular Instructors"}
      />
      <div className="grid md:grid-cols-12 justify-between gap-4">
        {instructors.map((instructor) => (
          <PopularInstructorsCard
            key={instructor._id}
            instructor={instructor}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
