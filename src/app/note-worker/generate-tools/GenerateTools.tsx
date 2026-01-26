
'use client';
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import CamelCase from "./camel-case/CamelCase";
import SnakeCase from "./snake-case/SnakeCase";
import StripeCase from "./stripcase-case/StripCase";
import TypingInterface from "./typing-interface/TypingInterface";

export default function GenerateTools() {
    return (
      <div className="w-full flex px-8 py-2">
        <Tabs aria-label="Default tabs" variant="default" className="w-full">
          <TabItem active title="Camel Case" icon={HiUserCircle} className="w-full">
            <CamelCase />
          </TabItem>
          <TabItem title="Snake Case" icon={MdDashboard} className="w-full">
            <SnakeCase />
          </TabItem>
          <TabItem title="Stripe Case" icon={HiAdjustments} className="w-full">
            <StripeCase />
          </TabItem>
          <TabItem title="Typingf Interface" icon={HiClipboardList} className="w-full">
            <TypingInterface />
          </TabItem>
        </Tabs>
      </div>
    );
  }
  