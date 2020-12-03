import React from "react";
import { SvgXml } from 'react-native-svg';
function TopCircle() {
    const xml = `<svg
      xmlns="http://www.w3.org/2000/svg"
      width="165"
      height="178"
      fill="none"
      viewBox="0 0 165 178"
    >
      <circle
        cx="65"
        cy="78"
        r="100"
        fill="url(#paint0_linear)"
        fillOpacity="0.6"
      ></circle>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="65"
          x2="65"
          y1="-22"
          y2="178"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F90606"></stop>
          <stop offset="1" stopColor="#F66" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>`
    return <SvgXml xml={xml} />
}

export default TopCircle;