import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Card from 'react-bootstrap/Card';

export default class UnevenSetsFinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1100,
      slidesToScroll: 4,
      slidesToShow: 4,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p1-levis.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p2-adidas.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p3-campus.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p4-puma.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p6-uspa.jpg"
              />
            </Card>
          </div>
          <div>
            <Card>
              <Card.Img
                variant="top"
                src="https://assets.ajio.com/cms/AJIO/WEB/D-SponsorBrands-p7-crocs.jpg"
              />
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}
