# Auth Frontend Project - Vue 3 + Vuex + Vue Router

## Taller: Registro, Verificación e Inicio de Sesión en Vue con Vuex y Next

Este proyecto implementa un sistema completo de autenticación con Vue 3, Vuex para el manejo de estados y Vue Router para la navegación.

## 📋 Flujo de Autenticación del Backend

1. **REGISTRO** → El usuario se registra con sus datos
2. **VERIFICACIÓN** → El sistema envía un código que debe ser verificado
3. **LOGIN** → Solo después de verificar, el usuario puede iniciar sesión

## 🚀 Instalación y Ejecución

### Paso 1: Instalar Dependencias

```bash
npm install
```

### Paso 2: Ejecutar el Proyecto

```bash
npm run dev
```

El proyecto se ejecutará en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── store/
│   ├── index.js              # Configuración del Store de Vuex
│   └── modules/
│       └── auth.js           # Módulo de autenticación
├── views/
│   ├── Register.vue          # Vista de registro
│   ├── VerifyEmail.vue       # Vista de verificación
│   └── Login.vue             # Vista de inicio de sesión
├── router/
│   └── index.js              # Configuración de rutas
├── services/
│   └── authService.js        # Servicio para peticiones HTTP
├── App.vue                   # Componente principal
└── main.js                   # Punto de entrada
```

## 🔧 Configuración

### Backend URL

El servicio de autenticación se conecta al backend en:
```
http://localhost:3002/api/v1/auth
```

Si tu backend está en otro puerto, modifica la URL en `src/services/authService.js`

## 📡 Endpoints Utilizados

### 1. Registro
- **POST** `/api/v1/auth/sign-up`
- Payload:
```json
{
  "fullname": "Nombre Completo",
  "email": "email@ejemplo.com",
  "current_password": "Password123"
}
```

### 2. Verificación de Email
- **POST** `/api/v1/auth/verify-email`
- Payload:
```json
{
  "email": "email@ejemplo.com",
  "verificationCode": "123456"
}
```

### 3. Inicio de Sesión
- **POST** `/api/v1/auth/signin`
- Payload:
```json
{
  "email": "email@ejemplo.com",
  "password": "Password123"
}
```

## 🎯 Características Implementadas

✅ Manejo de estados con Vuex  
✅ Navegación con Vue Router  
✅ Peticiones HTTP con Axios  
✅ Validación de formularios  
✅ Manejo de errores  
✅ Almacenamiento de token en localStorage  
✅ Interceptores de Axios para autenticación  
✅ Guards de navegación  
✅ Diseño responsive  

## 🔐 Store de Vuex (auth module)

El módulo de autenticación maneja:

- **State**: usuario, token, estado de autenticación, errores
- **Getters**: acceso al estado
- **Mutations**: modificaciones síncronas del estado
- **Actions**: operaciones asíncronas (register, verifyEmail, login)

## 🛣️ Rutas Disponibles

- `/` → Redirecciona a `/login`
- `/register` → Registro de usuario
- `/verify-email` → Verificación de email
- `/login` → Inicio de sesión

## 📝 Notas Importantes

1. Asegúrate de que el backend esté corriendo en `http://localhost:3002`
2. El código de verificación expira en 15 minutos
3. La contraseña debe tener al menos 6 caracteres, una letra y un número
4. El token JWT se guarda en localStorage y expira en 24 horas

## 🎨 Estilos

El proyecto incluye estilos personalizados con:
- Gradientes modernos
- Animaciones suaves
- Diseño responsive
- Feedback visual para errores y éxitos

## 📦 Dependencias

- **vue**: ^3.4.21
- **vuex**: ^4.1.0
- **vue-router**: ^4.3.0
- **axios**: ^1.6.8
- **vite**: ^5.2.0
- **@vitejs/plugin-vue**: ^5.0.4

## 👨‍💻 Autor

Proyecto desarrollado para el taller de Frameworks JavaScript
