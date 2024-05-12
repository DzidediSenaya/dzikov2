import React, { useState, useEffect } from 'react';
import './projects.css';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import attentionGrabberImage1 from '../../../assets/images/ecologo.jpg';
import attentionGrabberImage2 from '../../../assets/images/ecologo2.jpg';
import projectImage1 from '../../../assets/images/1000143128.jpg';
import projectImage2 from '../../../assets/images/1000143168.jpg';
import projectImage3 from '../../../assets/images/1000143171.jpg'
import projectImage4 from '../../../assets/images/1000143174.jpg'
import projectImage5 from '../../../assets/images/1000143188.jpg'
import projectImage6 from '../../../assets/images/1000143195.jpg'
import projectImage7 from '../../../assets/images/1000143196.jpg'
import projectImage9 from '../../../assets/images/1000143197.jpg'
import projectImage10 from '../../../assets/images/1000143203.jpg'
import projectImage11 from '../../../assets/images/1000143216.jpg'
import projectImage12 from '../../../assets/images/1000143218.jpg'
import projectImage13 from '../../../assets/images/1000143225.jpg'
import projectImage14 from '../../../assets/images/1000143227.jpg'
import projectImage15 from '../../../assets/images/1000143234.jpg'
import projectImage17 from '../../../assets/images/1000143236.jpg'
import projectImage18 from '../../../assets/images/1000143238.jpg'
import projectImage19 from '../../../assets/images/1000143244.jpg'
import projectImage20 from '../../../assets/images/1000143254.jpg'
import projectImage21 from '../../../assets/images/1000143256.jpg'

const Projects = () => {
    const [showHomeImage1, setShowHomeImage1] = useState(true);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowHomeImage1((prevShowHomeImage1) => !prevShowHomeImage1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bg-blue-700 py-4"></div>
            <section id="home" className="py-8 lg:w-3/5 mx-auto sm:w-60 px-6 mt-8"> {/* Set width to 90% on small screens */}
                <img src={showHomeImage1 ? attentionGrabberImage1 : attentionGrabberImage2} alt="Home Image" />
            </section>
            <section className="max-w-3xl mx-auto py-4 sm:max-w-50 mx-5 px-0"> {/* Set width to 90% on small screens */}
                <h2 className="text-3xl font-bold mb-6 sm:max-w-50 mx-5 px-04">Our Projects</h2>
                <p className="mb-6 sm:max-w-50 mx-5 px-0">One of our flagship projects is the Young Eco Warriors Project, which aims to educate students about climate change and empower them to take action in their communities. Through this project, we partner with schools and organizations to deliver workshops, training sessions, and hands-on activities that inspire young people to become advocates for the planet.</p>
                <h5 className="text-3xl font-bold mb-6 sm:max-w-50 mx-5 px-04">Project Gallery</h5>  
            </section>
            <ProjectGallery />
            <Footer />
        </div>
    );
};

const ProjectGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        projectImage1,
        projectImage2,
        projectImage3,
        projectImage4,
        projectImage5,
        projectImage6,
        projectImage7,
        projectImage18,
        projectImage9,
        projectImage10,
        projectImage11,
        projectImage12,
        projectImage13,
        projectImage14,
        projectImage15,
        projectImage21,
        projectImage17,
        projectImage18,
        projectImage19,
        projectImage20,
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div className="py-8 lg:w-3/5 mx-auto"> {/* Set width to 90% on small screens */}
            <div className="gallery-container relative mb-12">
                <div />
                <div className="w-4/5 lg:w-full mx-auto flex items-center justify-between"> {/* Set width to 80% on larger screens */}
                    <button style={{ margin: "0" }} className="gallery-btn prev sm:ml-0" onClick={prevImage}>&#10094;</button>
                    <img className="gallery-img" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                    <button style={{ margin: "0" }} className="gallery-btn next sm:mr-0" onClick={nextImage}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};   
export default Projects;
