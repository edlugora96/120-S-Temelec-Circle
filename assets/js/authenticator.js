export const isAuthenticated = () => sessionStorage.getItem("token") !== null;

export const getToken = () => sessionStorage.getItem("token");

export const login = token => {
  sessionStorage.setItem("token", token);
};
export const getCurrentId = () => sessionStorage.getItem("CurrentId");

export const setCurrentId = token => {
  sessionStorage.setItem("CurrentId", token);
};

export const logout = () => {
  sessionStorage.removeItem("token");
};
