import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Chip, Box } from "@mui/material";

const AlbumCard = ({ album, songs }) => {
    return (
        <Link to={`/album/${album.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <Box sx={{ height: 250, width: 159, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <Card sx={{ position: "relative", height: 200, width: "100%", borderRadius: 2 }}>
                    <CardMedia
                        component="img"
                        image={album.image}
                        alt={album.title}
                        sx={{
                            height: 165,
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <Chip
                        label={songs ? `${album.likes} Likes` : `${album.follows} Follows`}
                        sx={{
                            position: "absolute",
                            bottom: 6,
                            left: 6,
                            backgroundColor: "#121212",
                            color: "white",
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontSize: 10,
                            lineHeight: "100%",
                            letterSpacing: "0px",
                            height: 24,
                            // paddingX: 1.5,
                        }}
                    />
                </Card>
    
                <CardContent sx={{ padding: "8px", textAlign: "center" }}>
                    <Typography 
                        variant="body2"
                        color="#FFFFFF"
                        sx={{
                            fontFamily: "Poppins",
                            fontWeight: 400,
                            fontSize: 14,
                            lineHeight: "100%",
                            letterSpacing: "0px",
                            whiteSpace: "nowrap",   
                            overflow: "hidden",          
                            textOverflow: "ellipsis",    
                            maxWidth: "100%" 
                        }}
                    >
                        {album.title}
                    </Typography>
                </CardContent>
            </Box>
        </Link>
        
    );
};

export default AlbumCard;