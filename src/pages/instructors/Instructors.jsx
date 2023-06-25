import React, { useEffect, useState } from "react";
import InstructorsDataCard from "./InstructorsDataCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    // Fetch data from gallery collection
    fetchAllInstructorsData().then((result) => {
      setInstructors(result);
    });
  }, []);

  // Function to fetch data from collection
  const fetchAllInstructorsData = async () => {
    const response = await fetch("http://localhost:5000/instructors-all");
    const instructors = await response.json();
    console.log("Popular Instructors:", instructors);
    return instructors;
  };
  return (
    <div className="">
      <SectionTitle
        subTitle={"Our invaluable assets"}
        title={"All Instructors"}
      />
      <div className="grid md:grid-cols-12 justify-between gap-4">
        {instructors.map((instructor) => (
          <InstructorsDataCard key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
