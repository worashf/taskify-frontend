import http from "../utils/axiosConfig";
class AuthService {
  signup(user) {
    return http.post(`/users/signup`, user);
  }

  login(user) {
    return http.post(`/users/login`, user);
  }
  authenticate() {
    return http.get(`/users/me`);
  }
  logout() {
    return http.get(`/users/logout`);
  }
}

export default new AuthService();
