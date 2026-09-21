// // import { configureStore } from "@reduxjs/toolkit";
// // import propertyReducer from "./Property/property-slice.js";
// // import propertyDetailsSlice from "./PropertyDetails/propertyDetails-slice.js";
// // import userSlice from "./User/user-slice";

// // export const store = configureStore({
// //   reducer: {
// //     properties: propertyReducer,
// //     propertyDetails: propertyDetailsSlice.reducer,
// //     user: userSlice.reducer
// //   }
// // })

// // export default store;




// // import { configureStore } from "@reduxjs/toolkit";
// // import propertySlice from "./Property/property-slice.js";
// // import propertyDetailsSlice from "./PropertyDetails/propertyDetails-slice.js";

// // export const store = configureStore({
// //   reducer: {
// //     properties: propertySlice.reducer,
// //     propertydetails: propertyDetailsSlice.reducer,
// //   },
// // });

// // export default store;



// import { configureStore } from "@reduxjs/toolkit";

// import propertySlice from "./Property/property-slice";
// import bookingSlice from "./Booking/booking-slice";
// import userSlice from "./User/user-slice";
// import propertyDetailsSlice from "./PropertyDetails/propertyDetails-slice";


// const store = configureStore({
//   reducer: {
//     properties: propertySlice.reducer,
//     propertyDetails: propertyDetailsSlice.reducer,
//     booking: bookingSlice.reducer,
//     user: userSlice.reducer,
//     accomodation :accomodationSlice.reducer,
//     payment :paymentSlice.reducer
//   }
// })

// export default store;




import { configureStore } from "@reduxjs/toolkit";

import propertySlice from "./Property/property-slice";
import bookingSlice from "./Booking/booking-slice";
import userSlice from "./User/user-slice";
import propertyDetailsSlice from "./PropertyDetails/propertyDetails-slice";
import accomodationSlice from "./Accomodation/Accomodation-slice";
import paymentSlice from "./Payment/payment-slice";

// const store = configureStore({
//     reducer: {
//         properties: propertySlice,
//         propertyDetails: propertyDetailsSlice,
//         booking: bookingSlice,
//         user: userSlice,
//         accomodation: accomodationSlice,
//         payment: paymentSlice
//     }
// })



console.log("PROPERTY DETAILS SLICE:", propertyDetailsSlice);

const store = configureStore({
    reducer: {
        properties: propertySlice,
        propertyDetails: propertyDetailsSlice,
       
        booking: bookingSlice,
        user: userSlice,
        accomodation: accomodationSlice,
        payment: paymentSlice
    }
});
// export default store;
console.log("STORE FINAL STATE:", store.getState());

export default store;







