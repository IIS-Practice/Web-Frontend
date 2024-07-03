import { $host } from "../axios";

export const addApplication = async (
  author,
  phoneNumber,
  email,
  description,
) => {
  try {
    const response = await $host.post("applications", {
      author,
      phoneNumber,
      email,
      description,
    });
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
