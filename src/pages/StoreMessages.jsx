import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const messages = [
  { id: 1, sender: "John Doe", message: "Hello, I have a question about my order.", date: "2023-10-01" },
  { id: 2, sender: "Jane Smith", message: "Can you help me with a return?", date: "2023-10-02" },
  { id: 3, sender: "Alice Johnson", message: "I received the wrong item.", date: "2023-10-03" },
  // Add more messages as needed
];

const StoreMessages = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Store Messages</h1>
      <Table>
        <TableCaption>Messages from customers</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((msg) => (
            <TableRow key={msg.id}>
              <TableCell>{msg.id}</TableCell>
              <TableCell>{msg.sender}</TableCell>
              <TableCell>{msg.message}</TableCell>
              <TableCell>{msg.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StoreMessages;