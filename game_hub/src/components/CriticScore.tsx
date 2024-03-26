import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}
const CriticScore = ({ score }: CriticScoreProps) => {
  let badgeColor;
  score > 85 ? (badgeColor = "green") : (badgeColor = "yellow");
  return (
    <Badge
      fontSize='14px'
      paddingX={2}
      borderRadius='4px'
      colorScheme={badgeColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
