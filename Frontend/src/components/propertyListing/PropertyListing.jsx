// import React, { useEffect, useState } from "react";
// import "../../css/PropertyListing.css";
// import "../../css/PropertyListing.css";
// import PropertyImg from "./PropertyImg";
// import PaymentForm from "./PaymentForm";
// import PropertyAmenities from "./PropertyAmenities";
// import PropertMapInfo from "./PropertyMapInfo";
// import { useParams } from "react-router-dom";
// import LoadingSpinner from "../LoadingSpinner";

// import {getPropertyDetils} from "../../store/PropertyDetails/propertyDetails-action";
// import {useDispatch,useSelector} from "react-redux"

// const PropertyListing = () => {

//   const { id } = useParams();
//   const dispatch=useDispatch()

//   const{loading, propertydetails}=useSelector(
//     (state) => state.propertydetails
//   )

//   // STATIC: was `useSelector((state) => state.propertydetails)`.
//   // TODO: replace with your own fetch logic.
//   // const [loading] = useState(false);
//   // const [propertydetails, setPropertyDetails] = useState(
//   //   STATIC_PROPERTY_DETAILS
//   // );


//   useEffect(()=>{
//     dispatch(getPropertyDetails(id))
//   },[dispatch,id])


//   if (loading || !propertydetails)
//     return (
//       <div className="row justify-content-around mt-5">
//         <LoadingSpinner />
//       </div>
//     );

//   const {
//     propertyName,
//     address,
//     description,
//     images,
//     amenities,
//     maximumGuest,
//     price,
//     currentBookings,
//   } = propertydetails;

//   return (
//     <div className="property-container">
//       <p className="property-header">{propertyName}</p>
//       <h6 className="property-location">
//         <span className="material-symbols-outlined">house</span>
//         <span className="location">{`${address?.area}, ${address?.city}, ${address?.state}`}</span>
//       </h6>
//       <PropertyImg images={images} />
//       <div className="middle-container row">
//         <div className="des-and-amenities col-md-8 col-sm-12 col-12">
//           <h2 className="property-description-header">Description</h2>
//           <p className="property-description">
//             {description} <br></br>
//             <br></br>Max number of guests: {maximumGuest}
//           </p>
//           <hr></hr>
//           <PropertyAmenities amenities={amenities} />
//         </div>
//         <div className="property-payment col-md-4 col-sm-12 col-12">
//           <PaymentForm
//             propertyId={id}
//             price={price}
//             propertyName={propertyName}
//             address={address}
//             maximumGuest={maximumGuest}
//             currentBookings={currentBookings}
//           />
//         </div>
//       </div>
//       <hr></hr>
//       <div className="property-map">
//         <div className="map-image-exinfo-container row">
//           <PropertMapInfo address={address} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyListing;




// // import React, { useEffect, useState } from "react";
// // import "../../css/PropertyListing.css";
// // import "../../css/PropertyListing.css";
// // import PropertyImg from "./PropertyImg";
// // import PaymentForm from "./PaymentForm";
// // import PropertyAmenities from "./PropertyAmenities";
// // import PropertMapInfo from "./PropertyMapInfo";
// // import { useParams } from "react-router-dom";
// // import LoadingSpinner from "../LoadingSpinner";
// // import {getPropertyDetails} from "../../store/PropertyDetails/propertyDetails-action";
// // import {useDispatch,useSelector} from "react-redux"
// // const PropertyListing = () => {
// //   const { id } = useParams();
// //   console.log("PROPERTY LISTING RUNNING");
// //   console.log("PROPERTY ID:", id);
// //   const dispatch = useDispatch()

// //   const {loading,propertydetails} = useSelector(
// //     (state) => state.propertyDetails
// //   );

// // useEffect(() => {
// //   console.log("CALLING API WITH ID:", id);
// //   dispatch(getPropertyDetails(id));
// // }, [dispatch, id]);



// //   if (loading || !propertydetails)
// //     return (
// //       <div className="row justify-content-around mt-5">
// //         <LoadingSpinner />
// //       </div>
// //     );

// //   const {
// //     propertyName,
// //     address,
// //     description,
// //     images,
// //     amenities,
// //     maximumGuest,
// //     price,
// //     currentBookings,
// //   } = propertydetails;

// //   return (
// //     <div className="property-container">
// //       <p className="property-header">{propertyName}</p>
// //       <h6 className="property-location">
// //         <span className="material-symbols-outlined">house</span>
// //         <span className="location">{`${address?.area}, ${address?.city}, ${address?.state}`}</span>
// //       </h6>
// //       <PropertyImg images={images} />
// //       <div className="middle-container row">
// //         <div className="des-and-amenities col-md-8 col-sm-12 col-12">
// //           <h2 className="property-description-header">Description</h2>
// //           <p className="property-description">
// //             {description} <br></br>
// //             <br></br>Max number of guests: {maximumGuest}
// //           </p>
// //           <hr></hr>
// //           <PropertyAmenities amenities={amenities} />
// //         </div>
// //         <div className="property-payment col-md-4 col-sm-12 col-12">
// //           <PaymentForm
// //             propertyId={id}
// //             price={price}
// //             propertyName={propertyName}
// //             address={address}
// //             maximumGuest={maximumGuest}
// //             currentBookings={currentBookings}
// //           />
// //         </div>
// //       </div>
// //       <hr></hr>
// //       <div className="property-map">
// //         <div className="map-image-exinfo-container row">
// //           <PropertMapInfo address={address} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PropertyListing;







import React, { useEffect } from "react";
import "../../css/PropertyListing.css";

import PropertyImg from "./PropertyImg";
import PaymentForm from "./PaymentForm";
import PropertyAmenities from "./PropertyAmenities";
import PropertMapInfo from "./PropertyMapInfo";

import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

import { getPropertyDetails } from "../../store/PropertyDetails/propertyDetails-action";
import { useDispatch, useSelector } from "react-redux";

const PropertyListing = () => {
  const { id } = useParams();

  console.log("PROPERTY LISTING RUNNING");
  console.log("PROPERTY ID:", id);

  const dispatch = useDispatch();

  const { loading, propertydetails } = useSelector(
    (state) => state.propertyDetails
  );

  useEffect(() => {
    console.log("CALLING API WITH ID:", id);

    if (id) {
      dispatch(getPropertyDetails(id));
    }
  }, [dispatch, id]);

  // Loading
  if (loading) {
    return (
      <div className="row justify-content-around mt-5">
        <LoadingSpinner />
      </div>
    );
  }

  // No property data
  if (!propertydetails) {
    return (
      <div className="row justify-content-around mt-5">
        <p>Property details not found.</p>
      </div>
    );
  }

  const {
    propertyName,
    address = {},
    description,
    images = [],
    amenities = [],
    maximumGuest,
    price,
    currentBookings,
  } = propertydetails;

  console.log("PROPERTY DETAILS:", propertydetails);
  console.log("ADDRESS:", address);
  console.log("IMAGES:", images);
  console.log("AMENITIES:", amenities);

  return (
    <div className="property-container">

      {/* PROPERTY NAME */}
      <p className="property-header">
        {propertyName}
      </p>

      {/* LOCATION */}
      <h6 className="property-location">

        <span className="material-symbols-outlined">
          house
        </span>

        <span className="location">
          {`${address?.area || ""}, ${address?.city || ""}, ${address?.state || ""}`}
        </span>

      </h6>

      {/* IMAGES */}
      <PropertyImg
        images={images ?? []}
      />

      <div className="middle-container row">

        {/* DESCRIPTION + AMENITIES */}
        <div className="des-and-amenities col-md-8 col-sm-12 col-12">

          <h2 className="property-description-header">
            Description
          </h2>

          <p className="property-description">

            {description}

            <br />
            <br />

            Max number of guests: {maximumGuest}

          </p>

          <hr />

          <PropertyAmenities
            amenities={amenities ?? []}
          />

        </div>

        {/* PAYMENT */}
        <div className="property-payment col-md-4 col-sm-12 col-12">

          <PaymentForm
            propertyId={id}
            price={price}
            propertyName={propertyName}
            address={address}
            maximumGuest={maximumGuest}
            currentBookings={currentBookings}
          />

        </div>

      </div>

      <hr />

      {/* MAP */}
      <div className="property-map">

        <div className="map-image-exinfo-container row">

          <PropertMapInfo
            address={address ?? {}}
          />

        </div>

      </div>

    </div>
  );
};

export default PropertyListing;