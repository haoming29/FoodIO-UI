import React from "react";
import "./PantryEntry.css";

const PantryEntry = (props) => {
  const {
    id,
    name,
    image,
    address,
    distance,
    status,
    options,
    types,
    onclick,
  } = props;
  return (
    <div className="pantry-entry-container" onClick={() => onclick(id)}>
      <div className="pantry-entry-image-container">
        <img className="pantry-entry-image" src={image} alt={name}></img>
      </div>
      <div className="pantry-entry-texts">
        <div className="pantry-entry-name">{name}</div>
        {/* <div className='pantry-entry-status'></div> */}
        <div className="pantry-entry-address">
          <div className="pantry-entry-address-text">{address}</div>
          <div className="pantry-entry-address-distance">{`${distance} mi`}</div>
        </div>
        <div className="pantry-entry-order">
          <div className="pantry-entry-order-options">
            {options.map((item, index) => (
              <span key={index}>{`${item} `}</span>
            ))}
          </div>
          <div className="pantry-entry-order-food-types">
            {types.map((item, index) => (
              <span key={index}>{`${item} `}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantryEntry;
