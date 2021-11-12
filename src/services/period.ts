import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPeriod {
  from: string;
  to: string;
}

export interface ISetDateAction {
  date: string | null;
  point: string;
}

export const initialState: IPeriod = {
  from: new Date().toISOString().slice(0, 10),
  to: '',
}

export const periodSlicer = createSlice({
  name: 'carSlicer',
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<ISetDateAction>) => {
      if (action.payload && action.payload.date) {
        action.payload.point === 'from'
          ? state.from = action.payload.date
          : state.to = action.payload.date
      }
    },
  }
})

export const { setDate } = periodSlicer.actions;

export default periodSlicer.reducer;