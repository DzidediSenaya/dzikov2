import React, { useState, useEffect } from 'react';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import { FaRegLightbulb, FaEye, FaUsers, FaHandshake, FaUserFriends, FaGlobe} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import profiles from './profiles';
import Spinner from '../../spinner/spinner';
import DPGImage from '../../../assets/images/dk.png';
import LebeneImage from '../../../assets/images/Lebene.png';
import './about.css';
import { Helmet } from 'react-helmet';

const About = () => {
    const [showFullProfile, setShowFullProfile] = useState(Array(profiles.length).fill(false));
    const [currentSection, setCurrentSection] = useState('');
    const [loading, setLoading] = useState(true);

    const toggleFullProfile = (index) => {
        setShowFullProfile(prevShowFullProfile => {
            const updatedShowFullProfile = [...prevShowFullProfile];
            updatedShowFullProfile[index] = !updatedShowFullProfile[index];
            return updatedShowFullProfile;
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.clientHeight;
                const scrollPosition = window.pageYOffset;
                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    setCurrentSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showIcon, setShowIcon] = useState('');

    useEffect(() => {
        if (currentSection === 'mission') {
            setShowIcon('lightbulb');
        } else if (currentSection === 'vision') {
            setShowIcon('eye');
        } else if (currentSection === 'approach') {
            setShowIcon('users');
        } else if (currentSection === 'team') {
            setShowIcon('handshake');
        } else if (currentSection === 'partners') {
            setShowIcon('user-friends');
        }

        return () => { };
    }, [currentSection]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
               <Helmet>
        <title>About - Dziko Centre for Climate Justice</title>
        <meta name="description" content="Learn more about our youth initiatives on climate change mitigation." />
        <meta property="og:title" content="About - Dziko Centre for Climate Justice" />
        <meta property="og:description" content="Learn about our vision, mission and dynamic team." />
      </Helmet>
            <Navbar />
            <div className="bg-sky-900 py-4"></div>

            <section id="mission" className="max-w-4xl mx-auto px-4 py-8 pt-56">
                <h1 className="text-3xl font-bold mb-4 text-indigo-800">About DZIKO CENTRE FOR CLIMATE JUSTICE (DZIKO CCJ) {showIcon === 'lightbulb' && <FaRegLightbulb className="inline animate-pulse" />}</h1>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-indigo-800">Our Mission {showIcon === 'lightbulb' && <FaGlobe className="inline animate-pulse" />}</h2>
                    <p className="text-lg text-gray-700">
                        DZIKO CCJ was founded in January 2024 with a bold mission: to empower the next generation of
                        environmental leaders and activists. We believe that young people have the power to drive positive change in
                        the world, particularly in the urgent fight against climate change and environmental degradation. Our organization is
                        dedicated to providing young people with the knowledge, skills, and resources they need to become effective advocates for
                        the planet.
                    </p>
                </div>
            </section>

            <section id="vision" className="max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-indigo-800">Our Vision <FaEye className="inline" /></h2>
                    <p className="text-lg text-gray-700">
                        Our vision is a world where every young person is empowered to take action to protect and preserve the
                        environment. We envision a future where sustainability is not just a buzzword but a way of life, and where every individual
                        understands their role in creating a more sustainable and equitable world for all.
                    </p>
                </div>
            </section>

            <section id="approach" className="max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8 text-indigo-800">
                    <h2 className="text-2xl font-bold mb-2">Our Approach <FaUsers className="inline" /></h2>
                    <p className="text-lg text-gray-700">
                        At DZIKO CCJ, we take a multi-faceted approach to environmental activism and education. We
                        believe in the power of education to inspire change, so we work with schools, communities, and youth organizations to
                        provide environmental education and awareness programs. We also support youth-led projects and initiatives that
                        address pressing environmental issues, from plastic pollution to deforestation to climate change.
                    </p>
                </div>
            </section>

            <section id="team" className="max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-indigo-800">Meet Our Expert Team: Driven Professionals Crafting Sustainable Solutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {profiles.map((profile, index) => (
                            <div key={profile.id} className="bg-white p-3 rounded-lg shadow flex flex-col items-center">
                                <h2 className="text-xl font-bold mb-4 mt-1 text-indigo-800">{profile.name}</h2>
                                <p className="mb-2 text-indigo-800 italic font-bold">{profile.role}</p>
                                <img
                                    className="w-full h-auto rounded-md mb-4"
                                    src={profile.image}
                                    alt={profile.name}
                                    style={{ maxWidth: '70%' }}
                                />
                                <button onClick={() => toggleFullProfile(index)} className="bg-indigo-800 hover:bg-indigo-400 text-white px-4 py-2 rounded-md transition duration-300">
                                    {showFullProfile[index] ? 'Hide Full Profile' : 'View Full Profile'}
                                </button>
                                {showFullProfile[index] && (
                                    <div className="profile-container overflow-y-auto max-h-64">
                                        <p className="text-gray-700 mt-4">
                                            {profile.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg overflow-hidden text-center">
        <p id="volunteersCount" className="text-6xl font-bold text-indigo-800 animate-pulse">
        <FontAwesomeIcon icon={faPeopleGroup} size="x" /> 100+
        </p>
        <p className="text-xl text-gray-800 mt-2 font-bold">Volunteers Nationwide</p>
      </div>
            </section>

            <section id="partners" className="max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-indigo-800">Our Partners <FaUserFriends className="inline" /></h2>
                    <p className="text-lg text-gray-700">
                        DZIKO CCJ collaborates with a range of partners, including businesses, non-profits, government agencies,
                        and educational institutions, to maximize our impact and reach. Together, we work towards common goals and
                        shared values, leveraging each other's strengths and resources to create positive change.
                    </p>
                </div>
                <div className="partners-container">
    <img className='partner-logo' src={DPGImage} alt="Partner 1" />
    <img className='partner-logo1' src={LebeneImage} alt="Partner 2" />
</div>

            </section>

            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2 text-indigo-800">Join Us {showIcon === 'handshake' && <FaHandshake className="inline animate-bounce" />}</h2>
                    <p className="text-lg text-gray-700">
                        Are you passionate about protecting the environment and making a difference in your community? Join DZIKO CCJ
                        today and become part of a growing movement of young people who are dedicated to saving the planet.
                        Together, we can create a brighter, greener future.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default About;
