import React from "react";
import { Card, Avatar, Badge } from "antd";
import Image from "next/image";
import { ArrowRightLeft, DollarSign, PanelBottomOpen } from "lucide-react";

const { Meta } = Card;

type DealProps = {
  deal: {
    id: number;
    name: string;
    url: string;
    price: string;
  };
};

const PhoneDealCard = ({ deal }: DealProps) => {
  const handleBuy = (name: string) => alert(` buy ${name}`);
  return (
    <Card
      styles={{
        body: { padding: "8px" },
      }}
      hoverable
      actions={[
        <div key="swap" className="flex items-center justify-center">
          <ArrowRightLeft size={18} color="#ff5492" />
        </div>,
        <div
          key="buy"
          className="flex items-center justify-center"
          onClick={() => handleBuy(deal.name)}
        >
          <DollarSign size={18} color="green" />
        </div>,
        <div key="open" className="flex items-center justify-center">
          <PanelBottomOpen size={18} color="#08161f" />
        </div>,
      ]}
    >
      <Badge.Ribbon color="red" text="HOT" style={{ fontSize: "12px" }}>
        <div className="bg-gray-light h-[320px] w-full space-y-4 rounded-lg px-2 py-1">
          <div className="text-tertiary text-xsmall border-tertiary/10 flex h-8 max-w-fit items-center justify-center rounded-full border-[1px] bg-white px-4 py-2 text-center font-medium tracking-tighter">
            <span>Iphone</span>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={deal.url}
              alt="image of phone model"
              priority
              width={200}
              height={254}
            />
          </div>
        </div>
      </Badge.Ribbon>
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/9.x/adventurer/svg?seed=5" />
        }
        style={{ margin: "12px 0", fontFamily: "var(--font-switzer)" }}
        title={deal.name}
        description={`from ${deal.price}`}
      />
    </Card>
  );
};

export default PhoneDealCard;
