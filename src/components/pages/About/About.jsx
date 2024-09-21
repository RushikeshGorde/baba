import React from 'react';
import '../../CSS/Style.css'; // Import your custom CSS file

const MyInfo = () => {
  return (
    <div className="container">
      {/* Row for heading and photo */}
      <div className="row">
        {/* Left side: Title */}
        <div className="col-md-9">
          <h1 className="py-5 ps-5 fw-bold fs-1">Dr Amit Bhosle Message about Astrology</h1>
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
          Providing 10,000 words in one response would be quite extensive and difficult to navigate in this format. Instead, I can give you a structured, detailed breakdown of astrology that covers the following sections:

1. **Introduction to Astrology**
2. **History of Astrology**
3. **Types of Astrology**
   - Western Astrology
   - Vedic Astrology (Jyotish)
   - Chinese Astrology
   - Other Astrology Traditions
4. **Astrological Symbols and Planets**
5. **The Zodiac Signs**
   - Detailed Explanation of Each Zodiac Sign (Aries to Pisces)
6. **Houses in Astrology**
7. **Aspects in Astrology**
8. **Astrological Charts (Natal Charts)**
9. **Astrology in Modern Times**
10. **Astrology's Impact on Culture and Society**
11. **Astrology and Science**
12. **Criticism and Skepticism of Astrology**
13. **Famous Astrologers and Their Contributions**
14. **Astrology in Popular Culture**

I'll provide a few thousand words to get started, and then we can build upon it step by step.

---

### **1. Introduction to Astrology**
Astrology is an ancient belief system that suggests a relationship between the positions of celestial bodies and events on Earth, particularly in human affairs. It posits that the stars, planets, and their movements can influence personality traits, life events, and even predict future outcomes. While astrology is not recognized as a science, it holds immense cultural, historical, and spiritual significance for millions of people worldwide.

At its core, astrology revolves around the idea that the cosmos is interconnected. The belief is that celestial phenomena—such as the alignment of stars, planets, the moon, and the sun—have symbolic meaning that can provide insight into human life. While some see astrology as a tool for personal reflection or spiritual guidance, others use it to predict events, from love lives to financial success, or even political events.

Astrology divides the sky into twelve sections known as zodiac signs, each associated with certain personality traits and tendencies. The position of the planets at a person's birth is believed to shape their character and destiny.

---


#### **Sagittarius (November 22 – December 21)**
- Symbol: The Archer
- Element: Fire
- Ruling Planet: Jupiter
- Traits:
          </p>
        </div>
      </div>

      {/* Video section */}
      <div className="row mt-4">
        <div className="col-12 text-center bg-info my-3">
          <h2 className="">Videos on Astrology</h2>
        </div>
        {/* Embedding YouTube Videos */}
        <div className="col-md-4 video-box">
          <iframe
            width="100%"
            height="200"
            src="https://youtube.com/shorts/q7-vd2MzVfg?si=ZqNqnhRXTxjfIZJb"
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

     
    </div>
  );
};

export default MyInfo;
