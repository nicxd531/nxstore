import { errorHandler, responseHandler } from "@/utils/resolver";
import { baseUrlDev } from "./config";
import axios from "axios";
import { registerT } from "@/utils/types";

// register method

export const RegisterHandler = async (payload: registerT) => {
  try {
    const res = await axios.post(baseUrlDev + "/auth/register", payload);
    const data = res.data;
    return data;
  } catch (error) {
    const message = "catch error 1";
    return errorHandler({ error, message });
  }
};
