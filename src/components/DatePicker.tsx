import React, {ChangeEvent, useEffect, useState} from 'react';
import { useAppDispatch } from '../config/hooks';
import { ISetDateAction, setDate } from '../services/period';

const DatePicker: React.FC<{ point: string; }> = ({ point }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {})
  const [date, updateDate] = useState('')

  const pickDate = (e: ChangeEvent<HTMLInputElement>) => {
    updateDate(e.target.value)
    const payload: ISetDateAction = {
      date: new Date(e.target.value).toISOString().slice(0, 19),
      point
    }
    dispatch(setDate(payload));
  }
  

  return (
    <div className="from flex dir--col p--b-4">
      <label htmlFor={point} className='font--text text--capitalize-first-letter'>{ point }</label>
      <input
        className='input p--a-2'
        type="date"
        name={point}
        id={point}
        value={
          point === 'from' && date === '' ? new Date().toISOString().slice(0, 10) : date
        }
        onChange={(e) => pickDate(e)}
      />
    </div>
  )
}

export default DatePicker;