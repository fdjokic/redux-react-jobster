import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/register", user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/login", user);
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Credentials are invalid");
    }
    return thunkAPI.rejectWithValue(error.response.msg);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch("/auth/updateUser", user);
    console.log(resp);
    return resp.data;
  } catch (error) {
    console.log(error.response);
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
