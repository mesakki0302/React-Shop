import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000/api",
    withCredentials: true
})

export const getProducts = () => API.get("/products");

// GET product by ID
export const getProduct = (id) => API.get(`/products/${id}`);

// ADD product
export const addProduct = (data) => API.post("/products", data);

// UPDATE product
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);

// DELETE product
export const deleteProduct = (id) => API.delete(`/products/${id}`);

export const Logins = (data) => API.post('/login', data)

export const Registers = (data) => API.post('/register',data)

export const forgotPassword = (email) => API.post('/forgot-password',email)

export const resetPassword = (data) => API.post('/reset-password', data)

export const addCartItem = (data) => API.post('/carts', data)

export const getCart = () => API.get('/takecarts')

export const deleteCart = (id) => API.delete(`/deletecart/${id}`);

export const ContactList = (data)=> API.post('/contact',data)

export const Logouts = () => API.post('/logout')


/* REQUEST */
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

/* RESPONSE */
API.interceptors.response.use(
  res => res,
  async (err) => {

    const originalRequest = err.config;

    if (
      err.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const res = await API.post("/refresh-token");

        const newToken = res.data.token;

        localStorage.setItem("token", newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return API(originalRequest);

      } catch {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    }

    return Promise.reject(err);
  }
);

export default API