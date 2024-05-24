import React from 'react';
import { Grid } from '@mui/material';

const Hero = () => {
  return (
    <div className='ml-8 mr-4 mt-4'>
      <Grid container spacing={2} className='flex bg-blue-100 items-center justify-center rounded-lg shadow-xl'>
        <Grid item md={5} className='flex flex-col md:items-start'>
          <h1 className="text-6xl pt-3 font-bold md:text-left">
            Let us find your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
              Dream{" "}
            </span>
            Home!
          </h1>
          <h2 className="font-medium pt-6 text-center md:text-left max-w-xl">
            We can help you rent, sell, or find accommodation, take a mortgage, invest in real estate, and a lot more.
          </h2>
        </Grid>
        <Grid item md={6} className='flex justify-center'>
          <img src="/apartment.png" alt="Apartment" className='max-w-full' />
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
