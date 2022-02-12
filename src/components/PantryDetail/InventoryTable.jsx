import React from "react";
import { Table } from "antd";

import "./InventoryTable.css";

const InventoryTable = (props) => {
  const { dataSource, handleSelect } = props;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 150,
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 80,
      sorter: (a, b) => a.amount - b.amount,
    },
    Table.EXPAND_COLUMN,
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      handleSelect(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.amount <= 1,
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <Table
      dataSource={dataSource.data}
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
      rowSelection={{
        type: "checkbox",
        ...rowSelection,
      }}
    />
  );
};

export default InventoryTable;
