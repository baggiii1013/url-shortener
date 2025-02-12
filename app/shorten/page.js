"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Add this import

const shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [qr, setQr] = useState("")
  const qrCodeUrl = (url) => {
    return `https://api.qrserver.com/v1/create-qr-code/?data=${url}&amp;size=70x70`
  }
  

  const generate = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior

    try {
      // Validate inputs
      if (!url || !shortUrl) {
        toast.error("Please fill in all fields");
        return;
      }

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shortUrl,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success === "true") {
        const qr = qrCodeUrl(url);
        setQr(qr);
        console.log(qr)
        toast.success(result.message);
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate short URL");
    }
  };

  return (
    <div className="flex justify-center items-center h-[93vh] bg-bgColor">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col items-center">
        <h1 className="my-3 p-2 text-2xl text-center">
          Generate your shortened url
        </h1>
        <form
          className="grid grid-cols-1 bg-primary w-[34.5rem] rounded-md"
          onSubmit={generate}
        >
          <input
            type="text"
            value={url}
            className="my-5 mx-3 p-4 text-xl text-btnColor border-2 border-main focus:outline-btnColor rounded-lg"
            placeholder="Enter your url"
            onChange={(e) => seturl(e.target.value)}
            required
          />
          <input
            type="text"
            value={shortUrl}
            className="m-3 p-4 text-xl text-btnColor border-2 border-main focus:outline-btnColor rounded-lg"
            placeholder="Enter your desired url"
            onChange={(e) => setShortUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="m-3 bg-btnColor px-4 py-3 text-xl rounded-lg text-white"
          >
            Generate
          </button>
          {generated && (
            <code>
              <div className="text-white text-lg m-2 p-1">
              Your link :
              </div>
              <div>
              <Link className="mx-auto p-2 text-lg text-btnColor my-3" href={generated} target="_blank">
                {generated}
              </Link>
              <div className=" mx-auto">
                <img className='mx-auto my-2' src={qr} alt="qr code" />
              </div>
              </div>
            </code>
          )}
        </form>
      </div>
    </div>
  );
};

export default shorten;