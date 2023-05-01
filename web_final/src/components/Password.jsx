import React, { useState } from "react";

function Password({ visible, onClose }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

return (
    <div className=" font-mali">

      <div
        id="container"
        onClick={()=>handleOnClose()}
        className="fixed inset-0 bg-opacity-30 bg-black backdrop-blur-sm flex justify-center items-center"
      >
        <div class=" flex justify-center items-center ">
          <div class="absolute top-[250px] bg-white shadow-md rounded-2xl p-10 border-orange-600 border-4">
            <div class=" flex flex-col font-mali">
              <label
                class="block uppercase tracking-wide text-gray-700 font-bold  "
                for="first-name"
              />
              <div className="text-[30px] border-b-2 text-center border-black"> Please confirm your edits

              </div>
              <div class='text-center'> 
                <input
                class="text-center shadow appearance-none border rounded-xl w-72 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-7 text-[15px]"
                id="password2"
                type="password"
                placeholder="Enter your password"
              />
              
              </div>
             
              <div className="mt-7 text-center">
                <button
                  className=" font-bold rounded-lg bg-orange-600 text-[20px] text-white px-5 py-2  hover:bg-orange-700 duration-500 font-mali "
                  onClick={() => {
                    onClose();
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };


export default Password;