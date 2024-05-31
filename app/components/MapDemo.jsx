"use client"
import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';

const containerStyle = {
    width: '400px',
    height: '400px'
  };

const MapDemo = ({lat, lng}) => {
  const mapRef = React.useRef(null)

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: 'weekly'
      })

      const {Map} =await loader.importLibrary('maps')
      const {Marker} = await loader.importLibrary('marker')
      
      const position = {
        lat: lat,
        lng: lng
      }

      // map options
      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "SAMPLE_ID"
      }

      // setup map
      const map = new Map(mapRef.current, mapOptions)

      // setup marker at position
      const marker = new Marker({
        map: map,
        position: position
      })
    }

    initMap()
  }, [])

  return(
    <div style={{height: '600px'}} ref={mapRef}>

    </div>
  )
}

export default MapDemo