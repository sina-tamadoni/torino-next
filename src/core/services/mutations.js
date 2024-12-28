import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";
import { setCookie } from "../utils/cookie";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};

const useCheckOtp = () => {
  const queryClient = useQueryClient();
  const queryKey = ["userProfile"];
  const mutationFn = (data) => api.post("auth/check-otp", data);
  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey });
  };
  return useMutation({ mutationFn, onSuccess });
};
const useUpdatePersonalInfo = () => {
  const queryClient = useQueryClient();
  const queryKey = ["userProfile"];
  const mutationFn = (data) => api.put("user/profile", data);
  const onSuccess = () => queryClient.invalidateQueries({ queryKey });
  return useMutation({ mutationFn, onSuccess });
};
const useAddToCart = () => {
  const mutationFn = (data) => api.put(`basket/${data}`);
  return useMutation({ mutationFn });
};

const useOrder = () => {
  const queryClient = useQueryClient();
  const queryKey = ["cart"];

  const mutationFn = (data) => api.post("order", data);
  const onSuccess = () => queryClient.invalidateQueries({ queryKey });

  return useMutation({ mutationFn, onSuccess });
};

export {
  useSendOtp,
  useCheckOtp,
  useUpdatePersonalInfo,
  useAddToCart,
  useOrder,
};
