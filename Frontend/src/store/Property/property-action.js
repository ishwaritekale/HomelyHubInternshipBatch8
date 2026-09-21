import { propertyAction } from "./property-slice";
import { axiosInstance } from "../../utils/axios";

export const getAllProperties = () => async (dispatch, getState) => {
    try {
        console.log("API call started");

        dispatch(propertyAction.getRequest());

        const { searchParams } = getState().properties;

        console.log("search Params:", searchParams);

        const response = await axiosInstance.get("/v1/rent/listing", {
            params: { ...searchParams }
        });

        console.log("API Response:", response.data);

        if (!response) {
            throw new Error("Could not fetch any properties");
        }

        dispatch(propertyAction.getProperties(response.data));

    } catch (error) {
        console.log("Property API Error:", error);

        dispatch(propertyAction.getErrors(error.message));
    }
};