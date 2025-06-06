import React from "react";
import { Button, ConfigProvider } from "antd";

type ButtonProps = {
  type: "link" | "text" | "primary" | "dashed" | "default";
  size: "small" | "middle" | "large";
  shape: "default" | "circle" | "round";
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
};

export default function PrimaryButton({
  type,
  size,
  shape,
  children,
  onClick,
  fullWidth,
}: ButtonProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#08161f",
            algorithm: true,
          },
        },
      }}
    >
      <Button
        type={type ? type : "default"}
        shape={shape ? shape : "default"}
        size={size ? size : "middle"}
        className={`${fullWidth && "!w-full"} !font-switzer !text-small !font-medium`}
        onClick={onClick}
      >
        {children}
      </Button>
    </ConfigProvider>
  );
}
