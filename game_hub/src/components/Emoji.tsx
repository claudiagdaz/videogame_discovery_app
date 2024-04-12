import three_star from "../assets/three_star.jpg";
import four_star from "../assets/four_star.jpg";
import five_star from "../assets/five_star.jpg";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";

import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "thumbsUp" },
    5: { src: bullsEye, alt: "bullsEye" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
