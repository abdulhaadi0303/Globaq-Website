import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

// Import images from the assets folder
import img1 from "../assets/Logo.jpg";
import img2 from "../assets/react.svg";

const images = [img1, img2]; // Add more images if needed

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto-slide effect every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextImage, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Bar 1 for Image Carousel */}
            <div className="home-bar-1">
                <button className="carousel-btn" onClick={prevImage}>&#10094;</button>
                
                <div className="image-container">
                    <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />
                </div>
                
                <button className="carousel-btn" onClick={nextImage}>&#10095;</button>
            </div>

            {/* Bar 2 for Info Section */}
            <div className="home-bar-2">
                <h2>Our Vision</h2>
                <h3>To be a global market leader in <strong> conformance and compliance </strong> industry to contribute in
                <strong> sustainable</strong> future</h3>
                {/* Add navigation tabs here */}
            </div>

            <div className="home-bar-3">
                <h2>Our Mission</h2>
                <h3>To provide SET (simple, efficient, and timely) 
                quality assurance solutions, continuously improving our services through professionalism, accuracy, 
                competency, and a relentless focus on customer satisfaction, ensuring sustainable
                 and quality products/services for consumers.</h3>
                {/* Add navigation tabs here */}
            </div>

            <div className="home-bar-4">
                <h2>Our Policy</h2>
                    <h3>We are dedicated to provide high-quality services, including but not limited to Management
                 System Audits, Trainings, ISO Consultancy, Audit Assistance, Laboratory Quality Management System 
                 Services, etc. while adhering to the principles of best total quality management. Our focus is on
                  continuous improvement, professionalism, and competency, ensuring customer satisfaction and the 
                  delivery of sustainable, quality-driven solutions.</h3>
                <h3>To achieve this, we will:</h3>
                <ul class="custom-list">
                    <li><strong>Meet Customer Requirements:</strong> Deliver tailored solutions that meet and exceed customer expectations.</li>
                    <li><strong>Ensure Compliance:</strong> Adhere to all applicable legal, regulatory, and industry standards in all our services.</li>
                    <li><strong>Foster Continuous Improvement:</strong> Regularly review and enhance our processes to maintain efficiency and effectiveness.</li>
                    <li><strong>Empower Our Team:</strong> Invest in the development of our employees to ensure they are skilled, knowledgeable, and aligned with our mission.</li>
                    <li><strong>Promote Sustainability:</strong> Integrate sustainable practices into our operations and services to contribute to a better future.</li>
                </ul>

                {/* Add navigation tabs here */}
            </div>
        </>
    );
}

export default Home;
