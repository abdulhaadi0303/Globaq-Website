import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

// Import images from the assets folder
import logo from "../assets/Logo.jpg";
import img1 from "../assets/pic 1.jpg";
import img4 from "../assets/pic 4.jpg";
import img2 from "../assets/pic 2.jpg";
import img8 from "../assets/pic 8.jpg";
import img3 from "../assets/pic 3.jpg";

const images = [img1, img4, img2, img8, img3]; // Add more images if needed

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionsRef = useRef([]); // References to track each section's visibility
    const [visibleSections, setVisibleSections] = useState({});

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto-slide effect every 2.5 seconds
    useEffect(() => {
        const interval = setInterval(nextImage, 2500);
        return () => clearInterval(interval);
    }, []);

    // Scroll animation using Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.3 } // Trigger when 30% of the element is visible
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            {/* Bar 1 for Image Carousel */}
            <div className="home-bar-1">
                <button className="carousel-btn" onClick={prevImage}>
                    &#10094;
                </button>

                <div className="image-container">
                    <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
                </div>

                <button className="carousel-btn" onClick={nextImage}>
                    &#10095;
                </button>
            </div>

            {/* Bar 2 - Vision */}
            <div
                id="bar-2"
                ref={(el) => (sectionsRef.current[0] = el)}
                className={`home-bar-2 ${visibleSections["bar-2"] ? "show" : ""}`}
            >
                <h2>Our Vision</h2>
                <h3>
                    To be a global market leader in <strong>conformance and compliance</strong> industry to contribute in
                    <strong> sustainable</strong> future
                </h3>
            </div>

            {/* Bar 3 - Mission */}
            <div
                id="bar-3"
                ref={(el) => (sectionsRef.current[1] = el)}
                className={`home-bar-3 ${visibleSections["bar-3"] ? "show" : ""}`}
            >
                <h2>Our Mission</h2>
                <h3>
                    To provide SET (simple, efficient, and timely) quality assurance solutions, continuously improving our
                    services through professionalism, accuracy, competency, and a relentless focus on customer satisfaction,
                    ensuring sustainable and quality services for consumers.
                </h3>
            </div>

            {/* Bar 4 - Policy */}
            <div
                id="bar-4"
                ref={(el) => (sectionsRef.current[2] = el)}
                className={`home-bar-4 ${visibleSections["bar-4"] ? "show" : ""}`}
            >
                <h2>Our Policy</h2>
                <h3>
                    We are dedicated to providing high-quality services, including but not limited to Management System Audits,
                    Trainings, ISO Consultancy, Audit Assistance, Laboratory Quality Management System Services, etc., while
                    adhering to the principles of best total quality management.
                </h3>
                <h2>To achieve this, we will:</h2>
                <ul className="custom-list">
                    <li>
                        <strong>Meet Customer Requirements:</strong> Deliver tailored solutions that meet and exceed customer
                        expectations.
                    </li>
                    <li>
                        <strong>Ensure Compliance:</strong> Adhere to all applicable legal, regulatory, and industry standards in
                        all our services.
                    </li>
                    <li>
                        <strong>Foster Continuous Improvement:</strong> Regularly review and enhance our processes to maintain
                        efficiency and effectiveness.
                    </li>
                    <li>
                        <strong>Empower Our Team:</strong> Invest in the development of our employees to ensure they are skilled,
                        knowledgeable, and aligned with our mission.
                    </li>
                    <li>
                        <strong>Promote Sustainability:</strong> Integrate sustainable practices into our operations and services to
                        contribute to a better future.
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Home;
