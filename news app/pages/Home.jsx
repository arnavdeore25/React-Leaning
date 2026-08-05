import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";


function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const query = search.trim() ? `&q=${encodeURIComponent(search.trim())}` : "";
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=General${query}&apiKey=92201144751946579ec43e3a58dfd6da`
      );
      setNews(response.data.articles || []);
      setError(null);
    } catch (error) {
      setError(error?.message || "Unable to load news");
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} onSearch={fetchNews} />
      
      <NewsList news={news} />
    </>
  );
}

export default Home;
