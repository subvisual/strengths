import { Link as JoyLink, Stack, Typography } from "@mui/joy";
import { useContext } from "react";
import { MockAvatar } from "../api/mock-avatar";
import { useUpdateUserAvatarState } from "../api/use-user.api";
import { ArrowRightOutlined } from "../assets/icons/arrow-right";
import { AvatarLoading } from "../components/layout/avatar-loading";
import { MainContainer } from "../components/shared/main-container";
import { AuthContext } from "../contexts/auth.context";
import { SnackbarContext } from "../contexts/snackbar.context";

export const AvatarCreatePage = () => {
  const { user, refetchUser } = useContext(AuthContext);
  const { showSnackbar } = useContext(SnackbarContext);
  const { mutateAsync: updateUserAvatarState, isPending: isLoading, isError } = useUpdateUserAvatarState();

  const handleCreateAvatar = async () => {
    try {
      if (isError) {
        showSnackbar("danger", "Failed creating avatar.");
      } else {
        await updateUserAvatarState(user.id);
        await refetchUser();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer alignCenter sx={{ p: 2 }}>
      {isLoading ? (
        <AvatarLoading />
      ) : (
        <Stack maxWidth={1120} gap={4}>
          <Stack maxWidth={720} alignItems="center" alignSelf="center" gap={4}>
            <Typography level="h1" textAlign="center" textColor="neutral.dark">
              Your Strength-Based Avatar is Almost Ready!
            </Typography>

            <Typography level="body-md" textColor="neutral.dark">
              Now, let's customize the core features to bring your Avatar to life.
            </Typography>
          </Stack>

          <Stack alignItems="center">
            <MockAvatar sx={{ fontSize: 280 }} />
          </Stack>

          <Stack bgcolor="neutral.white" height={120} alignItems="center" borderRadius={8}></Stack>

          <Stack alignItems="end">
            <JoyLink
              onClick={handleCreateAvatar}
              underline="none"
              endDecorator={<ArrowRightOutlined sx={{ fontSize: 10 }} />}
              textColor="neutral.black"
              gap={0.5}
            >
              Next
            </JoyLink>
          </Stack>
        </Stack>
      )}
    </MainContainer>
  );
};
