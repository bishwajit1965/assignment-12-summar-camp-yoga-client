import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    // Fetch data from gallery collection
    fetchGalleryData().then((result) => {
      setGallery(result);
    });
  }, []);

  // Function to fetch data from collection
  const fetchGalleryData = async () => {
    const response = await fetch("http://localhost:5000/gallery");
    const gallery = await response.json();
    console.log(gallery);
    return gallery;
  };
  return (
    <div>
      <SectionTitle
        subTitle={"Beautiful & memorable"}
        title={"Gallery Images"}
      />
      <div className="grid md:grid-cols-12 justify-between gap-4 my-10">
        {gallery.map((galleryImage) => (
          <GalleryCard key={galleryImage._id} galleryImage={galleryImage} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
