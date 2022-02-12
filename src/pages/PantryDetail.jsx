import { useState, useCallback, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, message, Modal } from "antd";
import Mock from "mockjs";
import { ShoppingCartOutlined } from "@ant-design/icons";
import InventoryTable from "../components/PantryDetail/InventoryTable";
import PantryInfo from "../components/PantryDetail/PantryInfo";
import { ORDER_SESSION_NAME } from "../config";
import "./PantryDetail.css";
import { getPantryDetail } from "../services/api";

const PantryDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [selected, setSelected] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(undefined);

  const getData = useCallback(async () => {
    const data = await getPantryDetail(id);
    data.phone = "608-949-2699";
    data.email = "hmeng29@wisc.edu";
    data.image =
      "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg";
    data.options = ["Delivery", "Pickup"];
    data.types = ["Meat", "Grocery", "Vegitable"];
    data.hours = [
      { day: 1, start: 9, end: 18 },
      { day: 2, start: 9, end: 18 },
      { day: 3, start: 9, end: 18 },
      { day: 4, start: 10, end: 19 },
      { day: 5, start: 10, end: 20 },
      { day: 6, start: 11, end: 15 },
      { day: 7, start: 11, end: 15 },
    ];
    setData(data);
  }, [id]);

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, [data, getData]);

  const dataSource = Mock.mock({
    "data|30": [
      {
        "key|+1": 1,
        "name|1": [
          "Apples",
          "Bananas",
          "Strawberries",
          "Avocados",
          "Bell Peppers",
          "Carrots",
          "Garlic",
          "Lemons/Limes",
          "Onion",
          "Parsley",
          "Cilantro",
          "Basil",
          "Potatoes",
          "Spinach",
          "Tomatoes",
          "Breadcrumbs",
          "Pasta",
          "Quinoa",
          "Rice",
          "Wheat Bread",
          "Flour Tortillas",
          "Chicken",
          "Eggs",
          "Ground Beef/Turkey",
          "Lunch Meat",
          "Baking powder",
          "Baking Soda",
          "Sugar",
          "Brown Sugar",
          "Flour",
          "Honey",
          "Vanilla",
          "Dry Yeast",
          "Chocolate Chips",
          "Cocoa Powder",
          "Powdered Sugar",
        ],
        image: "https://picsum.photos/200/300",
        "amount|0-100": 100,
        "category|1": ["Fruit", "Meat", "Vegetable", "Misc"],
      },
    ],
  });

  // const data = {
  //   name: "Sunny side pantry",
  //   image:
  //     "https://cdn.vox-cdn.com/thumbor/r2Hr6L8wILmP5xEDaRLxQQ7lbo0=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65895442/batwing.7.jpg",
  //   address: "124 N. Park St.",
  //   stauts: "Open",
  //   options: ["Delivery", "Pickup"],
  //   phone: "608-949-2699",
  //   email: "hmeng29@wisc.edu",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius vel ut id at. Dolor nec quis habitasse fringilla at scelerisque integer risus consequat. Neque eros nulla quisque mi scelerisque feugiat bibendum netus ullamcorper. Ut lectus dolor sapien phasellus amet tincidunt viverra. Ac diam faucibus vitae nisi, etiam. Nullam egestas dolor quisque leo iaculis.",
  //   hours: [
  //     { day: 1, start: 9, end: 18 },
  //     { day: 2, start: 9, end: 18 },
  //     { day: 3, start: 9, end: 18 },
  //     { day: 4, start: 10, end: 19 },
  //     { day: 5, start: 10, end: 20 },
  //     { day: 6, start: 11, end: 15 },
  //     { day: 7, start: 11, end: 15 },
  //   ],
  // };

  const handleOk = () => {
    setIsModalVisible(false);
    const order = {
      pantryID: id,
      items: selected,
    };
    window.sessionStorage.setItem(ORDER_SESSION_NAME, JSON.stringify(order));
    history.push("/checkout");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCheckoutOld = () => {
    setIsModalVisible(false);
    history.push("/checkout");
  };

  const handleSelect = (selectedIDs) => {
    setSelected(selectedIDs);
  };

  const handleSubmit = () => {
    const order = {
      pantryID: id,
      items: selected,
    };

    if (!selected || selected.length <= 0) {
      message.warning("You need to select at least one item before preceeding");
    } else {
      const oldOrder = sessionStorage.getItem(ORDER_SESSION_NAME);
      if (oldOrder) {
        setIsModalVisible(true);
      } else {
        window.sessionStorage.setItem(
          ORDER_SESSION_NAME,
          JSON.stringify(order)
        );
        history.push("/checkout");
      }
    }
  };

  return (
    <div className="page-container">
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Continue"}
        footer={
          <>
            <Button onClick={handleCheckoutOld}>
              Check out with old order
            </Button>{" "}
            <Button onClick={handleOk} type="primary">
              Continue
            </Button>
          </>
        }
      >
        <p>
          You have order already in place, do you want to remove them before
          adding this new order?
        </p>
      </Modal>
      {data && (
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
      )}
      {data && (
        <InventoryTable dataSource={dataSource} handleSelect={handleSelect} />
      )}
      <div className="pantry-order-btn">
        <Button
          type="primary"
          size="large"
          icon={<ShoppingCartOutlined />}
          onClick={() => handleSubmit()}
        >
          Check out
        </Button>
      </div>
    </div>
  );
};

export default PantryDetail;
