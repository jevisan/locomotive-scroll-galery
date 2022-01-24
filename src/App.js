import './App.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { imageData } from './data';
import GalleryItem from './components/galleryItem';

import locomotiveScroll from 'locomotive-scroll';
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss';
import { useEffect, useRef } from 'react';

function App() {
  
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      new locomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: 'horizontal',
        multiplier: 0.5
      })
    }
  }, [])

  const images = imageData.map((tupples, index) => 
    tupples.map((url, elementIndex) => <GalleryItem key={url} index={elementIndex} src={url} columnOffset={index*14} />)
  );

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <div className='scroll-container' data-scroll-container ref={ref}>
          <div className='content'>
            <div className='gallery'>
              {images}
              <div className='gallery-helper'>Scroll to discover more</div>
              <div className='behind-text fill' data-scroll data-scroll-speed>
                everybody loves a good story
              </div>
              <div className='behind-text outline' data-scroll data-scroll-speed>
                everybody loves a good story
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
