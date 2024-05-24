// ui/ListingCard.jsx
import React from 'react';
import { Grid } from '@mui/material';

const ListingCard = ({ imageSrc, title, location, description, price, details }) => {
  return (
    <Grid container spacing={4} alignItems="center" className='rounded-lg'>
      <Grid item md={4} className='flex items-center justify-center' style={{ height: '200px' }}>
        <img src={imageSrc} className='rounded-lg h-full object-cover' alt={title} />
      </Grid>
      <Grid item md={5} className='flex flex-col justify-center' style={{ height: '200px' }}>
        <h1 className='text-2xl font-medium truncate' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h1>
        <span className='flex items-center mt-4 font-light truncate' style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <img src='/icon.png' className="mr-2" style={{ width: "10px", height: "15px" }} alt="Location icon" />
          {location}
        </span>
        <h3 className='mt-4 font-light overflow-hidden' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
          {description}
        </h3>
      </Grid>
      <Grid item md={3}>
        <h1 className='flex flex-col justify-center text-blue-700 text-2xl font-medium overflow-hidden'>
          {price}
        </h1>
        {details.map((detail, index) => (
          <span key={index} className='flex items-center mt-4'>
            <img src='/icon.png' className="mr-2" style={{ width: "10px", height: "15px" }} alt="Detail icon" />
            {detail}
          </span>
        ))}
      </Grid>
    </Grid>
  );
}

export default ListingCard;
