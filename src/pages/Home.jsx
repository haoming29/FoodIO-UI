import React, { useEffect, useCallback, useState } from "react";
import { Input } from "antd";
import PantryEntry from "../components/Home/PantryEntry";
import { useHistory, useLocation } from "react-router-dom";
import { getPantries, postSearchPantry } from "../services/api";
import "./Home.css";

const Home = () => {
  const { Search } = Input;
  const history = useHistory();
  const location = useLocation();
  const [data, setData] = useState(undefined);
  const [search, setSearch] = useState(undefined);

  const postSearch = useCallback(async () => {
    let result = undefined;
    if (search) {
      result = await postSearchPantry(search);
    } else {
      result = await getPantries();
    }
    result = result.map((item) => {
      item.distance = Number(Math.random() * 10 + 0.2).toFixed(2);
      item.image =
        "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg";
      item.options = ["Delivery", "Pickup"];
      item.types = ["Meat", "Grocery", "Vegitable"];
      return item;
    });
    setData(result);
  }, [search]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {});
    }
    const params = location.search.substring(1);
    const q = params.split("&")[0].split("=")[1];
    setSearch(q);
    postSearch();
  }, [location, postSearch]);

  const onSearch = (e) => {
    setSearch(e.target.value);
    history.push(`/?q=${search}`);
  };

  const handleEntryClick = (id) => {
    history.push(`/pantry/${id}`);
  };

  return (
    <div className="page-container page--home">
      <div className="home-intro">
        <div className="home-headline">Find the food pantry near you.</div>
      </div>
      <div className="home-search">
        <Search
          placeholder="Start with the name of the pantry"
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
