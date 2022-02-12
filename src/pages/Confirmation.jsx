import React from "react";
import { Result, Button } from "antd";
import { useHistory, useParams } from "react-router-dom";

const Confirmation = () => {
  const { orderID } = useParams();
  const history = useHistory();

  return (
    <Result
      status="success"
      title="Successfully Submitted Your Food Order!"
      subTitle={`Order number: ${orderID}`}
      extra={[
        <p>We are looking forward seeing you soon.</p>,
        <Button type="primary" key="console" onClick={() => history.push("/")}>
          Go Home Page
        </Button>,
      ]}
    />
  );
};

export default Confirmation;
