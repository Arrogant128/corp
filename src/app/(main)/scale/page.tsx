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
    content: "Scale your app to infinity"
  }
  return (
    <>
      <Content {...contentObj} />
    </>
  );
}
