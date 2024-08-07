import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import earthdayImage from '../../../assets/images/earth day.webp'; 
import earthmonthImage from '../../../assets/images/dziko shirt.webp'; 
import climatecrisisImage from '../../../assets/images/1000143174.webp'; 
import climateeventImage from '../../../assets/images/1000143128.webp'; 
import GGDImage from '../../../assets/images/DZIKO 1.webp'; 
import Spinner from '../../spinner/spinner';

const News = () => {
    const newsData = [
        {
            title: "🌍 #EarthDay Announcement 🌍",
            description: "Join us next month for the launch of our #TakeAction on Climate Change! Become a Dziko Climate Advocate! campaign, Empowering Communities, Sustaining Our Environment!",
            image: earthdayImage,
            content: "This Earth Day, we're thrilled to showcase and inspire ideas for positive local change that can help mitigate the global climate crisis. As the continent with the youngest overall population, Africa has the potential to significantly impact future generations by combating the effects of climate change on a broad scale.\n\nJoin us next month for the launch of our # Climate Action Heroes Challenge! Become a Dziko Climate Advocate!\n\nEmpowering Communities, Sustaining Our Environment.",
            date: "2024-04-22"
        },
        {
            title: "🌍 Earth Month Campaign: Mobilizing for Climate Action 🌍",
            description: "In observance of Earth Month, we are proud to announce our focus on 'Community Engagement' as one of the five key areas for change in addressing climate-related challenges. As we lead this campaign, we invite collaboration and partnership from institutions ready to embark on this journey with us.",
            image: earthmonthImage,
            date: "2024-04-22"
        },
        {
            title: "🌍 Climate Crisis Awareness Campaign 🌍",
            description: "Join us in our mission to raise awareness and understanding of the Climate Crisis! We are committed to providing communities with a comprehensive overview of the Climate Crisis, its causes, and potential consequences. Our goal is to foster a foundation of awareness that inspires action and positive change.",
            image: climatecrisisImage,
            date: "2024-04-01"
        }
    ];

    const eventData = [
        {
            title: "Green Ghana Day Campaign",
            date: "2024-05-28",
            location: "Ghana",
            description: "On Green Ghana Day, Dziko CCJ is committed to making a positive impact on Ghana's environment through a nationwide tree planting initiative. We're seeking passionate volunteers to join us in planting trees across various locations in Ghana. Here's why you should get involved:\n- Be a part of a critical initiative for a greener and healthier Ghana. \n- Give back to your community through impactful volunteer work.\n- Network with like-minded individuals who share your passion for sustainability.\nBecome a Green Ghana Day Volunteer with Dziko CCJ! Join us on 7th June, 2024 to plant trees nationwide.",
            image: GGDImage,
        },
        {
            title: "Climate Action Heroes Challenge",
            date: "2024-05-10",
            location: "Ghana",
            description: "As part of our commitment to 'Advocacy and Leadership,' we're empowering communities across Ghana to take action on climate change. We invite you to join us as we seek 500 volunteers to become advocates for climate action and leaders within their communities.",
            image: climateeventImage,
        }
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Show spinner while loading
    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <Navbar />
            <div className="bg-indigo-900 py-4"></div>
            <h2 className="text-3xl font-bold mb-6 mt-10 sm:max-w-50 mx-5 px-04 text-indigo-900 mt-32">Upcoming Events</h2>
            <EventList eventData={eventData} />
            <h2 className="text-3xl font-bold mb-6 mt-10 sm:max-w-50 mx-5 px-04 text-indigo-900">Latest News</h2>
            <div className="news-list mx-5">
                {newsData.map((article, index) => (
                    <div key={index} className={`news-card bg-white p-4 rounded-lg mb-4 flex flex-col sm:flex-row`}>
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-72 object-cover rounded-lg mr-4 mb-4 sm:mb-0 sm:mr-8"
                            loading="lazy" // Lazy loading added here
                        />
                        <div className="news-content">
                            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                            <p className="text-sm text-gray-600 mb-2">Date: {new Date(article.date).toLocaleDateString()}</p>
                            <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

const EventList = ({ eventData }) => {
    return (
        <div className="event-list mx-5">
            {eventData.map((event, index) => (
                <div key={index} className="event-card bg-indigo-100 p-4 rounded-lg mb-4 flex flex-col sm:flex-row">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-72 object-cover rounded-lg mr-16 mb-4 sm:mb-0 sm:mr-8"
                        loading="lazy" // Lazy loading added here
                    />
                    <div className="event-content">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">Date Posted: {new Date(event.date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-600 mb-2">Location: {event.location}</p>
                        <p className="text-sm text-gray-600 mb-2 whitespace-pre-wrap">{event.description
                        }</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;
