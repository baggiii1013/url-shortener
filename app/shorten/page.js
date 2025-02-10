import React, { useState } from "react";

const shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState(false);
  return (
    <div>
      <h1>Generate your shorten url</h1>
      <form>
        <input type="text" placeholder="Enter your url" onChange={handleChange}/>
        <input type="text" placeholder="Enter your desired url" onChange={handleChange}/>
        <button>Generate</button>
      </form>
    </div>
  );
};

export default shorten;
