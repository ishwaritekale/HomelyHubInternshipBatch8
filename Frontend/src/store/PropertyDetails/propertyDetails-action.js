// import {propertyDetailsAction} from "./propertyDetails-slice";
// import {axiosInstance} from "../../utils/axios";





// export const getPropertyDetails = (id) => async (dispatch) => {
//   try {
//     dispatch(propertyDetailsAction.getListRequest());

//     const response = await axiosInstance.get(`/v1/rent/listing/${id}`);

//     console.log("FULL RESPONSE", response.data);

//     const propertyData = response.data.propertydetails;

//     console.log("Property to save:", propertyData);

//     dispatch(propertyDetailsAction.getPropertyDetails(propertyData));
    
//   } catch (error) {
//     console.log("ERROR:", error);
//     dispatch(propertyDetailsAction.getErrors(error.message));
  // }
// };





// import { propertyDetailsAction } from "./propertyDetails-slice";
// import { axiosInstance } from "../../utils/axios";

// export const getPropertyDetails = (id) => async (dispatch) => {
//   try {
//     console.log("DETAIL API STARTED");
//     console.log("DETAIL PROPERTY ID:", id);

//     dispatch(propertyDetailsAction.getListRequest());

//     const response = await axiosInstance.get(
//       `/v1/rent/listing/${id}`
//     );

//     console.log("DETAIL API RESPONSE:", response.data);

//     const propertyData = response.data.propertydetails;

//     console.log("PROPERTY DATA:", propertyData);

//     dispatch(
//       propertyDetailsAction.getPropertyDetails(propertyData)
//     );

//   } catch (error) {
//     console.log("DETAIL API ERROR:", error);
//     console.log("ERROR RESPONSE:", error.response?.data);

//     dispatch(
//       propertyDetailsAction.getErrors(
//         error.response?.data?.message || error.message
//       )
//     );
//   }
// };

import {axiosInstance } from "../../utils/axios";
import { propertyDetailsAction } from "./propertyDetails-slice";

export const getPropertyDetails = (id) => async (dispatch) => {
  try {
    dispatch(propertyDetailsAction.getListRequest());

    console.log("DETAIL API STARTED");
    console.log("DETAIL PROPERTY ID:", id);

    const response = await axiosInstance.get(`/v1/rent/listing/${id}`);

    // console.log("DETAIL API RESPONSE:", response.data);
    console.log(
     "DETAIL API RESPONSE:",
      JSON.stringify(response.data, null, 2)
    );
    const propertyData = response.data.data;

    // console.log("PROPERTY DATA:", propertyData);
    console.log(
  "PROPERTY DATA:",
  JSON.stringify(propertyData, null, 2)
);

    dispatch(propertyDetailsAction.getPropertyDetails(propertyData));

  } catch (error) {
    console.log("ERROR:", error);
    dispatch(propertyDetailsAction.getErrors(error.message));
  }
};