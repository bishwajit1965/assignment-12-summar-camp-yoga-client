import React from "react";

const GalleryCard = ({ galleryImage }) => {
  const { name, image, description } = galleryImage;
  return (
    <div className="card card-compact bg-base-100 shadow-xl col-span-4">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-xs">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
