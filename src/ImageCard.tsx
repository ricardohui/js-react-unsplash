import * as React from "react";

interface Iprops {
  alt: string;
  key: string;
  url: { regular: string };
}
class ImageCard extends React.Component<Iprops> {
  constructor(props: Iprops) {
    super(props);
  }
  public render() {
    return <div>ImageCard</div>;
  }
}

export default ImageCard;
