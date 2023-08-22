const getCroppedImageUrl = (url: string) => {
  let index = url.indexOf("media/") + "media/".length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
};

export default getCroppedImageUrl;
