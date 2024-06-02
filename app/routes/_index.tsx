import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import AboutUsSection from "~/components/about-us-section/AboutUsSection";
import BlogSection from "~/components/blog-section/BlogSection";
import CategorySection from "~/components/category-section/CategorySection";
import HeaderSection from "~/components/heeader/Header";
import HeroSection from "~/components/hero-section/HeroSection";
import OurMenuSection from "~/components/our-menu-section/OurMenuSection";
import PartnersClientSection from "~/components/partners-client-section/PartnersClientSection";
import TeamSection from "~/components/team-section/TeamSection";
import TestimonialSection from "~/components/testimonial-section/TestimonialSection";
import WhyWeAreSection from "~/components/why-we-are-section/WhyWeAreSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Libre Food" },
    { name: "description", content: "Welcome to Libre Food" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HeaderSection />
      </Container>
      <HeroSection />
      <AboutUsSection />
      <CategorySection />
      <WhyWeAreSection />
      <OurMenuSection />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
      <PartnersClientSection />
    </Box>
  );
}
