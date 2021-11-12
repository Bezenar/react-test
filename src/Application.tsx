import React, { useEffect, useState } from 'react';
import { useAppDispatch } from './config/hooks';
import { useGetCarsNumberQuery } from './services/api';
import { setCarNumber } from './services/car';

import DatePicker from './components/DatePicker';
import ActionBar from './components/ActionBar';
import MapComponent from './components/MapComponent';

import { ISerializedUnit } from './interfaces/serializedData';

const Application: React.FunctionComponent = () => {
  const { data } = useGetCarsNumberQuery('unit/list.json');
  const dispatch = useAppDispatch();
  
  const [showMap, setShowMap] = useState(false);

  const generateRoutes = () => {
    setShowMap(!showMap);
  }

  return (
    <div style={{ width: '80%' }} className='bg--white rounded--l drop-shadow'>
      <div className='container'>
        <h2 className='font--heading p--t-10 p--b-6'>Route report</h2>
        <div className='form'>
          <div className='flex p--b-4'>
            <label htmlFor='car-number' className='font--text wid--33'>Vehicle number</label>
            <select className='input wid--66 p--a-2' name='car-number' id='car-number' onChange={(e) => dispatch(setCarNumber(e.target.value))}>
              <option className='font--input' value={''}></option>
              {
                data?.map((unit: ISerializedUnit) => (
                  <option className='font--input' key={`car-${unit.unit_id}`} value={unit.unit_id}>{unit.number}</option>
                ))
              }
            </select>
          </div>
          <div className='flex jc--sb p--b-8'>
            <p className='font--text wid--33'>Period</p>

            <DatePicker point={'from'} />
            
            <DatePicker point={'to'} />
          </div>
          <div>
            {showMap && <MapComponent />}
          </div>

        </div>
      </div>
      <ActionBar event={generateRoutes} />
    </div>
  )
}

export default Application;