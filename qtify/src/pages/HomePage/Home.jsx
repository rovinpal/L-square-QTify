import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Faqs from "../../components/FAQs/FAQs";

function HomePage() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const [topAlbums, newAlbums] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/albums/top"),
          axios.get("https://qtify-backend-labs.crio.do/albums/new"),
        ]);
        setAlbums([...topAlbums.data, ...newAlbums.data]);
      } catch (err) {
        console.error("Failed to fetch albums:", err);
      }
    };

    fetchAlbums();
  }, []);


  return (
    <>
        <Navbar searchData={albums}/>
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