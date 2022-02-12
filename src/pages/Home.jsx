import React from "react";
import { Input } from "antd";
import "./Home.css";
import PantryEntry from "../components/Home/PantryEntry";
import { useHistory } from "react-router-dom";

const Home = () => {
  const { Search } = Input;
  const history = useHistory();
  const onSearch = () => {};

  const handleEntryClick = (id) => {
    history.push(`/pantry/${id}`);
  };

  const pantryMock = [
    {
      id: "1",
      name: "Sunny side pantry",
      image:
        "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg",
      address: "124 N. Park St.",
      distance: "0.8",
      status: "Open",
      options: ["Delivery", "Pickup"],
      types: ["Meat", "Grocery", "Vegitable"],
    },
    {
      id: "2",
      name: "Sunny side pantry",
      image:
        "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg",
      address: "124 N. Park St.",
      distance: "0.8",
      status: "Open",
      options: ["Delivery", "Pickup"],
      types: ["Meat", "Grocery", "Vegitable"],
    },
    {
      id: "3",
      name: "Sunny side pantry",
      image:
        "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg",
      address: "124 N. Park St.",
      distance: "0.8",
      status: "Open",
      options: ["Delivery", "Pickup"],
      types: ["Meat", "Grocery", "Vegitable"],
    },
    {
      id: "4",
      name: "Sunny side pantry",
      image:
        "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg",
      address: "124 N. Park St.",
      distance: "0.8",
      status: "Open",
      options: ["Delivery", "Pickup"],
      types: ["Meat", "Grocery", "Vegitable"],
    },
    {
      id: "5",
      name: "Sunny side pantry",
      image:
        "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg",
      address: "124 N. Park St.",
      distance: "0.8",
      status: "Open",
      options: ["Delivery", "Pickup"],
      types: ["Meat", "Grocery", "Vegitable"],
    },
  ];

  return (
    <div className="page-container page--home">
      <div className="home-intro">
        <div className="home-headline">Find the food pantry near you.</div>
      </div>
      <div className="home-search">
        <Search
          placeholder="start with the name of the pantry"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <div className="home-pantry-list">
        {pantryMock.map((item, index) => (
          <PantryEntry
            key={index}
            id={item.id}
            name={item.name}
            address={item.address}
            distance={item.distance}
            status={item.status}
            options={item.options}
            types={item.types}
            image={item.image}
            onclick={handleEntryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
