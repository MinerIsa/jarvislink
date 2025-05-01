import React, { useState } from 'react';
import './styles.scss'; // Make sure this path matches your setup

const videoCards = [

  {
    id: 3,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0406/9018/8439/files/Roboto_6.png?v=1723842913',
    title: 'Software',
    subtitle: 'What is Jarvis Link?',
    videoUrl: 'https://www.youtube.com/embed/wzWa9KBFst0?si=FNQjZw-Ghr2dAJ46',
    description: (
      <>
        <h3>What is Jarvis Link?</h3>
        <p>
          Jarvis Link is a network lighting control system that manages fixtures
          within a facility. It supports zones, dimming, and automated
          responses.
        </p>
        <h3>Core Capabilities</h3>
        <ul>
          <li>
            <strong>Lighting Zones:</strong> Group multiple fixtures for
            centralized control.
          </li>
          <li>
            <strong>Brightness and Dimming:</strong> Adjust lights for energy
            efficiency.
          </li>
          <li>
            <strong>Automated Responses:</strong> Set lights to respond to
            occupancy or inactivity.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0406/9018/8439/files/Roboto_4.png?v=1723842600',
    title: 'Jarvis Link',
    subtitle: 'Quick start guide.',
    videoUrl: 'https://www.youtube.com/embed/P-t0PztAFkA?si=N-yyBhdOgbOL9LMr',
    description: (
      <>
        <h3>Getting Started</h3>
        <p>
          Follow these steps to set up your first network lighting control
          project:
        </p>
        <ul>
          <li>
            <strong>Register & Install:</strong> Sign up and install the Jarvis
            Link app.
          </li>
          <li>
            <strong>Create a Project:</strong> Organize your lighting controls.
          </li>
          <li>
            <strong>Define Areas:</strong> Break down your facility into
            sections.
          </li>
          <li>
            <strong>Add Zones:</strong> Group fixtures under each area and
            select profiles.
          </li>
          <li>
            <strong>Assign Fixtures:</strong> Tap fixtures to blink, confirming
            you’ve added them.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    imageUrl:
      'https://cdn.shopify.com/s/files/1/0406/9018/8439/files/Roboto_9.png?v=1723843590',
    title: 'Demo',
    subtitle: 'Networked Lighting Controls in action.',
    videoUrl: 'https://www.youtube.com/embed/BFHoTJ3UzXA?si=x4ngDcJhaQy9LZDc',
    description: (
      <>
        <h3>Transforming Office and Warehouse Lighting</h3>
        <p>
          Jarvis Link optimizes lighting in both offices and warehouses, saving
          energy and increasing flexibility.
        </p>
        <h3>Office Environment</h3>
        <p>
          Lights turn on with occupancy. Dimming is easy with kinetic switches.
        </p>
        <h3>Warehouse Environment</h3>
        <p>Large areas stay lit only when needed, reducing costs.</p>
        <h3>Comprehensive Control</h3>
        <p>Enjoy efficiency, flexibility, and comfort.</p>
      </>
    ),
  },
];

const Videos = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="videos-section">
      {/* <section className="headline-container">
        <h1 className="headline">Learn about Networked Lighting Controls.</h1>
      </section> */}

      <section className="" id="sectionVideo">
        <div className="card-container">
          {videoCards.map((card) => (
            <div
              className="card"
              key={card.id}
              onClick={() => handleCardClick(card)}
            >
              <img src={card.imageUrl} alt="Card" />
              <div className="card-overlay"></div>
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.subtitle}</p>
              </div>
              <div className="card-button">
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedCard && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-body" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close" onClick={handleCloseModal}>
              ✕
            </div>

            <h2>{selectedCard.subtitle}</h2>
            <h3>{selectedCard.title}</h3>

            <div className="video-frame">
              <iframe
                src={selectedCard.videoUrl}
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="presentation-content">
              {selectedCard.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
