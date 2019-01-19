import React from "react";
import "./imagelist.css";
import ImageCard from "./ImageCard";
class ImageList extends React.Component {
  render() {
    const images = this.props.images.map(({ description, id, urls }) => {
      return <ImageCard alt={description} key={id} src={urls.regular} />;
    });
    return <div className="image-list">{images}/></div>;
  }
}

export default ImageList;
