
import Content from "@/components/content";
import { Metadata } from "next";
import reliabilitySrc from "/public/reliability.jpg";

export const metadata: Metadata = {
  title: "Reliability",
};
export default function Reliability() {
  const contentObj = {
    imgUrl: reliabilitySrc,
    altTxt: "reliability Image",
    content: "Super high reliability hosting",
  }
  return (
    <>
      <Content {...contentObj} />
    </>
  );
}
