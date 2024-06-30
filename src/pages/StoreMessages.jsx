import React, { useEffect, useState } from "react";
import { Table } from "antd";

const messages = [
  { id: 1, sender: "John Doe", message: "Hello, I have a question about my order.", date: "2023-10-01", storeName: "Store A" },
  { id: 2, sender: "Jane Smith", message: "Can you help me with a return?", date: "2023-10-02", storeName: "Store B" },
  { id: 3, sender: "Alice Johnson", message: "I received the wrong item.", date: "2023-10-03", storeName: "Store C" },
  // Add more messages as needed
];

const StoreMessages = () => {
  const [storeStatuses, setStoreStatuses] = useState({});

  useEffect(() => {
    const fetchStoreStatuses = async () => {
      const storeNames = [...new Set(messages.map(msg => msg.storeName))];
      const statuses = {};

      for (const storeName of storeNames) {
        try {
          const response = await fetch(`/store/status?name=${storeName}`);
          const data = await response.json();
          statuses[storeName] = data.status;
        } catch (error) {
          console.error(`Failed to fetch status for ${storeName}:`, error);
          statuses[storeName] = "Unknown";
        }
      }

      setStoreStatuses(statuses);
    };

    fetchStoreStatuses();
  }, []);
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Sender',
      dataIndex: 'sender',
      key: 'sender',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Store Status',
      dataIndex: 'storeName',
      key: 'storeName',
      render: (storeName) => storeStatuses[storeName] || "Loading...",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Store Messages</h1>
      <Table dataSource={messages} columns={columns} rowKey="id" />
    </div>
  );
};

export default StoreMessages;