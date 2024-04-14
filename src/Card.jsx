import React from "react";
import { RiHeadphoneFill, RiSendPlaneFill } from "@remixicon/react";
import axios from "axios";

function Card() {
  let textbox = false;
  let count = 1;
  async function dataCall() {
    // console.log(e)
    document.getElementById("para").innerHTML = ""

    let inputValue=document.getElementById("input").value
    console.log(inputValue)
    const data = await axios.post(`http://127.0.0.1:8787/:${inputValue}`, {
      body: {
        question: inputValue,
      },
    });
    const response = await data.data;
    const filteredData = response.replace(/[^a-z A-Z . : 0-9]/g, "");
    console.log(filteredData);

    // document.getElementById("A").textContent += (filteredData)
    // document.getElementById("A").innerHTML += '\n'
    let newDiv = document.getElementById("para");
    newDiv.innerHTML = "Response " + count++ + ": " + filteredData;
    
    textbox = true;
    imgDataCall()
  }
  async function imgDataCall(){
    // console.log("checking from datacall fun", value)
      const data= await fetch(encodeURI('http://127.0.0.1:8787/img'))
      // const response= await data.json()
      // console.log( typeof response)
      const blob = await data.blob();
      const url = URL.createObjectURL(blob);
      const img= document.getElementById("img")
      img.src=url 
  }
  return (
    <div
      id=""
      className="mt-20 ml-16 mr-10 bg-red-300 grid grid-cols-2 gap-1"
    >
      <img id="img"
        className="w-4/5 h-80 bg-cover bg=auto overflow-auto bg-zinc-300 mt-14 ml-10 p-2 rounded scroll-smooth"
        src=""
      />

      <div
        id="para"
        className="w-4/5 h-80 overflow-auto bg-zinc-300 mt-14 p-2 rounded scroll-smooth "
      ></div>
      <div>
        <div className="w-4/5 h-10 bg-white flex rounded-lg ml-80 pl-1 pr-1 flex items-center justify-center ">
          <div className="w-full flex ">
            <input
              className="w-svw bg-white p-1 text-black"
              type="text"
              id="input"
              placeholder="Type here"
            />
              <button onClick={() => dataCall()}>
                <RiSendPlaneFill className="w-8" />
              </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full h-auto flex justify-center mt-28">
    //   <div className="w-2/3 h-2/3 bg-gradient-to-r from-zinc-500 to-zinc-750 absolute flex rounded-lg ">

    //     <div className="w-full h-auto flex justify-center mt-56">

    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
