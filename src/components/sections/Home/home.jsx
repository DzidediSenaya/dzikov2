import React, { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import image1 from '../../../assets/images/image1.jpg';
import image2 from '../../../assets/images/image2.jpg';
import image3 from '../../../assets/images/image3.jpg';
import { FaInfoCircle, FaHandsHelping, FaEnvelope } from 'react-icons/fa';
import image5 from '../../../assets/images/earth day.jpg';
import image6 from '../../../assets/images/dziko shirt.jpg';
import image4 from '../../../assets/images/IMG-20240530-WA0010.jpg';


export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true); // State to control automatic rotation
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Function to change image automatically
    const changeImageAutomatically = () => {
      if (autoRotate) {
        setCurrentImage(prevImage => (prevImage + 1) % 3);
      }
    };
    

    // Start automatic rotation
    const interval = setInterval(changeImageAutomatically, 3000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, [autoRotate]); // Depend on autoRotate state

  const images = [image1, image2, image3, image4, image5, image6]; 
  const newsTitles = ["1", "2", "3", "Green Ghana Day Campaign","Earth Day Announcement", "Earth Month Campaign"];

  const changeImage = (index) => {
    setCurrentImage(index);
    setAutoRotate(false); // Stop automatic rotation when user clicks on a dot
  };

  // Listen for scroll events to change navbar color
  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll event here
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Handle key down event here
    };

    const handleTouchStart = (event) => {
      // Handle touch start event here
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, [currentImage, autoRotate, images.length]);

  const HomePageNewsSection = () => {
    useEffect(() => {
      axios.get('/api/news')
        .then(response => setNews(response.data.news.slice(0, 2))) // Limit to two news articles
        .catch(error => console.error('Error fetching news:', error));
    }, []);
  };

  const handleNewsCardClick = (id) => {
    // Navigate to the respective news article page
    // You can define your navigation logic here
    console.log(`Clicked on news card with id ${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-indigo-800 py-4"></div>

      <section id="home" className="hero relative mb-20">
        <div className="carousel">
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className={`slide ${currentImage === index ? 'active' : ''}`}>
              <img src={image} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="text-overlay"></div>
            </div>
          ))}
        </div>
        <div className="dot-container">
          {images.slice(0, 3).map((_, index) => (
            <span key={index} className={`dot ${currentImage === index ? 'active' : ''}`} onClick={() => changeImage(index)}></span>
          ))}
        </div>
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full bg-black/50 text-white'>
          <div className="text-4xl md:text-6xl font-bold flex flex-col gap-y-4 w-full md:w-3/5 text-center items-center">
            <p className="text-2xl mt-8 md:text-2xl lg:text-2xl xl:text-3xl">Welcome to Dziko Centre for</p>
            <span className="bg-indigo-900 px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6 xl:px-10 xl:py-8">
              Climate Justice
            </span>
          </div>
        </div>
      </section>

      <section id="about" className="py-40 text-center w-1/2 flex flex-col items-center gap-y-6">

        <div className="flex w-full gap-x-4 justify-center  items-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-4 uppercase">Discover Who We Are</h2>
        </div>
        <p className="text-lg  text-gray-700 mb-8">
          <p>We empower young people to take charge in mitigating the effects of climate change, </p>
          <p>and are committed to excellence and accountability in implementation.</p>
          <p>Together, we aim to improve community resilience, health, and quality of life, </p>
          <p>promoting sustainability.</p>
        </p>
        <Link to="/about" className="cta-btn bg-indigo-800 text-white py-2 px-6 rounded-full hover:bg-indigo-500 mb-16">Learn more</Link>
      </section>


      <section id="projects" className="py-20 text-center md:grid md:grid-cols-3 md:gap-4 mx-auto pt-20 pb-20">
        <div
          className="mb-8 md:mb-0 bg-indigo-100 relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
          style={{ height: "calc(11cm + 102px)", paddingTop: "20px" }} // Adjusted height and padding
        >
          <FaInfoCircle className="text-5xl text-indigo-900 absolute top-4 left-1/2 transform -translate-x-1/2" />

          <h2 className="text-3xl font-bold text-indigo-900 mb-4 mt-16">Our Projects</h2> {/* Adjusted margin-top */}
          <p className="text-lg text-gray-700 mb-16 h-40">
            Explore our initiatives and campaigns aimed at addressing pressing environmental issues such as deforestation, plastic pollution, and climate change.
          </p>
          <Link to="/projects" className="cta-btn bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-500">View Projects</Link>
        </div>

        <div
          className="mb-8 md:mb-0 bg-indigo-100 relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
          style={{ height: "calc(11cm + 102px)", paddingTop: "20px" }} // Adjusted height and padding
        >
          <FaHandsHelping className="text-5xl text-indigo-900 absolute top-4 left-1/2 transform -translate-x-1/2" />
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 mt-16">Support Us</h2> {/* Adjusted margin-top */}
          <p className="text-lg text-gray-700 mb-8">
            Join us in our mission to create a sustainable future by supporting our work. Your donations help fund our projects and educational programs. Additionally, we offer exciting opportunities for volunteering. Whether you're passionate about planting trees, organizing community events, or spreading awareness, there's a place for you in our volunteer network.
          </p>
          <Link to="/donate" className="cta-btn bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-500">Get Involved</Link>
        </div>

        <div
          className="bg-indigo-100 relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
          style={{ height: "calc(11cm + 102px)", paddingTop: "20px" }} // Adjusted height and padding
        >
          <FaEnvelope className="text-5xl text-indigo-900 absolute top-4 left-1/2 transform -translate-x-1/2" />
          <h2 className="text-3xl font-bold text-indigo-900 mb-4 mt-16">Contact Us</h2> {/* Adjusted margin-top */}
          <p className="text-lg text-gray-700 mb-36">
            Have questions or want to collaborate? Reach out to us and let's work together to make a positive impact on the environment.
          </p>
          <Link to="/contact" className="cta-btn bg-indigo-900 text-white py-2 px-6 rounded-full hover:bg-indigo-500">Get in Touch</Link>
        </div>
      </section>
      
      <section className="py-20 text-center mx-auto mt-8 mb-2">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">News and Events</h2>
        <p className="text-lg text-gray-700 mb-8">
          Stay Updated with Our Latest Initiatives and Environmental Campaigns.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* News cards */}
          {images.slice(3, 6).map((image, index) => (
            <Link key={index} to={`/news`} className="news-card-wrapper">
              <img src={image} alt={newsTitles[index + 3]} className="news-card-image" />
              <h3 className="text-lg font-semibold mb-16 mt-4">{newsTitles[index + 3]}</h3>
            </Link>
          ))}
        </div>
        <Link to="/news" className="cta-btn bg-indigo-800 text-white py-2 px-6 rounded-full hover:bg-indigo-500">Latest News</Link>
      </section>
      <Footer />
    </div>
  );
}