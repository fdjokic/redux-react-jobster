import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobtype=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.msg);
  }
};
