import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rerum debitis deserunt sequi molestias, aliquid ex amet tempora voluptates minima consequuntur cupiditate sapiente praesentium, maiores officiis veniam dignissimos. Molestias, neque.
    </div>
  );
}
