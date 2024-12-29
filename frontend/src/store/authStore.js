import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

export const useAuth = create((set) => ({
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  authUser: null,
  users: [],
  isCheckingAuth: true,
  login: async (data, navigate) => {
    try {
      set({ isLoggingIn: true });
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in Successfull");
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  signup: async (data, navigate) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: null });
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out Successfully");
    } catch (e) {
      toast.error(error.response.data.message);
    }
  },
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      set({ authUser: null });
      // console.log("Error in checkAuth " + error.message);
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
