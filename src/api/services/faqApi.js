import { $host } from "../axios";

export const getFaqs = async () => {
  try {
    const response = await $host.get("faqs");
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("Server error response:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Request failed:", error.message);
      throw new Error(error.message);
    }
  }
};
