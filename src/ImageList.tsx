import * as React from "react";
import "./imagelist.css";
import ImageCard from "./ImageCard";

interface props {
  images: [];
}
class ImageList extends React.Component<props> {
  public render() {
    const images = this.props.images.map(
      ({
        description,
        id,
        urls
      }: {
        description: string;
        id: string;
        urls: { regular: string };
      }) => {
        return (
          <ImageCard
            alt={description}
            key={id}
            url={{ regular: urls.regular }}
          />
        );
      }
    );
    return <div className="image-list">{images}</div>;
  }
}

export default ImageList;
