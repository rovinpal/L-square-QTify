import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, CircularProgress, Tabs, Tab } from "@mui/material";
import axios from "axios";
import AlbumCard from "../Card/Card"; 
import Carousel from "../Carousel/Carousel"; 

const Section = ({ title, apiEndpoint, songs = false  }) => {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(apiEndpoint );
      console.log(`Fetched albumsfor ${title}:`, response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    } finally {
        setLoading(false);
    }
  };

  const fetchGenres = async () => {
    if (!songs) return; 
    try {
      const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
      const genreData = response.data.data.map((genre) => ({ key: genre.key, label: genre.label }));
      setGenres([{ key: "all", label: "All" }, ...genreData]);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const handleToggle = () => {
    setCarouselToggle((prevState) => !prevState);
  };

  const handleChange = (event, newGenre) => {
    setSelectedGenre(newGenre);
  };

  useEffect(() => {
    fetchAlbums();
    fetchGenres();
  }, [apiEndpoint]);

  useEffect(() => {
    if (selectedGenre === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.genre.key === selectedGenre));
    }
  }, [selectedGenre, data]);



  return (
    <Box sx={{ maxWidth: "100%", padding: 2, backgroundColor: "#121212" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "white", fontFamily: "Poppins" }}>
            {title}
        </Typography>
        {!songs && (
            <Button
            variant="text"
            sx={{ color: "#34C94B", fontSize: "14px", fontFamily: "Poppins"  }}
            onClick={handleToggle}
          >
            {carouselToggle ? "Show All" : "Collapse All"}
          </Button>
        )}
      </Box>

      {songs && (
        <Tabs
        value={selectedGenre}
        onChange={handleChange}
        textColor="#34C94B"
        indicatorColor="primary"
        sx={{
          "& .MuiTab-root": { color: "white", fontFamily: "Poppins" },
          "& .Mui-selected": { color: "#34C94B" },
          "& .MuiTabs-indicator": { backgroundColor: "#34C94B" },
          marginBottom: 4,
        }}
      >
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>
      )}

      {filteredData.length === 0 ? (
        <CircularProgress sx={{ display: "block", margin: "20px auto" }} />
      ) : (
        carouselToggle || songs ? (
            <Carousel 
                data={filteredData} 
                renderComponent = {(item) => <AlbumCard album={item} songs={songs}/>} 
            />
        ) : (
            <Grid container spacing={2} style={{padding: "0px 20px"}} columnSpacing={7.5}>
                {filteredData.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={12 / 7}>
                    <AlbumCard album={item} songs={songs}/>
                </Grid>
                ))}
            </Grid>
        )
      )}
    </Box>
  );
  
};

export default Section;


