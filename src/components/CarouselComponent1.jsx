import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselComponent1() {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Function to fetch random horror movie items
    const fetchRandomItems = async () => {
      const apiBaseUrl = 'http://www.omdbapi.com/';
      const apiKey = '180319ee'; 
      const searchQuery = 'action'; 
  
      try {
        setLoading(true);
        setError(null);
  
        // Fetch a list of horror movies (replace with your actual URL if needed)
        const response = await fetch(
          `${apiBaseUrl}?apikey=${apiKey}&s=${searchQuery}&page=1`
        );
        const data = await response.json();
  
        if (data.Response === 'True') {
          // Filter out movies without an image or title
          const filteredSlides = data.Search.filter(
            (item) => item.Poster && item.Title
          );
          setSlides(filteredSlides.slice(0, 3)); // Get only the first 3 items
        } else {
          throw new Error(data.Error || 'No results found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    // Fetch items on component mount
    useEffect(() => {
      fetchRandomItems();
    }, []);
  
    // Render loading or error states
    if (loading) {
      return <p>Loading carousel...</p>;
    }
  
    if (error) {
      return <p style={{ color: 'red' }}>Error: {error}</p>;
    }
  
    // Render the carousel
    return (
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={3000}>
            <img
              className="d-block w-100"
              src={slide.Poster}
              alt={slide.Title}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>{slide.Title}</h3>
              <p>{slide.Year}</p> 
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  
  export default CarouselComponent1;
