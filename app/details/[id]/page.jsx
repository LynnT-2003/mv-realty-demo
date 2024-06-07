"s"
import React from 'react'
import MapDemo from '../../components/MapDemo';

const listings = [
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

const Details = ({params}) => {
    const listing = listings.find((listing) => listing.id === parseInt(params.id));
    console.log(listings)
    if (!listing) {
        return<div>Listing {id} not found</div>
    }
    return (
        <div className='mt-10 mx-10 w-[40%] h-[50%]'>
            <MapDemo lat={listing.lat} lng={listing.lng} clas/>
        </div>
    )
}

export default Details