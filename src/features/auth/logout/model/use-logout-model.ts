import { sessionModel } from "@/entities/session/model";
import { useMutation } from "@tanstack/react-query";
import { logoutApi } from "../api";

export const useLogoutModel = () => {
  const { clearSession } = sessionModel.useSessionActions();
  const { mutate, isPending } = useMutation({
    mutationFn: logoutApi.logout,
    onSuccess: clearSession,
  });
  return { handleLogout: () => mutate(), isLoading: isPending };
};
