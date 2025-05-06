"use client";
import "@ant-design/v5-patch-for-react-19";
import PhoneDealCard from "@/components/others/PhoneDealCard";
import { Button, Input, ConfigProvider } from "antd";
import { Search } from "lucide-react";

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

const deals = [
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

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="mx-auto max-w-[794px] px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="text-tertiary text-xlarge sm:text-xxlarge leading-[105%] font-semibold tracking-tight text-balance">
            Find out how much your phone is worth{" "}
          </h1>
          {/* <p className="text-small mx-auto mt-3 max-w-md text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            A secure and transparent platform for buying and swapping phones in
            Nigeria. Our AI-powered system ensures fair deals and prevents
            fraud.
          </p> */}

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
            <div className="flex min-w-max items-center gap-4">
              {models.map((model) => (
                <div key={model.id} className="shrink-0 snap-start">
                  <Button
                    type={model.isSelected ? "primary" : "default"}
                    shape="round"
                    size="large"
                    className="!font-switzer !text-small !font-medium"
                  >
                    {model.label}
                  </Button>
                </div>
              ))}
            </div>
          </ConfigProvider>
        </div>

        <section id="deals" className="mt-12">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {deals.map((deal) => (
              <PhoneDealCard deal={deal} key={deal.id} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
