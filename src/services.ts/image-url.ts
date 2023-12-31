import noImage from '../assets/noImagePlaceholder.jpg'

const getCroppedImageUrl = (url: string|null) => {
  if (url===null) return noImage

  let index = url.indexOf("media/") + "media/".length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
};

export default getCroppedImageUrl;
