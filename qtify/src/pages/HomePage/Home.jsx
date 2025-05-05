import React from "react";
import { Divider } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Faqs from "../../components/FAQs/FAQs";

function HomePage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
        <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
        <Divider sx={{ backgroundColor: "#34C94B", height: "1px", marginBottom: 1}} />
        <Section title="Songs" apiEndpoint="https://qtify-backend-labs.crio.do/songs" songs />
        <Divider sx={{ backgroundColor: "#34C94B", height: "1px", marginBottom: 1}} />
        <Faqs />

    </>
  );
};

export default HomePage;