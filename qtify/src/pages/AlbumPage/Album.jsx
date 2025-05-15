import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, CircularProgress, Box, Grid, IconButton, Divider } from "@mui/material";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const AlbumPage = () => {
    const { albumId } = useParams();
    const navigate = useNavigate();
    const [album, setAlbum] = useState(null);
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        const fetchAlbumById = async () => {
        try {
            const [newAlbumsRes, topAlbumsRes] = await Promise.all([
                axios.get("https://qtify-backend-labs.crio.do/albums/new"),
                axios.get("https://qtify-backend-labs.crio.do/albums/top"),
            ]);

            const combinedAlbums = [...newAlbumsRes.data, ...topAlbumsRes.data];
            const matchedAlbum = combinedAlbums.find((alb) => alb.id === albumId);
            setAlbum(matchedAlbum || null);
        } catch (error) {
            console.error("Error fetching album:", error);
            setAlbum(null);
        } finally {
            setLoading(false);
        }
        };

        fetchAlbumById();
    }, [albumId]);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", backgroundColor: "#121212" }}>
                <CircularProgress />
            </Box>
        );
    } 
    
    if (!album) return <Typography color="white">Album not found</Typography>;

    const getTotalDuration = (songs = []) => {
        const totalMs = songs.reduce((sum, song) => sum + song.durationInMs, 0);
        const totalMinutes = Math.floor(totalMs / 60000);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h ${minutes}m`;
    };

    const formatDuration = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    

    return (
        <>
            <Navbar searchData={albums}/>

            <Box sx={{ backgroundColor: "#121212", px: 10, mt: 4 }}>
                <IconButton
                    onClick={() => navigate("/")}
                    sx={{
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    border: "1px solid #34C94B",
                    "&:hover": { backgroundColor: "#2c2c2c" },
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    alignItems: { md: "center" },
                    mt: 4,
                    px: 10
                }}
            >
                <Box sx={{ flexShrink: 0 }}>
                    <img
                        src={album.image}
                        alt={album.title}
                        style={{ width: 300, height: 300, borderRadius: 12, objectFit: "cover" }}
                    />
                </Box>

                <Box sx={{ color: "white", flexGrow: 1 }}>
                    <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "bold", mb: 1 }}>
                        {album.title}
                    </Typography>

                    <Typography sx={{ color: "#ccc", fontFamily: "Poppins", mb: 2 }}>
                        {album.description}
                    </Typography>

                    <Typography sx={{ fontFamily: "Poppins", mb: 1 }}>
                        <strong>{album.songs?.length || 0}</strong> songs •{" "}
                        <strong>{getTotalDuration(album.songs)}</strong>
                    </Typography>

                    <Typography sx={{ color: "#34C94B", fontFamily: "Poppins", mb: 2 }}>
                        {album.follows.toLocaleString()} Follows
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                        <button
                            style={{
                                backgroundColor: "#34C94B",
                                color: "#fff",
                                border: "none",
                                borderRadius: 6,
                                padding: "8px 16px",
                                fontFamily: "Poppins",
                                fontWeight: "bold",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <ShuffleIcon style={{ fontSize: 20 }} />Shuffle
                        </button>
                        <button
                            style={{
                                backgroundColor: "#121212",
                                color: "#34C94B",
                                border: "1px solid #34C94B",
                                borderRadius: 6,
                                padding: "8px 16px",
                                fontFamily: "Poppins",
                                fontWeight: "bold",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <LibraryAddIcon />Add to Library
                        </button>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ px: 10, mt: 6, mb: 10 }}>
                <Grid container sx={{ color: "#fff", fontWeight: "bold", mb: 1, px: 1 }}>
                    <Grid item xs={6}>
                    <Typography sx={{ fontFamily: "Poppins" }}>Title</Typography>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography sx={{ fontFamily: "Poppins" }}>Artist</Typography>
                    </Grid>
                    <Grid item xs={2} sx={{ textAlign: "right" }}>
                    <Typography sx={{ fontFamily: "Poppins" }}>Duration</Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ backgroundColor: "#34C94B", height: "0.5px", marginBottom: 3}} />

                {album.songs.map((song) => (
                    <React.Fragment key={song.id}>
                        <Grid container alignItems="center" sx={{ mb: 2, mt: 2, px: 1 }}>
                            <Grid item xs={6}>
                            <Box display="flex" alignItems="center">
                                <img
                                src={song.image}
                                alt={song.title}
                                style={{ width: 50, height: 50, objectFit: "cover", marginRight: 16, borderRadius: 4 }}
                                />
                                <Typography sx={{ color: "#fff", fontFamily: "Poppins" }}>
                                {song.title}
                                </Typography>
                            </Box>
                            </Grid>
                            <Grid item xs={4}>
                            <Typography sx={{ color: "#bbb", fontFamily: "Poppins" }}>
                                {song.artists.join(", ")}
                            </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ textAlign: "right" }}>
                            <Typography sx={{ color: "#bbb", fontFamily: "Poppins" }}>
                                {formatDuration(song.durationInMs)}
                            </Typography>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                ))}
            </Box>

        </>
    );
}

export default AlbumPage;