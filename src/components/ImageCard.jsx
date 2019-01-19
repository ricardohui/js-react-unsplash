import React from "react";
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { description, src } = this.props;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={src} />
      </div>
    );
  }
}

export default ImageCard;
