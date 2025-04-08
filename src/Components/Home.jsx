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
                <h3 className="textboxes">
                To be a global market leader in the conformance and compliance industry, contributing to a
sustainable future by delivering innovative and reliable quality assurance solutions. This vision
aligns with Saudi Vision 2030's focus on sustainable development and a high quality of life.
                </h3>
            </div>

            {/* Bar 3 - Mission */}
            <div
                id="bar-3"
                ref={(el) => (sectionsRef.current[1] = el)}
                className={`home-bar-3 ${visibleSections["bar-3"] ? "show" : ""}`}
            >
                <h2>Our Mission</h2>
                <h3 className="textboxes">
                To provide <strong>SET (simple, efficient, and timely)</strong> quality assurance solutions, continuously
improving our services through professionalism, accuracy, competency, and a relentless focus
on customer satisfaction, ensuring sustainable and quality services for consumers.

                </h3>
            </div>

            <div
    id="bar-4"
    ref={(el) => (sectionsRef.current[2] = el)}
    className={`home-bar-4 ${visibleSections["bar-4"] ? "show" : ""}`}
>
    <h2>Our Commitment to Quality</h2>
    <h3 className="textboxes">
        <strong>At GLOBAQ, </strong>quality is at the heart of everything we do. We are dedicated to adhering to the
        principles of total quality management, ensuring that our services meet the highest standards of
        excellence. Our quality policy emphasizes:
        
        <ul className="custom-list">
            <li>  Meeting and exceeding customer requirements.</li>
            <li>  Ensuring compliance with legal, regulatory, and industry standards.</li>
            <li>  Fostering continuous improvement in all our processes.</li>
            <li>  Empowering our team through training and development.</li>
            <li>  Promoting sustainability in our operations and services.</li>
        </ul>
        
        By upholding these commitments, we aim to build long-term relationships with our customers,
        stakeholders, and the community, contributing to a sustainable and quality-focused future while
        ensuring mutual growth and success, in line with the overarching goals of <strong>Saudi Vision 2030.</strong>
    </h3>
</div>



            {/* <div
                id="bar-5"
                ref={(el) => (sectionsRef.current[3] = el)}
                className={`home-bar-5 ${visibleSections["bar-5"] ? "show" : ""}`}
            >
                <h2>What We Do</h2>
                <h3 className="textboxes">
                GLOBAQ specializes in providing comprehensive quality assurance solutions designed to
                simplify compliance processes and enhance organizational performance. We work closely with
                our clients to understand their challenges and deliver practical, efficient, and timely solutions
                that align with international standards and regulations.
                Our services support the growth and development of various sectors, a key objective of Vision
                2030.
                Our major services include:
                
                <ul className="custom-list" >
                    <li><strong> Management System Audits: </strong> (Vendor Assessments, Schedule Q - Quality Assessments,Schedule D - Safety Assessments, and Management System Certification Audits)</li>
                    <li><strong>Trainings: </strong>(ISO Trainings, QHSE trainings and other industry specific trainings)</li>
                    <li><strong>ISO Consultancy: </strong></li>
                    <li><strong>Audit Assistance: </strong>(ISO Internal audits, ISO third-party audits, Pre-Qualification audits )</li>
                    <li><strong>Laboratory Quality Management System Services: </strong>(ISO/IEC 17025 Consultancy,Support for accreditation process)</li>
                </ul>
                
                By upholding these commitments, we aim to build long-term relationships with our customers,
stakeholders, and the community, contributing to a sustainable and quality-focused future while
ensuring mutual growth and success, in line with the overarching goals of <strong>Saudi Vision 2030.</strong>
                </h3>
            </div> */}

        
            
        </>
    );
}

export default Home;
