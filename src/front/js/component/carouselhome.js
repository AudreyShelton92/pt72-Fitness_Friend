import React from "react";







export const Carousel = () => {
    return (


        <div id="carouselExampleAutoplaying" className="carousel slide w-75 mx-auto" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://trello.com/1/cards/6737db7c2a103058f98d1dec/attachments/6737df66c625092e38ef42ee/previews/6737df6ac625092e38ef4314/download/food-photographer-jennifer-pallian-8pUjhBm4cLw-unsplash.webp" className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="https://trello.com/1/cards/6737db7c2a103058f98d1dec/attachments/6737dbfc85f4c7493fe9331a/previews/6737dc0485f4c7493fe947ac/download/melissa-belanger-7YLe87dcrm8-unsplash_%281%29.webp" className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="https://trello.com/1/cards/6737db7c2a103058f98d1dec/attachments/6737dd75459b029f544a4ec2/previews/6737dd7b459b029f544a5133/download/ella-olsson-lMcRyBx4G50-unsplash.webp" className="d-block w-100" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};