import axios from "axios";

const apis = {
  login: (data) => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     if (data.username === "admin" && data.password === "1") {
    //       resolve({
    //         data: {
    //           username: data.username,
    //           success: true,
    //           token: "this is fake token",
    //         },
    //       });
    //     } else {
    //       reject({
    //         data: {
    //           success: false,
    //           err: "Username or password incorrect !",
    //         },
    //       });
    //     }
    //   }, 1000);
    // });

    return axios
      .post(process.env.REACT_APP_URL, data) 
      // set name for environment variable in React needs to containt "REACT_APP_" leading string 
      // đặt tên biến môi trường trong reactjs cần có chuỗi "REACT_APP_" ở đầu. VD: REACT_APP_TEST = abc123
      .then((res) => {
        return res;
      })
  },
};

export default apis;
