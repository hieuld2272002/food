import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMess, setErrMess] = useState("");
  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrMess("some thing went wrong");
    }
  };

  //call seachApi when componet
  //is frist rendered .BAD CODE
  //seachAPi('pasta');
  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, errMess];
};
