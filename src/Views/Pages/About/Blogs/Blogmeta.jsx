import axios from "axios";
import React, { useEffect, useState } from "react";

const Blogmeta = () => {
  const [blogmeta, setBlogmeta] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchingData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try different possible paths for the JSON file
      let response;
      try {
        response = await axios.get("/JSON/Blogmeta.json");
      } catch (err) {
        try {
          response = await axios.get("/public/JSON/Blogmeta.json");
        } catch (err2) {
          try {
            response = await axios.get("./JSON/Blogmeta.json");
          } catch (err3) {
            throw new Error("Could not fetch blogmeta data");
          }
        }
      }

      if (response.data && Array.isArray(response.data)) {
        setBlogmeta(response.data);
      } else {
        throw new Error("Invalid blogmeta data format");
      }
    } catch (err) {
      console.error("Error fetching blogmeta:", err);
      setError("Failed to load blog metadata");
      setBlogmeta([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []); // Remove the dependency array issue - only run once

  if (loading) {
    return <div className="blog-meta-loading">Loading...</div>;
  }

  if (error) {
    return <div className="blog-meta-error">Error loading metadata</div>;
  }

  return (
    <>
      {blogmeta && blogmeta.length > 0 &&
        blogmeta.map((item, id) => {
          return (
            <div key={id} className="d-flex">
              <div className="blog-meta">
                <a href="#" className="icon-container">
                  <i className={item.icon}></i>
                  {item.text}
                </a>

                <a href="#" className="icon-container">
                  <i className={item.icon}></i>
                  {item.text}
                </a>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Blogmeta;