import { useEffect, useState } from "react";
import Mock from "mockjs";
import { Form, Input, TimePicker, Button } from "antd";
import moment from "moment";
import "./Checkout.css";
import { ORDER_SESSION_NAME } from "../config";
import { useHistory } from "react-router-dom";
import OrderSummary from "../components/Checkout/OrderSummary";
import "./Checkout.css";

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Checkout = () => {
  const history = useHistory();
  const [form] = Form.useForm();

  const [orderInfo, setOrderInfo] = useState(undefined);
  const [pantryName, setPantryName] = useState(undefined);
  const [formData, setFormData] = useState(undefined);
  const [progress, setProgress] = useState(0);

  const data = Mock.mock({
    pantryID: "2",
    pantryName: "Sunnyside Pantry",
    "order|30": [
      {
        "key|+1": 1,
        name: "@string(5)",
        image: "https://picsum.photos/200/300",
        "category|1": ["Fruit", "Meat", "Vegetable", "Misc"],
      },
    ],
  });

  useEffect(() => {
    const order = window.sessionStorage.getItem(ORDER_SESSION_NAME);
    if (!order) {
      history.push("/404");
    } else {
      const orderToJSON = JSON.parse(order);
      setOrderInfo(orderToJSON.items);
      // setPantryName(orderToJSON.)
    }
  }, [history]);

  const onFinish = (values) => {
    console.log(values);
  };

  const handleContinue = () => {
    if (progress < 1) {
      setProgress(progress + 1);
    } else {
      console.log("submit!");
      window.sessionStorage.removeItem(ORDER_SESSION_NAME);
      history.push(`/confirm/${"someid"}`);
    }
  };

  const handleSave = () => {
    form.validateFields().then(
      () => {
        const formValues = form.getFieldsValue();
        setFormData(formValues);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="page-container page--checkout">
      <div className="checkout-heading">Checkout</div>
      <div className="checkout-subheading">
        Your order at:{" "}
        <span className="checkout-pantry-name">{data.pantryName}</span>
      </div>
      {orderInfo && (
        <OrderSummary className="checkout-summary" dataSource={data.order} />
      )}

      {progress >= 1 && (
        <>
          <div className="checkout-subheading">Contact Information</div>
          <div className="checkout-form-container">
            <Form
              {...layout}
              name="checkout-form"
              form={form}
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "pickupName"]}
                label="Pickup Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "pickupPhone"]}
                label="Pickup Phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "contactName"]}
                label="Contact Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "contactPhone"]}
                label="Contact Phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "eta"]} label="ETA">
                <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type={"primary"} onClick={() => handleSave()}>
                  Save
                </Button>
              </Form.Item>
            </Form>
          </div>
        </>
      )}
      <div className="checkout-continue">
        <Button type="primary" size={"middle"} onClick={() => handleContinue()}>
          {progress < 1 ? "Continue" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
