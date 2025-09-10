import React from "react";
import { Background, Header, ContentCard, SocialSidebar } from "./components";

export const Hero = () => {
  return (
    <section className="h-dvh relative overflow-hidden rounded-3xl max-w-[1800px] mx-auto">
      <Background />
      <Header />
      <ContentCard />
      <SocialSidebar />
    </section>
  );
};


