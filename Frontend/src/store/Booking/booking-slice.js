// import {createSlice} from "@reduxjs/toolkit";
// const initialState ={
//     booking:[],
//     bookingDetails:{},
//     loading:false
// }

// const bookingSlice=createSlice({
//     name:"booking",
//     initialState,
//     reducers:{
//         setBookingRequest(state){
//             state.loading=true;
//         },
//         //stores the bookings ,received from the api
//         setBookings(state,action){
//             state.booking=action.payload;
//             state.loading=false
//         },
//         addBooking:(state,action)=>{
//             state.booking.push(action.payload);
//         },
//         setBookingDetails:(state,action)=>{
//             state.bookingDetails=action.payload.bookings;
//         }
//     }
// })

// export const {setBookings,addBooking,setBookingDetails}=bookingSlice.actions;
// export default bookingSlice.reducer;






import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  bookingDetails: null,
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",

  initialState,

  reducers: {
    setBookingRequest(state) {
      state.loading = true;
      state.error = null;
    },

    setBookings(state, action) {
      state.bookings = action.payload;
      state.loading = false;
    },

    addBooking(state, action) {
      state.bookings.push(action.payload);
    },

    setBookingDetails(state, action) {
      state.bookingDetails = action.payload;
      state.loading = false;
    },

    setBookingError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setBookingRequest,
  setBookings,
  addBooking,
  setBookingDetails,
  setBookingError,
} = bookingSlice.actions;

export default bookingSlice.reducer;