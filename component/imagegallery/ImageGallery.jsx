import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import classes from "./ImageGallery.module.css";

export default function ImageGallery() {
  const searchRef = useRef();
  const [imageData, setImageData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${searchData}&per_page=15`,
      {
        headers: {
          Authorization:
            "RIvMzZ4pXRe1k9XcMWFlRe7xKggttE1D5qEBM2w7CJtbHZA6jGQv29b8",
        },
      }
    );
    console.log(response.data.photos);
    setImageData(response.data.photos);
    
    
  };
  useEffect(() => {
    if (searchData) {
      fetchData();
    }
  }, [searchData]);
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchRef.current.value);
    setSearchData(searchRef.current.value);
   
    
  };
  return (
    <div className={classes.container}>
      <label>Enter Image Type</label>
      <input type="text" ref={searchRef} placeholder="Enter Image Type" />

      <button onClick={searchHandler}>Search</button>
      <div className={classes.images}>
        {imageData &&
          imageData.map((item) => (
            <ul key={item.id}>
              <img src={item.src.medium} />
            </ul>
          ))}
      </div>
    </div>
  );
}
