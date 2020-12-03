import React from "react";
import { SvgXml } from 'react-native-svg';
function BottomCircle() {

   const xml = `<svg
   xmlns="http://www.w3.org/2000/svg"
   width="177"
   height="200"
   fill="none"
   viewBox="0 0 177 200"
 >
   <circle
     cx="77"
     cy="100"
     r="100"
     fill="url(#paint0_linear)"
     fillOpacity="0.8"
   ></circle>
   <defs>
     <linearGradient
       id="paint0_linear"
       x1="77"
       x2="77"
       y1="0"
       y2="200"
       gradientUnits="userSpaceOnUse"
     >
       <stop stopColor="#F90606"></stop>
       <stop offset="1" stopColor="#F66" stopOpacity="0"></stop>
     </linearGradient>
   </defs>
 </svg>`
    return <SvgXml xml={xml} />
}

export default BottomCircle;
