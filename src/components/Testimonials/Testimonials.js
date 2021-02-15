import React, { Component } from 'react';
import { string, number, shape, func } from 'prop-types';
import { Button } from '@material-ui/core';
import ArrowForwardIos from '@material-ui/icons/ChevronRight';
import ArrowBackwardIos from '@material-ui/icons/ChevronLeft';

// Style
import './Testimonials.scss';

// Custom Components
import { testimonialData } from './testimonialData';

const CarouselIndicator = ({ index, activeIndex, onClick }) => (
  <li>
    <a
      className={
        index === activeIndex
          ? 'carousel__indicator carousel__indicator--active'
          : 'carousel__indicator'
      }
      onClick={onClick}
    />
  </li>
);

const CarouselSlide = ({ activeIndex, slide, index }) => (
  <li
    className={
      index === activeIndex
        ? 'carousel__slide carousel__slide--active '
        : 'carousel__slide'
    }
  >
    <div className='carousel-slide__content'>{`"${slide.content}"`}</div>

    <div className='author-source-container'>
      <small className='carousel-slide__source'>
        <div>
          <strong className='carousel-slide__author'>
            {`—${slide.author}`}
          </strong>
        </div>
        {slide.source}
      </small>
    </div>
  </li>
);

// consider refactoring to use button

const CarouselLeftArrow = ({ onClick }) => (
  <Button
    color='primary'
    className='carousel__arrow carousel__arrow--left padding-on-left'
    onClick={onClick}
  >
    <ArrowBackwardIos fontSize='large' />
  </Button>
);

const CarouselRightArrow = ({ onClick }) => (
  <Button
    color='primary'
    className='carousel__arrow carousel__arrow--right padding-on-right'
    onClick={onClick}
  >
    <ArrowForwardIos fontSize='large' />
  </Button>
);

// Carousel wrapper component
class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.timer = this.timer.bind(this);

    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.activeIndex !== this.state.activeIndex) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timer() {
    if (testimonialData) {
      if (this.state.activeIndex === testimonialData.length - 1) {
        this.setState({ activeIndex: -1 });
      }

      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: -1 });
    }
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    const { activeIndex } = this.state;

    if (activeIndex < 1) {
      return this.setState(() => ({
        activeIndex: testimonialData.length - 1,
      }));
    }

    return this.setState((prevState) => ({
      activeIndex: prevState.activeIndex - 1,
    }));
  }

  goToNextSlide(e) {
    e.preventDefault();

    const { activeIndex } = this.state;

    if (activeIndex === testimonialData.length - 1) {
      return this.setState({ activeIndex: 0 });
    }

    return this.setState((prevState) => ({
      activeIndex: prevState.activeIndex + 1,
    }));
  }

  render() {
    const { activeIndex } = this.state;
    const { goToPrevSlide, goToSlide, goToNextSlide } = this;

    return (
      <div>
        <div className='carousel'>
          <div>
            <CarouselLeftArrow onClick={(e) => goToPrevSlide(e)} />
          </div>
          <div className='tile-3'>
            <div className='tile-2'>
              <ul className='tile-1'>
                {testimonialData.length > 0
                  ? testimonialData.map((slide, index) => (
                    <CarouselSlide
                        key={`carousel-slide-${index}`}
                        index={index}
                        activeIndex={activeIndex}
                        slide={slide}
                      />
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <div className='arrow-fix'>
            <CarouselRightArrow onClick={(e) => goToNextSlide(e)} />
          </div>
        </div>
      </div>
    );
  }
}

CarouselIndicator.propTypes = {
  index: number.isRequired,
  activeIndex: number.isRequired,
};

CarouselSlide.propTypes = {
  index: number.isRequired,
  activeIndex: number.isRequired,
  slide: shape({
    content: string,
    author: string,
    source: string,
  }).isRequired,
};

CarouselLeftArrow.propTypes = {
  onClick: func.isRequired,
};

CarouselRightArrow.propTypes = {
  onClick: func.isRequired,
};

export default Testimonials;
