import React, { useEffect, useCallback, useState } from "react";
import { Input } from "antd";
import PantryEntry from "../components/Home/PantryEntry";
import { useHistory } from "react-router-dom";
import { getPantries } from "../services/api";
import "./Home.css";

const Home = () => {
  const { Search } = Input;
  const history = useHistory();
  const [data, setData] = useState(undefined);

  const getdata = useCallback(async () => {
    let ds = await getPantries();
    ds = ds.map((item) => {
      item.distance = Number(Math.random() * 10 + 0.2).toFixed(2);
      item.image =
        "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg";
      item.options = ["Delivery", "Pickup"];
      item.types = ["Meat", "Grocery", "Vegitable"];
      return item;
    });
    setData(ds);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {});
    }
    if (!data) {
      getdata();
    }
  }, [data, getdata]);

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
        {data &&
          data.map((item, index) => (
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
