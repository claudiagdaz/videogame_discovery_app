import three_star from "../assets/three_star.jpg";
import four_star from "../assets/four_star.jpg";
import five_star from "../assets/five_star.jpg";

import { Image, ImageProps } from "@chakra-ui/react";

interface EmojiProps {
  rating: number;
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: three_star, alt: "threeStar" },
    4: { src: four_star, alt: "fourStar" },
    5: { src: five_star, alt: "fiveStar" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
