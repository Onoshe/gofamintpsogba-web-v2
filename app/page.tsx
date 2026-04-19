import HomeContentClient from "@/components/home/HomeContentClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GOFAMINT Church in Ogba, Ikeja, Lagos",
  description:
    "Welcome to The Gospel Faith Mission International (GOFAMINT) Pacesetters Assembly in Ogba, Ikeja, Lagos. Join our worship services and church family.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
      <HomeContentClient />
  );
}
