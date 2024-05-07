import { setIsLoading, setProfiles } from "../../../redux/reducers/profilesSlice";
import { Dispatch } from "redux";
import { UserInterfase } from "../../../types/UserInterfase";
import axiosInstance from "../../../services/axios/axios";

const GetUsers = async (dispatch: Dispatch) => {
  dispatch(setIsLoading(true));

  try {

    const response = await axiosInstance.post("users/get_all");
    const users: UserInterfase[] = response.data;
    console.log(users);
    dispatch(setProfiles(users));
  } catch (error: any) {
    // Обработка ошибки
    if (error.response) {
      // Ошибка от сервера
      console.error('Ошибка сервера:', error.response.status, error.response.data);
    } else if (error.request) {
      // Запрос был отправлен, но не получен ответ
      console.error('Нет ответа от сервера:', error.request);
    } else {
      // Что-то пошло не так при настройке запроса
      console.error('Ошибка:', error.message);
    }
  }
};

export default GetUsers;

