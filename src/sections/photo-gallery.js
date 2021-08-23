/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from 'assets/images/photos/1.jpg';
import photo2 from 'assets/images/photos/2.jpg';
import photo3 from 'assets/images/photos/3.jpg';
import photo4 from 'assets/images/photos/4.jpg';
import photo5 from 'assets/images/photos/5.jpg';
import photo6 from 'assets/images/photos/6.jpg';

const slider2Settings = {
  thumbWidth: 100,
  dynamicHeight: true,
  axis: 'horizontal',
  centerMode: true,
  centerSlidePercentage: 35,
  infiniteLoop: true,
};

const PhotoGallery = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container >
        <Carousel sx={styles.carousel} {...slider2Settings}>
          <div>
            <img alt="" src={photo1} />
          </div>
          <div>
            <img alt="" src={photo2} />
          </div>
          <div>
            <img alt="" src={photo3} />
          </div>
          <div>
            <img alt="" src={photo4} />
          </div>
          <div>
            <img alt="" src={photo5} />
          </div>
          <div>
            <img alt="" src={photo6} />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default PhotoGallery;

const styles = {
  carousel: {
    // maxWidth: '500px',
  },
  section: {
    pt: [6, null, null, null, 2, 10, 6],
    pb: [2, null, null, null, 6, 10, 6],
  },
  image: {
   maxWidth: '300px',
   maxHeight: '300px'
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
