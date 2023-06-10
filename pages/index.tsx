"use client";
import type { NextPage } from "next";
import { Hero } from "../components/hero";
import { Box } from "../components/styles/box";

const Home: NextPage = () => {
  return (
    <Box as="main">
      <Hero />
    </Box>
  );
};

export default Home;
