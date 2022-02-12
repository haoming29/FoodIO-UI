import React from "react";
import { useParams } from "react-router-dom";
import PantryInfo from "../components/PantryDetail/PantryInfo";

const PantryDetail = () => {
  const { id } = useParams();
  const data = {
    name: "Sunny side pantry",
    image:
      "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg",
    address: "124 N. Park St.",
    stauts: "Open",
    options: ["Delivery", "Pickup"],
    phone: "608-949-2699",
    email: "hmeng29@wisc.edu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius vel ut id at. Dolor nec quis habitasse fringilla at scelerisque integer risus consequat. Neque eros nulla quisque mi scelerisque feugiat bibendum netus ullamcorper. Ut lectus dolor sapien phasellus amet tincidunt viverra. Ac diam faucibus vitae nisi, etiam. Nullam egestas dolor quisque leo iaculis.",
    hours: [
      { day: 1, start: 9, end: 18 },
      { day: 2, start: 9, end: 18 },
      { day: 3, start: 9, end: 18 },
      { day: 4, start: 10, end: 19 },
      { day: 5, start: 10, end: 20 },
      { day: 6, start: 11, end: 15 },
      { day: 7, start: 11, end: 15 },
    ],
  };
  return (
    <div className="page-container">
      <PantryInfo
        image={data.image}
        name={data.name}
        phone={data.phone}
        email={data.phone}
        options={data.options}
        hours={data.hours}
        address={data.address}
        description={data.description}
        stauts={data.stauts}
      />
    </div>
  );
};

export default PantryDetail;
