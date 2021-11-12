import React from 'react';
import { IActionBarProps } from '../interfaces/props';

const ActionBar: React.FC<IActionBarProps> = ({event}) => {
  // const carNumber = useAppSelector(({ car }) => car.number)

  return (
    <div className="action-bar p--a-6 bg--disabled rounded--b-l">
      <div className="container flex jc--end">
        <button className="btn btn--success p--2-4" onClick={() => event()}>GENERATE</button>
      </div>
    </div>
  )
}

export default ActionBar;