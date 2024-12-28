import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";
export function useUserProfile() {
  const queryKey = ["userProfile"];
  const queryFn = () => api.get("user/profile").then((res) => res || false);
  return useQuery({ queryKey, queryFn });
}

export function useGetTours(query) {
  const queryKey = ["tours", query];
  const queryFn = () => api.get(`tour?${query}`);
  return useQuery({ queryKey, queryFn });
}

export function useGetCart() {
  const queryKey = ["cart"];
  const queryFn = () => api.get("basket").then((res) => res || false);
  return useQuery({ queryKey, queryFn, retry: false });
}

export function useGetUserTours() {
  const queryKey = ["userTours"];
  const queryFn = () => api.get("user/tours").then((res) => res || false);
  return useQuery({ queryKey, queryFn });
}

export function useGetUserTransactions() {
  const queryKey = ["userTransactions"];
  const queryFn = () =>
    api.get("user/transactions").then((res) => res || false);
  return useQuery({ queryKey, queryFn });
}
