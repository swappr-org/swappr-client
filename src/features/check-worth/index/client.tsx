"use client";
import "@ant-design/v5-patch-for-react-19";
import { Input } from "antd";
import { Search } from "lucide-react";
import DeviceCard from "@/components/others/DeviceCard";
import Link from "next/link";
import PrimaryButton from "@/components/others/primary-button";

const models = [
  {
    id: 1,
    label: "iPhone",
    isSelected: true,
  },
  {
    id: 2,
    label: "Samsung Galaxy",
    isSelected: false,
  },
  {
    id: 3,
    label: "Google Pixel",
    isSelected: false,
  },
  {
    id: 4,
    label: "OnePlus",
    isSelected: false,
  },
  {
    id: 5,
    label: "Xiaomi",
    isSelected: false,
  },
  {
    id: 6,
    label: "Huawei",
    isSelected: false,
  },
  {
    id: 7,
    label: "Vivo",
    isSelected: false,
  },
  {
    id: 8,
    label: "Tecno",
    isSelected: false,
  },
];

const devices = [
  {
    id: 1,
    name: "iPhone 16",
    url: "/assets/images/iphone16.png",
    price: "N 1,300,000",
  },
  {
    id: 2,
    name: "Iphone 15proMax",
    url: "/assets/images/iphone-2.png",
    price: "N 1,300,000",
  },
  {
    id: 3,
    name: "Iphone 14 pro",
    url: "/assets/images/iphone16.png",
    price: "N 1,300,000",
  },
  {
    id: 4,
    name: "Iphone 12",
    url: "/assets/images/iphone-2.png",
    price: "N 1,300,000",
  },
];

export default function CheckWorth() {
  return (
    <div className="py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-tertiary text-xlarge sm:text-xxlarge leading-[105%] font-semibold tracking-tight text-balance">
          Find out how much your phone is worth{" "}
        </h1>

        <div className="relative mx-auto my-10 h-18 max-w-md rounded-full px-2 py-2 sm:flex sm:justify-center">
          <div className="from-secondary to-primary absolute inset-0 top-5 rounded-full bg-gradient-to-r blur-2xl" />
          <Input
            size="large"
            placeholder="What phone are you using?"
            prefix={<Search size={16} />}
            className="placeholder:text-tertiary/58 !font-switzer relative z-10"
            style={{
              height: "56px",
              borderRadius: "50px",
              position: "relative",
            }}
          />
        </div>
      </div>

      <div className="scrollbar-hide mx-auto max-w-[588px] snap-x snap-mandatory overflow-x-auto py-3">
        <div className="flex min-w-max items-center gap-4">
          {models.map((model) => (
            <div key={model.id} className="shrink-0 snap-start">
              <PrimaryButton
                type={model.isSelected ? "primary" : "default"}
                shape="round"
                size="large"
              >
                {model.label}
              </PrimaryButton>
            </div>
          ))}
        </div>
      </div>

      <section id="deals" className="mt-12">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {devices.map((device) => (
            <Link
              key={device.id}
              href={`/check-worth/${device.id}`}
              className="block"
            >
              <DeviceCard device={device} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
