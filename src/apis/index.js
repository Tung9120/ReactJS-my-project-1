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
      .post("https://medical-be.herokuapp.com/api/doctor/login", data)
      .then((res) => {
        return res;
      })
  },
};

export default apis;
