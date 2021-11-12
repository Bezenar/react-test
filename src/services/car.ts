import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICarNumber {
  number: string;
}

export const initialState: ICarNumber = {
  number: ''
}

export const carSlicer = createSlice({
  name: 'carSlicer',
  initialState,
  reducers: {
    setCarNumber: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        state.number = action.payload;
      } else {
        state.number = ''
      }
    },
  }
})

export const { setCarNumber } = carSlicer.actions;

export default carSlicer.reducer;