import React from "react";
import { CarOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./PantryInfo.css";

const PantryInfo = (props) => {
  const { image, name, address, phone, email, options, description, hours } =
    props;

  const dayOfWeek = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
    7: "Sun",
  };

  const iconMap = {
    Delivery: <CarOutlined />,
    Pickup: <ShoppingOutlined />,
  };
  return (
    <div className="info-container">
      <div className="info-image-container">
        <img className="info-image" src={image} alt={name}></img>
      </div>
      <div className="info-texts">
        <div className="info-name">{name}</div>
        <div className="info-detail">
          <div className="info-detail-info">
            <div className="info-address">{address}</div>
            <div className="info-phone">
              <span>Phone:</span>
              <span>{phone}</span>
            </div>
            <div className="info-email">
              <span>Email:</span>
              <span>{email}</span>
            </div>
            <div className="info-option-icon-group">
              {options.map((item, index) => (
                <span key={index}>{iconMap[item]}</span>
              ))}
            </div>
            <div className="info-option-description">{description}</div>
          </div>
          <div className="info-hours">
            {hours.map((item, index) => (
              <div key={index} className="info-hour-entry">
                {dayOfWeek[item.day]}. {item.start}-{item.end}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantryInfo;
