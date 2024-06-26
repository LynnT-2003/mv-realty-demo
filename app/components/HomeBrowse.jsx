"use client"

import React from 'react';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import {Button} from '@mui/material';
import ListingCard from './ui/listing-card';
import { useRouter } from 'next/navigation';

const HomeBrowse = () => {

  const router = useRouter();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    fetchListings();
  }, []); 

  useEffect(() => {
    console.log(listings);
  }, [listings])

  const fetchListings = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/condos`, {
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': process.env.NEXT_PUBLIC_API_KEY,
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }
      const data = await response.json();
      setListings(data); // Update listings state with fetched data
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const listings_default = [
    { 
      id: 1,
      imageSrc: '/mc-1.png',
      title: 'Aspire Sukhumvit 48',
      location: 'Sevilla, Palm Harbor',
      description: 'A modern cottage with breathtaking mountain views and an extensive yard, perfect for various types of leisure. The house features four spacious bedrooms and a kitchen area.',
      price: '$5,800/ m',
      details: ['4', '6', '23x42 m2'],
      lat: 13.71109,
      lng: 100.59393
    },
    {
      id: 2,
      imageSrc: '/mc-1.png',
      title: 'Residential Comp 2 - NS Tau',
      location: 'Sevilla, Palm Harbor',
      description: 'A modern cottage with breathtaking mountain views and an extensive yard, perfect for various types of leisure. The house features four spacious bedrooms and a kitchen area.',
      price: '$6,200/ m',
      details: ['5', '7', '25x45 m2'],
      lat: 13.605239892371365,
      lng: 100.84735795566397
    }
  ];

  return (
    <div className='my-8 ml-8 mr-4'>
      <Grid container spacing={2} className="bg-white rounded-lg">
        <Grid item md={8} className=''>
          {listings_default.map((listing, index) => (
            <div key={index} onClick={() => {
              router.push(`/details/${listing.id}`)
            }}>
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
          <div className='h-full bg-blue-100 rounded-xl mr-4 px-8 py-8'>
            <h1 className='font-medium text-3xl'>Filter properties</h1>
            <Button>All</Button>
            <Button>House</Button>
            <Button>Apartment</Button>
            <Button>Land</Button>
            <Grid container spacing={2} className='' style={{ height: '50px' }}>
            <Grid item md={8} className='flex flex-col justify-center h-full'>
              <h1 className='text-lg'>Select Date</h1>
              <h2 className='text-sm font-light mt-1'>14 December 2024</h2>
            </Grid>
            <Grid item md={4} className='flex items-center justify-center h-full'>
              <img src="/next.svg" alt="Next" />
            </Grid>
          </Grid>

          </div>
        </Grid>
      </Grid>
    </div>
  ); 
}

export default HomeBrowse;
