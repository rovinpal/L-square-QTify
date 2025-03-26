import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress, Box } from "@mui/material";
import axios from "axios";

export default function AlbumPage() {
    const { albumId } = useParams();
    const [album, setAlbum] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${albumId}`);
                setAlbum(response.data);
            } catch (error) {
                console.error("Error fetching album:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbum();
    }, [albumId]);

    if (loading) {
        return <CircularProgress />;
    }

    if (!album) {
        return <Typography color="white">Album not found</Typography>;
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Typography 
                variant="h4" 
                sx={{ 
                    fontFamily: "Poppins", 
                    fontWeight: "bold", 
                    color: "white" 
                }}
            >
                {album.title}
            </Typography>
        </Box>
    );
}
