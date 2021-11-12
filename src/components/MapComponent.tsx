import React, { useEffect } from 'react';
import { useAppSelector } from '../config/hooks';
import { useGetRoutesQuery } from '../services/api';

const MapComponent: React.FunctionComponent = () => {
  const dates = useAppSelector(({ period }) => period);
  const number = useAppSelector(({ car }) => car.number);
  const { data } = useGetRoutesQuery(
    { main: 'route/list.json', from: dates.from.split('.000').join(''), to: dates.to.split('.000').join(''), id: number }
    )
  
  useEffect(() => {
    if (data) {
      const distance: Array<number> = data.reduce((acc: any, r: any) => {
        if (r.distance) {
          acc.push(r.distance)
        }
        return acc;
      }, [])
    }
  })

  return (
    <p>MAP COMPONENT</p>
  )
}

export default MapComponent;