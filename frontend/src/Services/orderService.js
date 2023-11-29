import axios from "axios";

export const createOrder = async (order) => {
  const { data } = axios.post("/api/orders/create", order);
  console.log("order", data);
  return data;
};

export const getNewOrderForCurrentUser = async () => {
  try {
    const { data } = await axios.get("/api/orders/newOrderForCurrentUser");
    console.log("serv", data);
    return data;
  } catch (error) {
    console.log("err", error);
  }
};

export const pay = async (paymentId) => {
  try {
    const { data } = await axios.put("/api/orders/pay", { paymentId });
    return data;
  } catch (error) {}
};

export const trackOrderById = async (orderId) => {
  const { data } = await axios.get("/api/orders/track/" + orderId);
  return data;
};

export const getAll = async (state) => {
  const { data } = await axios.get(`/api/orders/${state ?? ""}`);
  return data;
};
