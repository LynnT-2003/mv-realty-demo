import React from 'react';
import { Grid } from '@mui/material';
import {Button} from '@mui/material';
import ListingCard from './ui/listing-card';
import { useRouter } from 'next/navigation';



const HomeBrowse = () => {

  const router = useRouter();

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
    <div className='my-8 ml-8 mr-4' onClick={() => {
      router.push("/details")
    }}>
      <Grid container spacing={2} className="bg-white rounded-lg">
        <Grid item md={8} className=''>
          {listings.map((listing, index) => (
            <div key={index}>
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
          <div className='h-full bg-blue-100 rounded-xl mr-4 px-8 py-6'>
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
