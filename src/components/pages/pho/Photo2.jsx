import React, { useEffect } from 'react';
import '../../CSS/Style.css'; // Import your custom CSS file


const Photo2 = () => {
  useEffect(() => {
    const elem = document.querySelector('.m-p-g');
    if (window.MaterialPhotoGallery) {
      new window.MaterialPhotoGallery(elem);
    } else {
      console.error('MaterialPhotoGallery is not defined');
    }
  }, []);

  return (
    <div className="m-p-g mt-5 mb-5">
      <div className='text-center pb-3'>
        <h1>Photos Of Institute</h1>

      </div>
      <div className="m-p-g__thumbs" data-google-image-layout data-max-height="350">
        <img src="http://unsplash.it/600/400?image=940" data-full="http://unsplash.it/1200/800?image=940" className="m-p-g__thumbs-img" />
        <img src="http://unsplash.it/640/450?image=906" data-full="http://unsplash.it/1280/900?image=906" className="m-p-g__thumbs-img" />
        <img src="http://unsplash.it/550/420?image=885" data-full="http://unsplash.it/1100/840?image=885" className="m-p-g__thumbs-img" alt="Thumbnail 3" />
        <img src="http://unsplash.it/650/450?image=823" data-full="http://unsplash.it/1300/900?image=823" className="m-p-g__thumbs-img" alt="Thumbnail 4" />
        <img src="http://unsplash.it/600/350?image=815" data-full="http://unsplash.it/1200/700?image=815" className="m-p-g__thumbs-img" alt="Thumbnail 5" />
        <img src="http://unsplash.it/560/500?image=677" data-full="http://unsplash.it/1120/1000?image=677" className="m-p-g__thumbs-img" alt="Thumbnail 6" />
        <img src="http://unsplash.it/670/410?image=401" data-full="http://unsplash.it/1340/820?image=401" className="m-p-g__thumbs-img" alt="Thumbnail 7" />
        <img src="http://unsplash.it/620/340?image=623" data-full="http://unsplash.it/1240/680?image=623" className="m-p-g__thumbs-img" alt="Thumbnail 8" />
        <img src="http://unsplash.it/790/390?image=339" data-full="http://unsplash.it/1580/780?image=339" className="m-p-g__thumbs-img" alt="Thumbnail 9" />
      </div>
      <div className="m-p-g__fullscreen"></div>
    </div>
  );
};

export default Photo2;
