import React from "react";

export const ButtonPlay = () => {
   return (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
         <g fill="none" fillRule="evenodd">
            <circle
               stroke="#FFF"
               strokeWidth="2"
               fillOpacity=".24"
               fill="#000"
               cx="24"
               cy="24"
               r="23"
            ></circle>
            <path
               d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
               fill="#FFF"
               fillRule="nonzero"
            ></path>
         </g>
      </svg>
   );
};

export const ButtonClose = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="2"
         stroke="currentColor"
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
         ></path>
      </svg>
   );
};
