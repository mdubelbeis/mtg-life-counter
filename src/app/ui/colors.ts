import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const combinedBgColors: { id: string; name: string; value: string }[] = [
  { id: "bg-red-500", name: "Red", value: "#F56565" },
  { id: "bg-orange-500", name: "Orange", value: "#ED8936" },
  { id: "bg-yellow-500", name: "Yellow", value: "#ECC94B" },
  { id: "bg-green-500", name: "Green", value: "#48BB78" },
  { id: "bg-teal-500", name: "Teal", value: "#38B2AC" },
  { id: "bg-blue-500", name: "Blue", value: "#4299E1" },
  { id: "bg-indigo-500", name: "Indigo", value: "#667EEA" },
  { id: "bg-purple-500", name: "Purple", value: "#9F7AEA" },
  { id: "bg-pink-500", name: "Pink", value: "#ED64A6" },
  { id: "bg-gray-500", name: "Gray", value: "#A0AEC0" },
];

const initialState = {
  colors: combinedBgColors,
};

export const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    getColors: (state) => {
      console.log(state.colors);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getColors } = colorsSlice.actions;

export default colorsSlice.reducer;
