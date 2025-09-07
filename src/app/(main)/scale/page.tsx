import Content from "@/components/content";
import { Metadata } from "next";
import scaleSrc from "/public/scale.jpg";

export const metadata: Metadata = {
  title: "Scale",
};
export default function Scale() {
  const contentObj = {
    imgUrl: scaleSrc,
    altTxt: "scale Image",
    content: "Welcome to the scale page!"
  }
  return (
    <>
      <Content {...contentObj} />
    </>
  );
}
