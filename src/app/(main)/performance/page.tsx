import Content from "@/components/content";
import { Metadata } from "next";
import performanceSrc from "/public/performance.png";

export const metadata: Metadata = {
  title: "Performance",
};
export default function Performance() {
  const contentObj = {
    imgUrl: performanceSrc,
    altTxt: "performanceSrc Image",
    content: "Welcome to the performance page!",
  }
  return (
    <>
      <Content {...contentObj} />
    </>
  );
}
