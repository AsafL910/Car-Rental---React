import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel
        style={{
          width: 1920,
          maxHeight: 600,
          overflow: "hidden",
          alignSelf: "center",
        }}
      >
        <Carousel.Item>
          <img
            src="http://blog.countyford.com/wp-content/uploads/2016/05/2016-ford-f-150-county-ford-945x629.jpg"
            alt="First slide"
            className="w-100"
            fluid 
          />
          <Carousel.Caption>
            <h3>קנו אצלנו</h3>
            <p>הקונים שלנו משלמים לנו</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian_rds/gallery/SIAN_rds-01.jpg"
            alt="Second slide"
            className="w-100"
            fluid 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.tesla.com/sites/default/files/images/roadster/roadster-social.jpg"
            alt="Third slide"
            className="w-100"
            fluid 
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
