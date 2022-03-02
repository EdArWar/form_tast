import axios from "axios";

class AuthApi {
  async login(fullName, email, setResponse) {
    try {
      const response = await axios.post(
        `https://e890494c-90a1-400d-961d-c129ee65fc70.mock.pstmn.io/request`,
        { fullName, email }
      );

      const data = response;

      setResponse(data);
    } catch (error) {
      console.log(error);
      setResponse(error);
    }
  }
}

export default new AuthApi();
