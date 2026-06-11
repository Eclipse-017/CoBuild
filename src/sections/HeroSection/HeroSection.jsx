import './HeroSection.css';
import Button from '../../components/Button/Button'

function HeroSection() {
  return (
    <>  
      {/* HEADER */}
      <header>
        <nav className="navigation">
          <div className="logo">
            <img src="src/assets/graphics.png" alt="Logo" /> 
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
        <section className="hero-section">

          <div className="hero-content">
            <h1>
              Explore Our Solar System Through Data
            </h1>
            <p>
              Understand the planets not just by name, but by measurable
              facts. From size and mass to gravity and density, this page
              breaks down the solar system in a clear, data-driven way.
            </p>

            <div className="buttons">
              <Button> <a href="#image-section-id">Explore the Data</a></Button>
              <Button className='btn-alt'> <a href="#form-section-id">Contact Us</a></Button>
            </div>
          </div>

          <div className="hero-image">
            <img src="src/assets/heroimage.png" alt="The Blue Earth" /> 
          </div>

        </section>
    </> );           
}

export default HeroSection;