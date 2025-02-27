import { Box } from "@mui/joy";
import { getColorHex } from "../../utils/get-color-hex";

type ColoredCircleProps = {
  color: string;
  size: number;
};

export const ColoredCircle = ({ color, size }: ColoredCircleProps) => (
  <Box component="span" bgcolor={getColorHex(color)} height={size} width={size} borderRadius="50%" />
);
