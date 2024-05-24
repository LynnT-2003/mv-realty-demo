import React from 'react'
import { Grid } from '@mui/material'

const HomeBrowse = () => {
  return (
    <div className='mt-12 ml-8 mr-4'>
        <Grid container spacing={2} className="bg-white rounded-lg">
            <Grid item md={8}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item md={4} className='flex items-center justify-center rounded-lg shadhow-lg p-4'>
                        <img src="/apartment.png"/>
                    </Grid>
                    <Grid item md={5} className='flex-col items-center justify-center'>
                        <h1 className='text-2xl font-medium'>Residential Complex - NS Tau</h1>
                        <h3 className='mt-6 font-light'>Sevilla, Palm Harbor</h3>
                        <h3 className='mt-6 font-light'>
                            A modern cottage with breathtaking mountain views and 
                            an extensive yard, perfect for various types of leisure.
                            The house features four spacious bedrooms and a kitchen area.
                        </h3>
                    </Grid>
                    <Grid item md={3}>
                    <h3 className='font-light'>
                            A modern cottage with breathtaking mountain views and 
                            an extensive yard, perfect for various types of leisure.
                            The house features four spacious bedrooms and a kitchen area.
                        </h3>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4}>
                <div className='h-screen bg-blue-100 rounded-xl mx-6'>
                    <h1 className='font-medium text-3xl pt-8 pl-12'>Filter properties</h1>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default HomeBrowse