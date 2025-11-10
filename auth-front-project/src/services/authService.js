import axios from 'axios';

// URL base del backend
const API_URL = 'http://localhost:3002/api/v1/auth';

// Configurar interceptor para incluir token en peticiones
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * ENDPOINT 1: REGISTRO
 * POST http://localhost:3002/api/v1/auth/sign-up
 * Payload esperado:
 * {
 *   "fullname": "Nombre Completo",
 *   "email": "email@ejemplo.com",
 *   "current_password": "Password123"
 * }
 */
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/sign-up`, {
    fullname: userData.fullname,
    email: userData.email,
    current_password: userData.current_password
  });
  return response.data;
};

/**
 * ENDPOINT 2: VERIFICACIÓN DE EMAIL
 * POST http://localhost:3002/api/v1/auth/verify-email
 * Payload esperado:
 * {
 *   "email": "email@ejemplo.com",
 *   "verificationCode": "123456"
 * }
 */
export const verifyEmail = async (verificationData) => {
  const response = await axios.post(`${API_URL}/verify-email`, {
    email: verificationData.email,
    verificationCode: verificationData.verificationCode
  });
  return response.data;
};

/**
 * ENDPOINT 3: INICIO DE SESIÓN
 * POST http://localhost:3002/api/v1/auth/signin
 * Payload esperado:
 * {
 *   "email": "email@ejemplo.com",
 *   "password": "Password123"
 * }
 */
export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/signin`, {
    email: credentials.email,
    password: credentials.password
  });
  return response.data;
};
