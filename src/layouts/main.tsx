import Navbar from "@/components/shared/Navbar";
import React from "react";
import "@ant-design/v5-patch-for-react-19";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
