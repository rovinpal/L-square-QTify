import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";


const Player = ({ currentSong }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    if (!currentSong) return null;

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <Box>
            <Box>
                <Box>
                    <img src={currentSong.image} alt={currentSong.title} />
                </Box>
                <Box>
                    <Typography>{currentSong.title}</Typography>
                    <Typography>{currentSong.artists.join(", ")}</Typography>
                </Box>
            </Box>
            <IconButton onClick={togglePlay}>
                {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
        </Box>
    );
}

export default Player;