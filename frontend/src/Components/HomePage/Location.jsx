// import React, { useState } from 'react'

// const Location = () => {

//     const [location,setLocation]=useState({
//         lat:'',
//         long:''
//       })

//     const getPosition = () => {
//         if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, posError); 
//         } else {
//         alert("Sorry, Geolocation is not supported by this browser."); 
//         }
//         }
//          const posError = () => {
//           if (navigator.permissions) {
//           navigator.permissions.query({ name: 'geolocation' }).then(res => {
//           if (res.state === 'denied') {
//           alert('Enable location permissions for this website in your browser settings.')
//           }
//           })
//           } else {
//           alert('Unable to access your location. You can continue by submitting location manually.') 
//           }
//           }
//           const showPosition = (position) => {
//             let latitude= position.coords.latitude
//             let longitude = position.coords.longitude
//             setLocation({lat:latitude,long:longitude})

//             if( 38.051248 >= 40 && 38.051248<= 60 || -99.356406>= -100 && -99.356406 <= -80){
//                 console.log("10000");
//             }
//             // else if(location.lat >= 40 && location.lat <= 60 && location.long >= -140 && location.long <= -100){
//             //     console.log("100");
//             // }
//             else{
//                 console.log("1");
//             }
//           }

// console.log(location);




//   return (
//     <div>
//         <button onClick={getPosition}>
//             current locastion
//         </button>
//     </div>
//   )
// }

// export default Location