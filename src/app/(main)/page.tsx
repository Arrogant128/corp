import Content from "@/components/content";
import { Metadata } from "next";
import HomeSrc from "/public/home.jpg";
export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  let contentObj = {
    imgUrl: HomeSrc,
    altTxt: "Home Image",
    content: "Welcome to the home page!"
  }
  return (
    <>
      <Content {...contentObj} />
    </>
  );
}
