import axios from "axios";


const GetUsers = async () => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/users/get_all",
            {}
          );
        console.log("users:", response.data);
      } catch (error: any) {
        // Приводим тип error к типу Error, чтобы избежать ошибки компиляции
        const typedError = error as Error;

        // Теперь можно обращаться к свойствам типа Error без ошибок компиляции
        console.log(typedError.message);
        console.log(typedError.stack);
        // Другие действия с объектом типа Error
      }

}

export default GetUsers;