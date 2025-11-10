# 🔐 Sistema de Autenticación - Vue 3 + Vuex + Express

Sistema completo de autenticación con registro, verificación por email y login usando Vue 3, Vuex, Vue Router en el frontend y Express.js con MongoDB en el backend.

---

## 📋 Descripción del Proyecto

Este proyecto implementa un flujo completo de autenticación en 3 pasos:

1. **REGISTRO** → Usuario se registra con sus datos
2. **VERIFICACIÓN** → Sistema envía código de 6 dígitos por email
3. **LOGIN** → Usuario inicia sesión y obtiene acceso al dashboard

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **Vue 3.4.21** - Framework progresivo de JavaScript
- **Vuex 4.1.0** - Gestión de estado global
- **Vue Router 4.3.0** - Navegación y rutas
- **Axios 1.6.8** - Cliente HTTP
- **Vite 5.2.0** - Build tool y dev server

### Backend
- **Express 5.1.0** - Framework web para Node.js
- **Prisma 6.17.1** - ORM para base de datos
- **MongoDB** - Base de datos NoSQL
- **JWT 9.0.2** - Autenticación con tokens
- **Bcrypt 6.0.0** - Hash de contraseñas
- **Nodemailer 7.0.6** - Envío de emails

---

## 📁 Estructura del Proyecto

```
cierre/
│
├── 📄 README.md                       ← Este archivo
├── 📄 INDEX.md                        ← Índice de documentación
├── 📄 GUIA_RAPIDA.md                  ← Inicio rápido (5 min)
├── 📄 CONFIGURACION_ENV.md            ← Configurar .env
├── 📄 INSTRUCCIONES_COMPLETAS.md      ← Guía detallada
├── 📄 RESUMEN_TALLER.md               ← Resumen del proyecto
├── 📄 DIAGRAMA_FLUJO.md               ← Diagramas visuales
│
├── 📁 auth-back-project/              ← Backend
│   ├── src/
│   │   ├── controllers/               ← Lógica de negocio
│   │   ├── services/                  ← Servicios auxiliares
│   │   ├── router/                    ← Rutas de la API
│   │   ├── config/                    ← Configuraciones
│   │   └── middleware/                ← Middlewares
│   ├── prisma/
│   │   └── schema.prisma              ← Modelo de datos
│   ├── .env                           ← Variables de entorno (crear)
│   └── package.json
│
└── 📁 auth-front-project/             ← Frontend
    ├── src/
    │   ├── store/                     ← Vuex Store
    │   │   ├── index.js
    │   │   └── modules/
    │   │       └── auth.js            ← Módulo de autenticación
    │   ├── views/                     ← Vistas principales
    │   │   ├── Register.vue           ← Registro
    │   │   ├── VerifyEmail.vue        ← Verificación
    │   │   ├── Login.vue              ← Login
    │   │   └── Dashboard.vue          ← Dashboard
    │   ├── router/                    ← Vue Router
    │   │   └── index.js
    │   ├── services/                  ← Servicios HTTP
    │   │   └── authService.js
    │   ├── App.vue
    │   └── main.js
    └── package.json
```

---

## ⚡ Inicio Rápido

### Prerequisitos
- Node.js v16 o superior
- MongoDB (local o MongoDB Atlas)
- Cuenta de Gmail con verificación en 2 pasos

### 1. Configurar Backend

```bash
cd auth-back-project

# Crear archivo .env (ver CONFIGURACION_ENV.md para detalles)
# DATABASE_URL="mongodb+srv://..."
# PORT=3002
# JWT_SECRET=tu_secreto
# SMTP_USER=tucorreo@gmail.com
# SMTP_PASSWORD=contraseña_de_app

# Instalar dependencias
npm install

# Configurar Prisma
npx prisma generate
npx prisma db push

# Ejecutar backend
npm run dev
```

✅ Backend corriendo en `http://localhost:3002`

### 2. Configurar Frontend (nueva terminal)

```bash
cd auth-front-project

# Instalar dependencias
npm install

# Ejecutar frontend
npm run dev
```

✅ Frontend corriendo en `http://localhost:5173`

---

## 🧪 Probar el Sistema

1. **Abre el navegador** en `http://localhost:5173`
2. **Regístrate** con tu email real
3. **Revisa tu correo** y copia el código de 6 dígitos
4. **Verifica tu cuenta** ingresando el código
5. **Inicia sesión** con tus credenciales
6. **Accede al dashboard** ¡Listo! 🎉

---

## 🔄 Flujo del Sistema

```
┌─────────────┐
│   REGISTRO  │ → Datos del usuario
└──────┬──────┘
       │
       v
┌─────────────────────┐
│ Backend crea user   │
│ Status: PENDING     │ → Genera código 6 dígitos
│ Envía email         │
└──────┬──────────────┘
       │
       v
┌─────────────────────┐
│  VERIFICACIÓN       │ → Usuario ingresa código
└──────┬──────────────┘
       │
       v
┌─────────────────────┐
│ Backend valida      │
│ Status: ACTIVE      │
└──────┬──────────────┘
       │
       v
┌─────────────────────┐
│      LOGIN          │ → Credenciales
└──────┬──────────────┘
       │
       v
┌─────────────────────┐
│ Backend genera JWT  │
│ Frontend guarda     │ → Usuario autenticado
│ token en storage    │
└──────┬──────────────┘
       │
       v
┌─────────────────────┐
│    DASHBOARD        │ ✨ Acceso completo
└─────────────────────┘
```

---

## 🌐 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/auth/sign-up` | Registrar nuevo usuario |
| POST | `/api/v1/auth/verify-email` | Verificar código de email |
| POST | `/api/v1/auth/signin` | Iniciar sesión |
| POST | `/api/v1/auth/resend-verification` | Reenviar código |

---

## 🔐 Características de Seguridad

- ✅ Contraseñas hasheadas con **bcrypt** (10 rounds)
- ✅ Tokens **JWT** con expiración de 24 horas
- ✅ Código de verificación expira en **15 minutos**
- ✅ Validación de formato de email
- ✅ Validación de contraseña (mín 6 caracteres, letras y números)
- ✅ **CORS** configurado
- ✅ Estados de usuario: PENDING, ACTIVE, INACTIVE
- ✅ Verificación obligatoria antes de login

---

## 📚 Documentación Adicional

Para información más detallada, consulta:

- **[INDEX.md](./INDEX.md)** - Índice de toda la documentación
- **[GUIA_RAPIDA.md](./GUIA_RAPIDA.md)** - Setup en 5 minutos
- **[CONFIGURACION_ENV.md](./CONFIGURACION_ENV.md)** - Configurar variables de entorno
- **[INSTRUCCIONES_COMPLETAS.md](./INSTRUCCIONES_COMPLETAS.md)** - Guía paso a paso
- **[DIAGRAMA_FLUJO.md](./DIAGRAMA_FLUJO.md)** - Diagramas visuales del sistema

---

## ✨ Características Destacadas

- 🔐 Sistema de autenticación completo y seguro
- 📧 Verificación real por email con código temporal
- 🔑 JWT para sesiones persistentes
- 🎨 UI/UX moderna y profesional
- ⚡ Vite para desarrollo ultrarrápido
- 📦 Estado centralizado con Vuex
- 🛣️ Navegación fluida con Vue Router
- 🔄 Interceptores automáticos para tokens
- ✅ Validaciones exhaustivas (frontend y backend)

---

## 👨‍💻 Autor

**Proyecto desarrollado para el curso de Frameworks JavaScript**

- **Repositorio:** FRAMEWORKS-RICK-MORTY
- **Owner:** JojhanPerezArroyave
- **Branch:** main

---

<div align="center">

**¡Gracias por usar este sistema de autenticación! 🚀**

Made with ❤️ using Vue 3 + Vuex + Express

</div>
