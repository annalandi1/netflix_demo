import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './Nav.css';

import NavComponent from './components/NavComponent';
import GenresComponent from './components/GenresComponent';
import CarouselComponent1 from './components/CarouselComponent1';
import Title1 from './components/Title1';
import MultiCarouselComponent from './components/MultiCarouselComponent';

import Title2 from './components/Title2';
import MultiCarouselComponent2 from './components/MultiCarouselComponent2';
import Title3 from './components/Title3';
import MultiCarouselComponent3 from './components/MultiCarouselComponent3';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <div className="App" style={{backgroundColor: "#1a1a19"}}>
      <header >
        <NavComponent />
      </header>
      <main>
        <GenresComponent />
        <CarouselComponent1/>
        <Title1/>
        <MultiCarouselComponent/>
        <Title2/>
        <MultiCarouselComponent2/>
        <Title3/>
        <MultiCarouselComponent3/>
      </main>
      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
}

export default App;
