import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import * as userService from "../Services/userService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const login = async (email, password) => {
    try {
      const user = await userService.login(email, password);
      setUser(user);
      toast.success("Login Successful");
    } catch (e) {
      toast.error(e.response.data);
    }
  };
  const register = async (data) => {
    try {
      const user = await userService.register(data);
      setUser(user);
      toast.success("Register Successful");
    } catch (e) {
      toast.error(e.response.data);
    }
  };

  const logout = () => {
    userService.logout();
    setUser(null);
    toast.success("Logout Successful");
  };

  const updateProfile = async (user) => {
    const updatedUser = await userService.updateProfile(user);
    toast.success("Profile was succesfully updated");
    if (updatedUser) setUser(updatedUser);
  };

  const changePassword = async (password) => {
    await userService.changePassword(password);
    logout();
    toast.success("Password Changed Succesfully. Please Log In Again!");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateProfile, changePassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
