import { Stack } from "@mui/joy";
import { MockAvatar } from "../../api/mock-avatar";
import { CardTopStrengths } from "../shared/card-top-strengths";
import { UserInfo } from "../shared/user-info";

export const PersonalProfileTab = () => {
  return (
    <Stack alignItems={{ xs: "center", lg: "start" }} gap={4}>
      <UserInfo />

      <Stack
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        justifyContent="center"
        alignItems={{ xs: "center", lg: "start" }}
        gap={10}
      >
        <Stack maxWidth={600} alignItems="center">
          <MockAvatar sx={{ fontSize: 280 }} />
        </Stack>

        <Stack>
          <CardTopStrengths />
        </Stack>
      </Stack>
    </Stack>
  );
};
