import { prisma } from "@/prisma/prisma";
import { AppAppBar } from "./components/AppAppBar";
import { Hero } from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import { Box, Divider } from "@mui/material";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Highlights from "./components/Highlights";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default async function Home() {
  const produtos = await prisma.product.findMany();

  return (
    <main>
      <AppAppBar />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        {/* <LogoCollection /> */}
        <Features />
        <Divider />
        {/* <Testimonials /> */}
        <Divider />
        <Highlights />
        <Divider />
        {/* <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </main>
  );
}
