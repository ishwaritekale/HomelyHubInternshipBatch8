// import {axiosInstance} from "../../utils/axios"
// import { setBookingDetails, setBookings} from "./booking-slice"

// export const fetchBookingDetails =(bookingId) => async(dispatch)=>{
//     try{
//         const response = await axiosInstance.get(`/v1/rent/user/boooking/${bookingId}`  )
//         dispatch(setBookingDetails(response.data.data));

//     }catch(error){
//         consolele.error("Error fetching booking details",error)
//     }
// }


// export const fetchUserBookings = () => async (dispatch)=>{
//     try{
//         const response = await axiosInstance.get("/v1/rent/user/booking")
//         dispatch(setBookings(response.data.data.bookings))
//     }catch(error){
//         console.error("Error fetching booking details",error)
//     }
// }






import { axiosInstance } from "../../utils/axios";
import {
  setBookingRequest,
  setBookingDetails,
  setBookings,
  setBookingError,
} from "./booking-slice";

export const fetchBookingDetails = (bookingId) => async (dispatch) => {
  try {
    dispatch(setBookingRequest());

    const response = await axiosInstance.get(
      `/v1/rent/user/booking/${bookingId}`
    );

    console.log("BOOKING DETAILS RESPONSE:", response.data);

    dispatch(setBookingDetails(response.data.data));
  } catch (error) {
    console.error(
      "Error fetching booking details:",
      error.response?.data || error.message
    );

    dispatch(
      setBookingError(
        error.response?.data?.message || "Error fetching booking details"
      )
    );
  }
};

export const fetchUserBookings = () => async (dispatch) => {
  try {
    dispatch(setBookingRequest());

    const response = await axiosInstance.get(
      "/v1/rent/user/booking"
    );

    console.log("USER BOOKINGS RESPONSE:", response.data);

    dispatch(setBookings(response.data.data.bookings));
  } catch (error) {
    console.error(
      "Error fetching user bookings:",
      error.response?.data || error.message
    );

    dispatch(
      setBookingError(
        error.response?.data?.message || "Error fetching user bookings"
      )
    );
  }
};





