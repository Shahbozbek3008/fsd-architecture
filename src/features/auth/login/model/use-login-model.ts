import { sessionModel } from "@/entities/session/model";
import { useMutation } from "@tanstack/react-query";
import { type FormEvent } from "react";
import { loginApi } from "../api";
export const useLoginModel = () => {
  const { setSession } = sessionModel.useSessionActions();
  const { mutate, isPending } = useMutation({
    mutationFn: loginApi.login,
    onSuccess: (data) => setSession(data),
  });
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    mutate({
      username: String(fd.get("username")),
      password: String(fd.get("password")),
    });
  };
  return { handleLogin, isLoading: isPending };
};
