import React from 'react';
import { Grid } from '@mui/material';
import ListingCard from './ui/listing-card';

const HomeBrowse = () => {
  const listings = [
    {
      imageSrc: '/mc-1.png',
      title: 'Residential Complex - NS Tau',
      location: 'Sevilla, Palm Harbor',
      description: 'A modern cottage with breathtaking mountain views and an extensive yard, perfect for various types of leisure. The house features four spacious bedrooms and a kitchen area.',
      price: '$5,800/ m',
      details: ['4', '6', '23x42 m2']
    },
    {
      imageSrc: '/mc-1.png',
      title: 'Residential Comp 2 - NS Tau',
      location: 'Sevilla, Palm Harbor',
      description: 'A modern cottage with breathtaking mountain views and an extensive yard, perfect for various types of leisure. The house features four spacious bedrooms and a kitchen area.',
      price: '$6,200/ m',
      details: ['5', '7', '25x45 m2']
    }
  ];

  return (
    <div className='mt-12 ml-8 mr-4'>
      <Grid container spacing={2} className="bg-white rounded-lg pt-4">
        <Grid item md={8}>
          {listings.map((listing, index) => (
            <div key={index} style={{ marginTop: index !== 0 ? '48px' : '0' }}>
              <ListingCard
                imageSrc={listing.imageSrc}
                title={listing.title}
                location={listing.location}
                description={listing.description}
                price={listing.price}
                details={listing.details}
              />
            </div>
          ))}
        </Grid>
        <Grid item md={4}>
          <div className='h-screen bg-blue-100 rounded-xl mx-6'>
            <h1 className='font-medium text-3xl pt-8 pl-12'>Filter properties</h1>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeBrowse;
