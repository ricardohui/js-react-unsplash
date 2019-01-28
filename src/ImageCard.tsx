import * as React from "react";

interface Iprops {
  alt: string;
  key: string;
  url: { regular: string };
}
interface IState {
  spans: number;
}
class ImageCard extends React.Component<Iprops, IState> {
  private imageRef = React.createRef<HTMLImageElement>();
  constructor(props: Iprops) {
    super(props);
    this.state = { spans: 0 };
  }
  componentDidMount() {
    if (this.imageRef.current != null) {
      this.imageRef.current!.addEventListener("load", this.setSpans);
    }
  }
  setSpans = () => {
    console.log(this.imageRef.current!.clientHeight);
    const height = this.imageRef.current!.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  public render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.alt}
          src={this.props.url.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
