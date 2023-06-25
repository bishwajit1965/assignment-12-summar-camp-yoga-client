import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [yogaClass, setYogaClass] = useState([]);
  useEffect(() => {
    // Fetch data from gallery collection
    fetchYogaClassData().then((result) => {
      setYogaClass(result);
    });
  }, []);

  // Function to fetch data from collection
  const fetchYogaClassData = async () => {
    const response = await fetch("http://localhost:5000/classes");
    const yogaClass = await response.json();
    console.log(yogaClass);
    return yogaClass;
  };
  return (
    <div>
      <SectionTitle
        subTitle={"Pay attention to our"}
        title={"Popular Classes"}
      />
      <div className="grid md:grid-cols-12 justify-between gap-4">
        {yogaClass.map((yoga) => (
          <PopularClassesCard key={yoga._id} yoga={yoga} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
