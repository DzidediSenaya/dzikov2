import React, { useState, useEffect } from 'react';
import './projects.css';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import attentionGrabberImage1 from '../../../assets/images/ecologo.webp';
import attentionGrabberImage2 from '../../../assets/images/ecologo2.webp';
import projectImage1 from '../../../assets/images/1000143128.webp';
import projectImage2 from '../../../assets/images/1000143168.webp';
import projectImage3 from '../../../assets/images/1000143171.webp'
import projectImage4 from '../../../assets/images/1000143174.webp'
import projectImage5 from '../../../assets/images/IMG_6872-2.webp'
import projectImage6 from '../../../assets/images/IMG_6874-2.webp'
import projectImage7 from '../../../assets/images/IMG_6876-2.webp'
import projectImage9 from '../../../assets/images/IMG_6881-2.webp'
import projectImage10 from '../../../assets/images/IMG_6888-2.webp'
import projectImage11 from '../../../assets/images/IMG_6996-2.webp'
import projectImage12 from '../../../assets/images/1000143195.webp'
import projectImage13 from '../../../assets/images/1000143225.webp'
import projectImage14 from '../../../assets/images/1717936595766-ggd1.webp'
import projectImage15 from '../../../assets/images/Screenshot_20240607_200100_WhatsApp_1_cropped.webp'
import projectImage16 from '../../../assets/images/1717936604753-ggd4.webp'
import projectImage17 from '../../../assets/images/1717936605183-ggd2.webp'
import projectImage18 from '../../../assets/images/20240607_124510.webp'
import projectImage19 from '../../../assets/images/20240607_132003.webp'
import projectImage21 from '../../../assets/images/1000143256.webp'
import projectImage22 from '../../../assets/images/1000143188.webp'
import projectImage23 from '../../../assets/images/1000143196.webp'
import projectImage24 from '../../../assets/images/1000143197.webp'
import projectImage26 from '../../../assets/images/1000143216.webp'
import projectImage27 from '../../../assets/images/1000143218.webp'
import projectImage28 from '../../../assets/images/IMG-20240608-WA0107.webp'
import projectImage29 from '../../../assets/images/IMG-20240607-WA0100.webp'
import projectImage30 from '../../../assets/images/IMG-20240608-WA0133.webp'
import projectImage31 from '../../../assets/images/IMG-20240607-WA0076.webp'

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
                <p className="mb-12 sm:max-w-50 mx-5 px-0">One of our flagship projects is the Young Eco Warriors Project, which aims to educate students about climate change and empower them to take action in their communities. Through this project, we partner with schools and organizations to deliver workshops, training sessions, and hands-on activities that inspire young people to become advocates for the planet.</p>

                <h3 className="text-3xl font-bold mb-4 sm:max-w-50 mx-5 px-04">Our Climate Change Workshop at the Divine Grace School in Oyarifa, Accra</h3>
                <h4 className="text-xl font-bold mb-6 sm:max-w-50 mx-5 px-04">Theme: Rallying Youth for Climate Action </h4>

                <p className="mb-2 sm:max-w-50 mx-5 px-0">Ghana, like many countries, grapples with the formidable impact of climate change. As temperatures rise, weather patterns become erratic, and ecosystems face unprecedented threats, the need for collective action and education has become paramount. Recognizing the urgency of this situation, we launched a workshop themed, "Rallying Youth for Climate Action".</p>

                <p className="mb-2 sm:max-w-50 mx-5 px-0">Our project aimed to educate students about climate change and empower them to contribute as youth in mitigating its effects on human life. On Friday, 26th January 2024, we held our inaugural workshop at the Divine Grace School in Oyarifa, which left a lasting impact with enthusiastic engagement from both students and staff.

Buoyed by this success, our young eco-warriors formed teams dedicated to specific climate action areas, contributing their efforts to Sustainable Development Goals (SDGs) related to climate resilience. These teams are ready to lead the charge in our community, supporting SDGs 13, 7, and 12 through the following focused missions:</p>

<p className="mb-2 sm:max-w-50 mx-5 px-0">Team Reforestation (SDG 13)
These relentless youth are all geared up to support reforestation efforts by planting more trees in our community and actively joining the campaign against the indiscriminate cutting of trees.</p>

<p className="mb-2 sm:max-w-50 mx-5 px-0">Team Cleaner Transportation (SDGs 11 and 13)
This team is exploring greener sources of transport such as electric trains and buses. They are promoting eco-friendly transportation modes, including walking and cycling, to reduce dependence on conventional fuel vehicles, especially for short distances.</p>

 <p className="mb-2 sm:max-w-50 mx-5 px-0">Team Waste Segregation and Life Below Water (SDG 14)
Committed to sustainable waste management, this team is separating and recycling plastic waste to curb the pollution of our oceans, water bodies, and aquatic life. They showcased their resourcefulness by turning plastic waste into desirable items like aprons and side bags.</p>

<p className="mb-2 sm:max-w-50 mx-5 px-0"> Team Cleaner Energy (SDG 7)
These young eco-warriors aim to lead the charge in advocating for cleaner energy alternatives like solar and hydropower while campaigning against the use of fossil fuels.</p>

<p className="mb-2 sm:max-w-50 mx-5 px-0">Team Sustainability (SDG 12)
This team is campaigning for sustainable practices such as water conservation to avoid wasting water and curb the overconsumption of resources.</p>

<p className="mb-2 sm:max-w-50 mx-5 px-0">In our subsequent meeting, the students eagerly shared their remarkable initiatives aimed at combating climate change. From innovative projects to creative solutions, each idea showed their dedication and commitment to safeguarding our planet. Some students showcased their handcrafted creations, turning plastic sachets into aprons, handbags, pencil cases, and other creative items. Their resourcefulness and ingenuity were truly inspiring.</p>

<p className="mb-2 sm:max-w-50 mx-5 px-0">Throughout the day, we witnessed the power of collaboration as students and staff worked together to address environmental challenges. Their enthusiasm was contagious, reminding us that collective action is key in the fight against climate change. Together, we are empowering these young eco-warriors to make a difference in their community and beyond.</p>

<p className="mb-12 sm:max-w-50 mx-5 px-0">As we continue on this journey, let us remember the words of Margaret Mead: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has." Together, we can create a brighter, greener future for generations to come.</p>

                <h5 className="text-3xl font-bold sm:max-w-50 mx-5 px-04">Project Gallery</h5> 
                </section>
                <section>
                <ProjectGallery /> 
            </section>
            <section className="max-w-3xl mx-auto py-4 sm:max-w-50 mx-5 px-0">
                <div>
            <h5 className="text-3xl text-center font-bold sm:max-w-50 mx-5 px-04 ">Green Ghana Day Campaign</h5>  
            <h3 className="text-3xl font-bold mb-4 sm:max-w-50 mx-5 px-04">Celebrating a Successful Tree Planting Campaign</h3>
            <p className="mb-2 sm:max-w-50 mx-5 px-0">In the spirit of environmental stewardship and community engagement, the Dziko Centre for Climate Justice proudly joined hands with volunteers nationwide to commemorate Green Ghana Day 2024. This annual event, dedicated to reforestation and environmental conservation, saw unprecedented enthusiasm and commitment from individuals across Ghana.</p>

            <p className="mb-2 sm:max-w-50 mx-5 px-0">With a collective vision of fostering a greener and more sustainable future, our team embarked on an ambitious mission: to plant over 10,000 trees nationwide. Armed with our tools and unwavering determination, volunteers from diverse backgrounds converged to contribute to Ghana's reforestation efforts.</p>

            <p className="mb-2 sm:max-w-50 mx-5 px-0">From bustling urban centers to remote communities, the spirit of Green Ghana Day reverberated across the nation. Volunteers, young and old, urban dwellers and rural residents, came together as one cohesive force, united by a common purpose: to replenish our forests, protect our biodiversity, and combat climate change.</p>

            <p className="mb-2 sm:max-w-50 mx-5 px-0">As we reflect on the success of Green Ghana Day 2024, we extend our heartfelt gratitude to every individual who contributed their time, energy, and passion to this noble cause. Your dedication and commitment have left an indelible mark on our environment and inspired countless others to join the fight for a greener Ghana.</p>.

            <p className="mb-12 sm:max-w-50 mx-5 px-0">As we celebrate the achievements of Green Ghana Day, we will not rest on our laurels. Our work is far from over. Together, we will continue to nurture the seeds of change we've planted, cultivating a legacy of environmental stewardship and sustainability for generations to come.</p>
            <h5 className="text-3xl font-bold sm:max-w-50 mx-5 px-04">Project Gallery</h5> 
            </div>
            </section>
            <section>
                <GGDGallery /> 
            </section>
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
        projectImage9,
        projectImage10,
        projectImage11,
        projectImage12,
        projectImage13,
        projectImage21,
        projectImage22,
        projectImage23,
        projectImage24,
        projectImage26,
        projectImage27,
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="py-8 lg:w-3/5 mx-auto"> {/* Set width to 90% on small screens */}
            <div className="gallery-container relative mb-12">
                <div />
                <div className="w-4/5 lg:w-full mx-auto flex items-center justify-between"> {/* Set width to 80% on larger screens */}
                    <button style={{ margin: "0", backgroundColor: "indigo"}} className="gallery-btn prev sm:ml-0" onClick={prevImage}>&#10094;</button>
                    <img className="gallery-img" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                    <button style={{ margin: "0", backgroundColor: "indigo" }} className="gallery-btn next sm:mr-0" onClick={nextImage}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};   

    
const GGDGallery = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        projectImage14,
        projectImage15,
        projectImage16,
        projectImage17,
        projectImage18,
        projectImage19,
        projectImage28,
        projectImage29,
        projectImage30,
        projectImage31,
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
                <button style={{ margin: "0", backgroundColor: "indigo"}} className="gallery-btn prev sm:ml-0" onClick={prevImage}>&#10094;</button>
                <img className="gallery-img" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <button style={{ margin: "0", backgroundColor: "indigo" }} className="gallery-btn next sm:mr-0" onClick={nextImage}>&#10095;</button>
            </div>
        </div>
    </div>
);
}; 
export default Projects;