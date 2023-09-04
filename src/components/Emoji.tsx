import { Image, ImgProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 2) return;

  const emojiMap: { [key: number]: ImgProps } = {
    3: { src: meh, alt: "meh", boxSize: "32px" },
    4: { src: thumbsUp, alt: "thumbsUp", boxSize: "32px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "42px" },
  };

  return <Image {...emojiMap[rating]} marginTop={3} />;
};

export default Emoji;
