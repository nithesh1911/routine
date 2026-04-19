/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
const header = () => {
  const [accordion, setAccordion] = useState(true);

  const openAccordion = () => {
    setAccordion(!accordion);
  };
  return (
    <div className="sticky flex flex-row-3 gap-5 justify-between items-center bg-white h-40 p-2">
      <img src="./routine.png" className="h-46 w-74" />
      <div className="flex flex-row-3 gap-5 font-serif">
        <div>
          <h2 className="text-black text-center hover:text-orange-500">Home</h2>
        </div>
        <div onClick={openAccordion}>
          <h2 className="text-black text-center hover:text-orange-500">
            Daily Records
          </h2>

          {!accordion && (
            <div className="bg-orange-600 rounded-xl p-2">
              <h2 className="text-black text-center hover:text-white">
                Today routine
              </h2>
              <h2 className="text-black text-center hover:text-white">
                Yesterday routine
              </h2>
              <h2 className="text-black text-center hover:text-white">
                costom routine
              </h2>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-black text-center hover:text-orange-500">
            Notes
          </h2>
        </div>
      </div>
    </div>
  );
};

export default header;
