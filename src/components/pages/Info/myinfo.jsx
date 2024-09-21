import React from 'react';
import '../../CSS/Style.css';

const MyInfo = () => {
  return (
    <div className="container">
      {/* Row for heading and photo */}
      <div className="row">
        {/* Left side: Title */}
        <div className="col-md-9">
          <h1 className="main-heading">Dr Amit Bhosle Message about Astrology</h1>
        </div>
        {/* Right side: Photo */}
        <div className="col-md-3 text-right">
          <div className="photo-container">
            <img
              src="https://via.placeholder.com/150" // You can replace this with the actual image URL
              alt="Dr Amit Bhosle"
              className="photo"
            />
          </div>
        </div>
      </div>

      {/* Paragraph section */}
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="sub-heading">Paragraph Message About Astrology</h2>
          <p className="paragraph">
            Astrology is a field that provides insight into personal paths, life events,
            and the mysteries of the universe. Dr. Amit Bhosle has dedicated his life
            to unraveling these cosmic connections.
          </p>
        </div>
      </div>

      {/* Video section */}
      <div className="row mt-4">
        <div className="col-12">
          <h2 className="sub-heading">Videos on Astrology</h2>
        </div>
        {/* Embedding YouTube Videos */}
        <div className="col-md-4 video-box">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/6v8vJwRBpxM"
            title="Astrology Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/eoQjSD5BZwE"
            title="Astrology Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/wGpG3wJCy8I"
            title="Astrology Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/QaIVt21bsDU"
            title="Astrology Video 4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/yfcvCVFJ_5U"
            title="Astrology Video 5"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-4 video-box">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/nO8RMlQzdyg"
            title="Astrology Video 6"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer section */}
      <div className="row mt-4">
        <div className="col-12 text-center footer">
          <p>Footer</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <p>Page-2</p>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
