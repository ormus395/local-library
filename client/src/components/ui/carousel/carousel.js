import React, { Component } from "react";
import "./carousel.css";

import book1 from "../../../assets/books.jpg";
import book2 from "../../../assets/hipster-books.jpeg";
import book3 from "../../../assets/book-lady.jpeg";

import ImageSlide from "./img-slide/ImageSlide";
import Arrow from "./arrow/arrow";

const imgUrls = [book3, book1, book2];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      currentIndex: 0
    };
  }
  previousSlide = () => {
    console.log(imgUrls.length);
    // First check to make sure index isnt 0
    if (this.state.currentIndex === 0) {
      // set index to last image in array
      this.setState({ currentIndex: imgUrls.length - 1 });
    } else {
      // subtract index by one
      this.setState((prevState, props) => {
        return {
          currentIndex: prevState.currentIndex - 1
        };
      });
    }
  };

  nextSlide = () => {
    // Check if current index is 1 less the length of img array
    if (this.state.currentIndex === imgUrls.length - 1) {
      this.setState(prevState => {
        return {
          currentIndex: 0
        };
      });
    } else {
      this.setState(prevState => {
        return {
          currentIndex: prevState.currentIndex + 1
        };
      });
    }
  };

  setLoop() {
    this.state.interval = setInterval(this.nextSlide, 5000);
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        interval: setInterval(this.nextSlide, 5000)
      };
    }, this.setLoop);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;"
        />
        <ImageSlide url={imgUrls[this.state.currentIndex]} />
        <Arrow
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;"
        />
      </div>
    );
  }
}

export default Carousel;
