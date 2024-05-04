import axios from "axios";
import { setIsLoading, setProfiles } from "../../../redux/reducers/profilesSlice";
import { Dispatch } from "redux";
import { ProfileInterfase } from "../../../types/Profile";

const GetUsers = async (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));

  try {
    const response = await axios.post("http://localhost:5000/api/users/get_all");
    const users: ProfileInterfase[] = response.data;

    dispatch(setProfiles(users));
  } catch (error: any) {
    console.log(error);
  }
};

export default GetUsers;

