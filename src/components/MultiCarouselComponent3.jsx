import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Card } from 'react-bootstrap';

function MultiCarouselComponent3() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Stato per il primo elemento visibile
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funzione per recuperare i film
  const fetchRandomItems = async () => {
    const apiBaseUrl = 'http://www.omdbapi.com/';
    const apiKey = '180319ee';
    const searchQuery = 'fantasy';

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${apiBaseUrl}?apikey=${apiKey}&s=${searchQuery}&page=1`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        const filteredSlides = data.Search.filter(
          (item) => item.Poster && item.Title
        );
        setSlides(filteredSlides);
      } else {
        throw new Error(data.Error || 'Nessun risultato trovato');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Effettua il fetch al montaggio del componente
  useEffect(() => {
    fetchRandomItems();
  }, []);

  // Funzione per gestire il cambio di slide
  const handleSlide = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  // Render stato di caricamento o errore
  if (loading) {
    return <p>Caricamento in corso...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Errore: {error}</p>;
  }

  // Ottieni i film visibili
  const visibleSlides = slides.slice(currentIndex, currentIndex + 6);

  return (
    <Carousel
      activeIndex={currentIndex}
      onSelect={handleSlide}
      indicators={false}
      controls={true}
      interval={null} // Disabilita l'auto-scorrimento
    >
      {slides.map((_, slideIndex) => (
        <Carousel.Item key={slideIndex}>
          <Row>
            {visibleSlides.map((slide, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={2}>
                <Card className='border border-dark'>
                  <Card.Img
                    variant="top"
                    src={slide.Poster}
                    alt={slide.Title}
                    style={{ height: '350px', objectFit: 'cover'}}
                  />
                  <Card.Body
                    style={{height:"100px", backgroundColor:"#1a1a19"}}>
                    <Card.Title className='text-white'>{slide.Title}</Card.Title>
                    <Card.Text className='text-white'>{slide.Year}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MultiCarouselComponent3;