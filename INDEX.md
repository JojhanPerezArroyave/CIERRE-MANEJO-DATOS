# 📚 ÍNDICE DEL TALLER - Sistema de Autenticación Vue + Vuex

> **Taller:** Registro, Verificación e Inicio de Sesión en Vue con Vuex y Backend  
> **Framework:** Vue 3 + Vuex + Express.js + MongoDB  
> **Repositorio:** FRAMEWORKS-RICK-MORTY  

---

## 🚀 INICIO RÁPIDO (5 minutos)

¿Quieres empezar ya? → Lee **[GUIA_RAPIDA.md](./GUIA_RAPIDA.md)**

---

## 📖 DOCUMENTACIÓN DISPONIBLE

### 1. 🎯 Para Comenzar

| Archivo | Descripción | Para quién |
|---------|-------------|------------|
| **[GUIA_RAPIDA.md](./GUIA_RAPIDA.md)** | Pasos esenciales en 5 minutos | ⚡ Principiantes - Inicio rápido |
| **[CONFIGURACION_ENV.md](./CONFIGURACION_ENV.md)** | Configurar el archivo .env con ejemplos | 🔧 Necesitas configurar variables |
| **[INSTRUCCIONES_COMPLETAS.md](./INSTRUCCIONES_COMPLETAS.md)** | Guía paso a paso detallada | 📚 Quieres entender todo |

### 2. 📊 Para Entender el Sistema

| Archivo | Descripción | Para quién |
|---------|-------------|------------|
| **[RESUMEN_TALLER.md](./RESUMEN_TALLER.md)** | Resumen ejecutivo del proyecto | 📋 Visión general completa |
| **[DIAGRAMA_FLUJO.md](./DIAGRAMA_FLUJO.md)** | Diagramas visuales y secuencias | 🎨 Aprendizaje visual |

### 3. 💻 Proyectos

| Carpeta | Descripción | Tecnologías |
|---------|-------------|-------------|
| **[auth-back-project/](./auth-back-project/)** | Backend del sistema | Express + Prisma + MongoDB |
| **[auth-front-project/](./auth-front-project/)** | Frontend del sistema | Vue 3 + Vuex + Vue Router |

---

## 🎓 ¿QUÉ VAS A APRENDER?

### Frontend
- ✅ Vue 3 con Composition API
- ✅ Vuex para manejo de estado global
- ✅ Vue Router con guards de navegación
- ✅ Peticiones HTTP con Axios
- ✅ Manejo de formularios y validaciones
- ✅ Almacenamiento local (localStorage)
- ✅ Interceptores HTTP para autenticación
- ✅ Diseño responsive moderno

### Backend
- ✅ Express.js para APIs RESTful
- ✅ Prisma ORM con MongoDB
- ✅ Autenticación con JWT
- ✅ Hash de contraseñas con Bcrypt
- ✅ Envío de emails con Nodemailer
- ✅ Validaciones de datos
- ✅ CORS y seguridad
- ✅ Manejo de errores

### Conceptos
- ✅ Sistema de autenticación en 3 pasos
- ✅ Verificación por email
- ✅ Tokens JWT
- ✅ Flujo completo Frontend ↔️ Backend
- ✅ Arquitectura de aplicación moderna

---

## 🔄 FLUJO DEL SISTEMA

```
1. REGISTRO
   Usuario se registra → Backend crea usuario PENDING
   → Envía código por email

2. VERIFICACIÓN  
   Usuario ingresa código → Backend verifica
   → Cambia status a ACTIVE

3. LOGIN
   Usuario inicia sesión → Backend valida
   → Retorna token JWT → Usuario autenticado
```

---

## 📂 ESTRUCTURA DEL PROYECTO

```
cierre/
│
├── 📄 INDEX.md                        ← Estás aquí
├── 📄 GUIA_RAPIDA.md                  ← Inicio en 5 minutos
├── 📄 CONFIGURACION_ENV.md            ← Configurar .env
├── 📄 INSTRUCCIONES_COMPLETAS.md      ← Guía detallada
├── 📄 RESUMEN_TALLER.md               ← Resumen del proyecto
├── 📄 DIAGRAMA_FLUJO.md               ← Diagramas visuales
│
├── 📁 auth-back-project/              ← Backend (Express + Prisma)
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── router/
│   │   ├── config/
│   │   └── middleware/
│   ├── prisma/
│   ├── .env.copy
│   ├── package.json
│   └── README.md
│
└── 📁 auth-front-project/             ← Frontend (Vue 3 + Vuex)
    ├── src/
    │   ├── store/                     ← Vuex Store
    │   │   └── modules/
    │   │       └── auth.js
    │   ├── views/                     ← Componentes de vistas
    │   │   ├── Register.vue
    │   │   ├── VerifyEmail.vue
    │   │   └── Login.vue
    │   ├── router/                    ← Vue Router
    │   │   └── index.js
    │   ├── services/                  ← HTTP Axios
    │   │   └── authService.js
    │   ├── App.vue
    │   └── main.js
    ├── package.json
    ├── vite.config.js
    └── README.md
```

---

## 🛤️ RUTAS RECOMENDADAS DE LECTURA

### Si eres principiante:
1. **GUIA_RAPIDA.md** - Entiende el proyecto
2. **CONFIGURACION_ENV.md** - Configura el backend
3. Ejecuta el proyecto
4. **DIAGRAMA_FLUJO.md** - Visualiza cómo funciona
5. **INSTRUCCIONES_COMPLETAS.md** - Detalles avanzados

### Si tienes experiencia:
1. **RESUMEN_TALLER.md** - Visión general
2. **GUIA_RAPIDA.md** - Setup rápido
3. Revisa el código en `/auth-front-project/src/`
4. **DIAGRAMA_FLUJO.md** - Arquitectura del sistema

### Si tienes problemas:
1. **CONFIGURACION_ENV.md** - Verifica configuración
2. **INSTRUCCIONES_COMPLETAS.md** → Sección "Solución de Problemas"
3. Revisa los logs de consola
4. Verifica que backend y frontend estén corriendo

---

## ⏱️ TIEMPO ESTIMADO

| Actividad | Tiempo |
|-----------|--------|
| Lectura de documentación | 10-15 min |
| Configuración inicial | 10-15 min |
| Instalación de dependencias | 5-10 min |
| Prueba del sistema | 5-10 min |
| **TOTAL** | **30-50 min** |

---

## ✅ CHECKLIST GENERAL

### Antes de empezar:
- [ ] Node.js instalado (v16+)
- [ ] Cuenta de MongoDB Atlas (o local)
- [ ] Cuenta de Gmail (para SMTP)
- [ ] Editor de código (VS Code recomendado)

### Durante el setup:
- [ ] Backend configurado y corriendo
- [ ] Frontend corriendo
- [ ] Archivo .env creado
- [ ] MongoDB conectado
- [ ] SMTP funcionando

### Al finalizar:
- [ ] Puedo registrar un usuario
- [ ] Recibo el email de verificación
- [ ] Puedo verificar mi cuenta
- [ ] Puedo iniciar sesión
- [ ] El token se guarda correctamente

---

## 🔗 ENLACES ÚTILES

### Documentación oficial:
- [Vue 3](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Axios](https://axios-http.com/)

### Recursos adicionales:
- [JWT.io](https://jwt.io/) - Decodificar tokens
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Base de datos
- [Ethereal Email](https://ethereal.email/) - Testing de emails

---

## 📞 COMANDOS RÁPIDOS

```bash
# Backend
cd auth-back-project
npm install
npm run dev

# Frontend (nueva terminal)
cd auth-front-project
npm install
npm run dev
```

---

## 🎯 ENDPOINTS DE LA API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/auth/sign-up` | Registrar usuario |
| POST | `/api/v1/auth/verify-email` | Verificar email |
| POST | `/api/v1/auth/signin` | Iniciar sesión |
| POST | `/api/v1/auth/resend-verification` | Reenviar código |

---

## 🌟 CARACTERÍSTICAS DESTACADAS

- 🔐 **Seguridad:** JWT + Bcrypt + Validaciones
- 📧 **Email:** Sistema de verificación real
- 🎨 **UI/UX:** Diseño moderno y responsive
- ⚡ **Performance:** Vite para desarrollo rápido
- 📦 **Estado:** Vuex para gestión centralizada
- 🛣️ **Navegación:** Vue Router con guards
- 🔄 **HTTP:** Axios con interceptores
- ✅ **Validaciones:** Frontend y Backend

---

## 💡 PRÓXIMOS PASOS

Después de completar el taller, podrías:

1. **Agregar dashboard** - Crear vista protegida para usuarios autenticados
2. **Recuperar contraseña** - Implementar reset password
3. **Perfil de usuario** - Vista para editar datos
4. **Roles y permisos** - Sistema de autorización
5. **Testing** - Agregar tests unitarios
6. **Deploy** - Subir a producción (Vercel, Heroku, etc.)

---

## 🎓 NIVEL DEL TALLER

- **Dificultad:** Intermedio
- **Requisitos previos:**
  - JavaScript básico
  - Conocimientos de Vue.js
  - Conceptos de APIs REST
  - Familiaridad con terminal/comandos

---

## 📝 NOTAS IMPORTANTES

> ⚠️ **Este es un proyecto educativo.** En producción, considera:
> - Usar HTTPS
> - Implementar rate limiting
> - Agregar refresh tokens
> - Mejorar validaciones
> - Agregar logging
> - Implementar monitoring

---

## 🤝 CONTRIBUCIONES

Este proyecto es parte del curso de Frameworks JavaScript.

**Repositorio:** FRAMEWORKS-RICK-MORTY  
**Branch:** main  
**Owner:** JojhanPerezArroyave  

---

## 🎉 ¡EMPECEMOS!

1. Si es tu primera vez → Lee **[GUIA_RAPIDA.md](./GUIA_RAPIDA.md)**
2. Si necesitas configurar → Lee **[CONFIGURACION_ENV.md](./CONFIGURACION_ENV.md)**
3. Si quieres detalles → Lee **[INSTRUCCIONES_COMPLETAS.md](./INSTRUCCIONES_COMPLETAS.md)**
4. Si prefieres visual → Lee **[DIAGRAMA_FLUJO.md](./DIAGRAMA_FLUJO.md)**

---

**¡Éxito con tu taller! 🚀**

---

<div align="center">

Made with ❤️ for learning Vue 3 + Vuex

</div>
