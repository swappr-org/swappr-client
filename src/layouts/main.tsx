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
      <main className="mx-auto min-h-dvh max-w-[794px]">{children}</main>
    </div>
  );
}
