import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroVideo from '../assets/images/Banner.mp4';


const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: '212px' , xs: '70px'},
            ml: { sm: '50px' }
        }} position="relative" p="20px">
            <Typography color="#FF2625"
            fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                Push Limits, Break Barrier <br /> And Repeat
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                Find the perfect exercises customized to meet your goals
            </Typography>   
            <Stack>
                <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>
            <video autoPlay loop muted className="hero-banner-video">
                <source src={HeroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


        </Box>
    )
}

export default HeroBanner;