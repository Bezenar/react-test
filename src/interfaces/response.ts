export interface IUnitResponse {
  data: {
    units: Array<IUnit>
  }
}

export interface IUnit {
  unit_id: number;
  box_id: number;
  company_id: number;
  country_code: string;
  label: string;
  number: string;
  shortcut: string;
  vehicle_title: string;
  car_reg_certificate: string;
  vin: string;
  type: string;
  icon: string;
  lat: number;
  lng: number;
  direction: number;
  speed: number;
  mileage: number;
  last_update: string;
  ignition_total_time: string;
  state: {
    name: string;
    start: string;
    duration: number;
    debug_info: any
  },
  movement_state: {
    name: string;
    start: string;
    duration: number
  },
  fuel_type: string;
  avg_fuel_consumption: {
    norm: number;
    measurement: string;
  },
  created_at: string;
}