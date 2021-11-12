import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUnit, IUnitResponse } from '../interfaces/response';
import { ISerializedUnit } from '../interfaces/serializedData';

export const maponApi = createApi({
  reducerPath: 'mapon',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mapon.com/api/v1/' }),
  endpoints: (builder) => ({
    getCarsNumber: builder.query<Array<ISerializedUnit>, string>({
      query: (path: string) => `${path}?key=ed6dc5516f66531096e66628e84d10fd2371c87a`,
      transformResponse: (response: IUnitResponse) => response.data.units.map(
        (car: IUnit) => Object.assign({}, {number: car.number, unit_id: car.unit_id})
      )
    }),
    getRoutes: builder.query<any, any>({
      query: (path: Record<string, string>) => `${path.main}?from=${path.from}Z&unit_id=71507&till=${path.to}Z&key=ed6dc5516f66531096e66628e84d10fd2371c87a&unit_id=${path.id}`,
      transformResponse: (response: any) => response.data.units[0].routes,
    })
  })
})

export const { useGetCarsNumberQuery, useGetRoutesQuery } = maponApi;