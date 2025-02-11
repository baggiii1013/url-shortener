"use client";
import React, { useState } from "react";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);
  

  return (
    <div className="flex justify-center items-center h-[93vh] bg-bgColor">
      <div className="flex flex-col items-center ">
        <h1 className="my-3 p-2 text-2xl text-center">
          Generate your shortened url
        </h1>
        <form className="grid grid-cols-1 bg-primary w-[34.5rem] rounded-md">
          <input
            type="text"
            value={url}
            className=" my-5 mx-3 p-4 text-xl text-btnColor border-2 border-main focus:outline-btnColor rounded-lg"
            placeholder="Enter your url"
            onChange={ (e) => {
              seturl(e.target.value)
            }}
            
          />
          <input
            type="text"
            value={shortUrl}
            className="m-3 p-4 text-xl text-btnColor border-2 border-main focus:outline-btnColor rounded-lg"
            placeholder="Enter your desired url"
            onChange={ (e) => {
              setShortUrl(e.target.value)
            }}
          />
          <button className="m-3 bg-btnColor px-4 py-3 text-xl rounded-lg text-white">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
};

export default shorten;
