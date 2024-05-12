import React from 'react';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import earthdayImage from '../../../assets/images/earth day.jpg';
import earthmonthImage from '../../../assets/images/dziko shirt.jpg';
import climatecrisisImage from '../../../assets/images/climate crisis.jpg';
import climateeventImage from '../../../assets/images/1000143203.jpg';
import { useEffect } from 'react';
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
            title: "Climate Action Heroes Challenge",
            date: "2024-05-10",
            location: "Ghana",
            description: "As part of our commitment to 'Advocacy and Leadership,' we're empowering communities across Ghana to take action on climate change. We invite you to join us as we seek 500 volunteers to become advocates for climate action and leaders within their communities.",
            image: climateeventImage,
        }


    ];

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


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
                        <img src={article.image} alt={article.title} className="w-72 object-cover rounded-lg mr-4 mb-4 sm:mb-0 sm:mr-8" />
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
                    <img src={event.image} alt={event.title} className="w-72 object-cover rounded-lg mr-4 mb-4 sm:mb-0 sm:mr-8" />
                    <div className="event-content">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">Date Posted: {new Date(event.date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-600 mb-2">Location: {event.location}</p>
                        <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default News;
