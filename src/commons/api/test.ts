import axios from "axios";
const URL = "https://need-romance.site";

export const checkDuplicateEmail = async (email: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/find/email?email=${email}`,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendVerificationEmail = async (email: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/sendtoken/?email=${email}`,
    });

    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const checkVerificationEmail = async (email: string, token: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/checktoken/?email=${email}&token=${token}`,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const checkDuplicateNickname = async (nickname: string) => {
  try {
    const response = await axios({
      method: "get",
      url: URL + `/user/find/nickname?nickname=${nickname}`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (inputs: {
  email: string;
  nickname: string;
  password: string;
}) => {
  const { email, nickname, password } = inputs;
  try {
    const response = await axios({
      method: "post",
      url: URL + "/user/signup",
      data: {
        email,
        nickname,
        password,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios({
      method: "post",
      url: URL + "/auth/login",
      data: {
        email,
        password,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
