import { useState, useEffect } from "react";
const susSound ="/assets/sus.mp3"; 
const celebrationMusic = "/assets/thinkinboutchu.mp3"; // New music path
const cardImage = "/assets/sus.png"; // Path to the card image

const imageSlides = Array.from({ length: 38 }, (_, i) => `/assets/slideshow/${i + 1}.jpeg`);

const HomeScreen = () => {
    const [imgSrc, setImgSrc] = useState("/assets/heart-icon.png"); // Default image
    const [showQuestion, setShowQuestion] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [showSlideImage, setShowSlideImage] = useState(false);
    const [background, setBackground] = useState(""); // To change background
    const [showCard, setShowCard] = useState(false); // To show the card
    const [playMusic, setPlayMusic] = useState(false);
    const [showSlideshow, setShowSlideshow] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (showSlideshow) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
            }, 2000); // Change image every 2 seconds
            return () => clearInterval(interval);
        }
    }, [showSlideshow]);

    const handleYesClick = () => {
        setShowVideo(true);

        setTimeout(() => {

            setBackground("background-success"); // Change the background
            setPlayMusic(true); // Start the celebration music
            setShowSlideshow(true)
            setShowCard(true);        }, 2000); // Change this duration based on video length
    };

    const handleNoHover = () => {
        const audio = new Audio(susSound);
        audio.play();
        setShowSlideImage(true);
        setTimeout(() => setShowSlideImage(false), 1500); // Hide after 1.5s
    };

    return (  
        <div className={`landing ${background}`}>
        {!showQuestion ? (
            <>
                <h1>Click to open</h1>
                <button
                    className="love-btn"
                    onMouseEnter={() => setImgSrc("/assets/love-btn-hover.png")} // Change image on hover
                    onMouseLeave={() => setImgSrc("/assets/love-btn.png")} // Revert back on mouse leave
                    onClick={() => setShowQuestion(true)} // Show question when clicked
                    onError={() => setImgSrc("/assets/love-btn.png")}
                >
                    <img src={imgSrc} alt="love btn" />
                </button>
            </>
        ) : (
            !showVideo && !showCard  &&  (
            <div className="question-box">
                <h2>Will you be my Valentine? ❤️</h2>
                <div className="options">
                    <div class="love">
                        <button type="button" id="button" class="buttons" 
                        onClick={handleYesClick}>
                            Yes</button>
                        <div id="heart1" class="hearts"></div>
                        <div id="heart2" class="hearts"></div>
                        <div id="heart3" class="hearts"></div>
                        <div id="heart4" class="hearts"></div>
                        <div id="heart5" class="hearts"></div>
                    </div> 
                    <button 
                    className="no-btn"
                    onMouseEnter={handleNoHover}
                    onClick={() => alert("Oh no! 😢")}
                    >
                        No
                    </button>
                </div>
                {showSlideImage && (
                    <div className="sliding-images">
                        <img
                        src="/assets/sus.png"
                        alt="Sliding 1"
                        className="slide-in-img left"
                        />
                        <img
                        src="/assets/sus3.png"
                        alt="Sliding 2"
                        className="slide-in-img right"
                        />
                        <img
                        src="/assets/sus2.jpg"
                        alt="Sliding 3"
                        className="slide-in-img center"
                        />
                    </div>               
                 )}
            </div>
            )
        )}
        {showVideo && (
                        <div className="video-container">
                            <video
                                src="/assets/flowheart.mp4" // Your video file path here
                                autoPlay
                                muted
                                onEnded={() => {
                                    setShowVideo(false);
                                    // Perform additional actions after video ends
                                }}
                                className="video"
                            />
                        </div>
                    )}

        {/* New Content After Video */}
        {showCard && showSlideshow && (
                <div className="content-container">
                    <div className="celebration-card">
                        <img src={cardImage} alt="Heart" className="card-image" />
                        <div className="card-description">
                            <h3>You are my Valentine! ❤️</h3>
                            <p>Let's make the day special together.</p>
                            <p>~sid♡</p>
                        </div>
                    </div>
                    <div className="slideshow">
                        <img
                            src={imageSlides[currentSlide]}
                            alt="Slideshow"
                            className="slideshow-image"
                        />
                    </div>
                </div>
            )}

            {/* Fireworks and Music */}
            {playMusic && (
                <>
                    <audio src={celebrationMusic} autoPlay loop />
                    {/* <img src={fireworksAnimation} alt="Fireworks" className="fireworks-animation" /> */}
                </>
            )}
        </div>
    );
}
 
export default HomeScreen;