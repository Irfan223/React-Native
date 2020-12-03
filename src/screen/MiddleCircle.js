import React from "react";
import { SvgXml } from 'react-native-svg';
function MiddleCircle() {
   const xml = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="166"
      height="200"
      fill="none"
      viewBox="0 0 166 200"
    >
      <circle
        cx="100"
        cy="100"
        r="100"
        fill="url(#paint0_linear)"
        fillOpacity="0.6"
      ></circle>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="100"
          x2="100"
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

export default MiddleCircle;
