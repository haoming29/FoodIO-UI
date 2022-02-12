import React from "react";
import { Table } from "antd";

const OrderSummary = ({ dataSource }) => {
  const columns = [
    Table.EXPAND_COLUMN,
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 150,
    },
  ];
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      size={"small"}
      expandable={{
        expandedRowRender: (record) => (
          <img
            className="table-item-image"
            src={record.image}
            alt="placeholder"
          />
        ),
      }}
    />
  );
};

export default OrderSummary;
