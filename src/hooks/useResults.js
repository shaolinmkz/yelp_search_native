import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [term, setTerm] = useState("");
  const [err, setErr] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleTermChange = (value) => {
    setTerm(value);
    setErr("");
  };

  const searchApi = async (searchTerm) => {
    try {
      setErr("");
      const { data } = await yelp.get("/search", {
        params: {
          limit: 50,
          location: "san jose",
          term: searchTerm,
        },
      });

      setResults(data.businesses);
      setSearchLoading(false);
    } catch (error) {
      setSearchLoading(false);
      setResults([]);
      setErr("Something went wrong");
    }
  };

  const handleSubmit = () => {
    if (term) {
      setSearchLoading(true);
      searchApi(term);
    }
  };

  useEffect(() => {
    setPageLoading(true);
    searchApi("pasta").then(() => {
      setPageLoading(false);
    });
  }, []);

  return {
    handleSubmit,
    handleTermChange,
    err,
    searchLoading,
    pageLoading,
    results,
    term,
  };
};
