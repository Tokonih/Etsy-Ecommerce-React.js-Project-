import { useEffect, useState } from "react";
import logo from "../img/logo.png"
import HomeBannerImg1 from "../img/banner.jpg";
import HomeBannerImg2 from "../img/banner.jpg";
import HomeBannerImg3 from "../img/banner.jpg";
import HomeBannerImg4 from "../img/banner.jpg";
import { IoArrowDown, IoBed, IoCaretDownSharp, IoCaretUpSharp, IoCheckmarkDoneOutline, IoChevronDown, IoChevronDownOutline, IoLogoWhatsapp, IoPersonCircle, IoReturnUpBackOutline, IoSearchOutline } from "react-icons/io5";
import { TfiZoomIn } from "react-icons/tfi";
import { FaShower } from "react-icons/fa";
import { BiShapeSquare } from "react-icons/bi";

function HomeHeader() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [realEstateIsHovered, setRealEstateDropDown] = useState(false);
    const [PropertyIsHovered, setPropertyDropDown] = useState(false);
    // const [UserIsHovered, setUserDropDown] = useState(false);

    const images = [
        HomeBannerImg1,
        HomeBannerImg2,
        HomeBannerImg3,
        HomeBannerImg4
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    const handleRealEstateDropDown = () => {
        setRealEstateDropDown(true);
        setPropertyDropDown(false);
    }
    const handleRealEstateDropdownClose = () => {
        setRealEstateDropDown(false);
    };
    const handlePropertyDropDown = () => {
        setPropertyDropDown(!PropertyIsHovered);
        setRealEstateDropDown(false);
    }
    const handlePropertyDropdownClose = () => {
        setPropertyDropDown(false);
    };
 

    const writeUpContent = (
        <div>
            <div className="writeup">
                <h2>Villa on Hollywood Boulevard</h2>
                <p className="house-locations">Hatteras Lane, Hollywood, FL 33019, USA</p>
                <div className="house-features">
                    <div>
                        <p>Bedrooms</p>
                        <div>
                            <p> <IoBed /></p>
                            <p>4</p>
                        </div>
                    </div>
                    <div>
                        <p>Bathrooms</p>
                        <div>
                            <p><FaShower /></p>
                            <p>4</p>
                        </div>
                    </div>
                    <div>
                        <p>Area</p>
                        <div>
                            <p><BiShapeSquare /></p>
                            <p>9350 sq ft</p>
                        </div>
                    </div>
                </div>
                <div className="price-tags">
                    <p>For Sale</p>
                    <h2>$850,000</h2>
                </div>
            </div>
            <div className="house-label">
                <p>Featured</p><span className="arrow"></span>
            </div>
        </div>
    );


    const newContent = (
        <div className="writeup">
            <h2>Villa on Grand Avenue</h2>
            <p className="house-locations">CocoWalk, 3015 Grand Avenue, Miami, FL 33133, USA</p>
            <div className="house-features">
                <div>
                    <p>Bedrooms</p>
                    <div>
                        <p> <IoBed /></p>
                        <p>4</p>
                    </div>
                </div>
                <div>
                    <p>Bathrooms</p>
                    <div>
                        <p><FaShower /></p>
                        <p>4.5</p>
                    </div>
                </div>
                <div>
                    <p>Area</p>
                    <div>
                        <p><BiShapeSquare /></p>
                        <p>3800 sq ft</p>
                    </div>
                </div>
            </div>
            <div className="price-tags">
                <p>For Rent</p>
                <h2>$850,000</h2>
            </div>
        </div>
    );

    let cardContent;
    if (currentImageIndex < 2) {
        cardContent = writeUpContent;
    } else {
        cardContent = newContent;
    }

    return (
        <div>
            <div className="header-banner" style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: "background-image 0.5s ease" }}>
                <nav className="transparent-navigation-bar">
                    <div className="navbar">
                        <div className="logo">
                            <img src={logo} alt="" />
                            <h1>TAGS <br /> HOMES</h1>
                        </div>
                        <div>
                            <ul className="nav-items">
                                <li className="home">Home</li>
                                <li onMouseLeave={handleRealEstateDropdownClose}><span className={realEstateIsHovered ? "dropdown-hovered" : ""} onMouseEnter={handleRealEstateDropDown} style={{color:"white"}}>Real Estate</span>
                                    {realEstateIsHovered && (
                                        <ul className="dropdown-menu">
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Find An Agents</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Join TAGS HOMES as an Agent</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">Properties Gallery</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-links">About Us</li>
                                <li onMouseLeave={handlePropertyDropdownClose}><span className={PropertyIsHovered ? "dropdown-hovered-property" : ""} onMouseEnter={handlePropertyDropDown}  style={{color:"white"}}>Property</span>
                                    {PropertyIsHovered && (
                                        <ul className="dropdown-menu-property">
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">All Properties</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Sale</li>
                                            <li style={{ color: "#77797A", fontSize: "13px" }} className="dropdown-item">For Rent</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-links">Contact</li>
                                <li className="whatsapp"><IoLogoWhatsapp style={{ fontSize: "24px" }} /><p>1-800-555-1234</p></li>
                                <li><IoPersonCircle className="user" /></li>
                                <button className="nav-reg-link">Get Started</button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="slider-container">
                    <div className="white-card">
                        {cardContent}
                    </div>
                </div>
            </div>
            <div className="search-props">
                <div className="search-wrap">
                    <div className="search-types">
                        <div style={{ borderRight: "1px solid #d7d4d4", padding: "20px 0", paddingRight: "10px" }}>
                            <p style={{ fontSize: "smaller" }}>Location</p>
                            <div className="all-search">
                                <p>All Locations</p>
                                <p><IoCaretDownSharp /></p>
                            </div>
                        </div>
                        <div style={{ borderRight: "1px solid #d7d4d4", padding: "20px 0", paddingRight: "10px" }}>
                            <p style={{ fontSize: "smaller" }}>Property Status</p>
                            <div className="all-search">
                                <p>Any</p>
                                <p><IoCaretDownSharp /></p>
                            </div>
                        </div>
                        <div style={{ padding: "20px 0", paddingRight: "10px" }}>
                            <p style={{ fontSize: "smaller" }}>Property Types</p>
                            <div className="all-search">
                                <p>All Types</p>
                                <IoCaretUpSharp />
                            </div>
                        </div>
                    </div>
                    <div className="search-wraps">
                        <div className="zoom"><TfiZoomIn /></div>
                        <div className="search">
                            <p><IoSearchOutline /></p>
                            <p>Search</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeHeader;
