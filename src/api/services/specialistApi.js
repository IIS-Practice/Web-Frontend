import { $host } from "../axios";

export const getSpecialists = async () => {
  try {
    const response = await $host.get("specialists");
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
