# 🚀 Instrucciones para Ejecutar el Proyecto Completo

## Requisitos Previos

- Node.js instalado (v16 o superior)
- MongoDB (conexión configurada en el backend)
- Cuenta de correo configurada para SMTP (Gmail recomendado)

---

## 📦 PASO 1: Configurar el Backend

### 1.1 Navegar a la carpeta del backend

```bash
cd c:/undecimoSemestre/frameworksJavaScript/cierre/auth-back-project
```

### 1.2 Crear archivo .env

Copia el archivo `.env.copy` y renómbralo a `.env`, luego configura las siguientes variables:

```env
DATABASE_URL="mongodb+srv://usuario:password@cluster.mongodb.net/tu-base-de-datos"
PORT=3002
JWT_SECRET=tu_secreto_jwt_super_seguro_aqui
# Configuración SMTP - Envío correos
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=tucorreo@gmail.com
SMTP_PASSWORD=tu_contraseña_de_aplicacion_de_gmail
SMTP_SECURE=true
```

**⚠️ IMPORTANTE para Gmail:**
- Debes generar una "Contraseña de Aplicación" en tu cuenta de Google
- Ve a: Cuenta de Google → Seguridad → Verificación en dos pasos → Contraseñas de aplicaciones
- Genera una contraseña para "Correo" y úsala en `SMTP_PASSWORD`

### 1.3 Instalar dependencias

```bash
npm install
```

### 1.4 Configurar Prisma (Base de datos)

```bash
npx prisma generate
npx prisma db push
```

### 1.5 Ejecutar el backend

```bash
npm run dev
```

✅ El backend debe estar corriendo en `http://localhost:3002`

---

## 🎨 PASO 2: Configurar el Frontend

### 2.1 Abrir una NUEVA terminal y navegar al frontend

```bash
cd c:/undecimoSemestre/frameworksJavaScript/cierre/auth-front-project
```

### 2.2 Instalar dependencias

```bash
npm install
```

### 2.3 Ejecutar el frontend

```bash
npm run dev
```

✅ El frontend debe estar corriendo en `http://localhost:5173`

---

## 🧪 PASO 3: Probar el Sistema

### Test 1: Registro de Usuario

1. Abre el navegador en `http://localhost:5173`
2. Deberías ver el formulario de Login, haz clic en "Regístrate"
3. Completa el formulario:
   - Nombre Completo: `Juan Pérez`
   - Email: `tu_correo_real@gmail.com`
   - Contraseña: `Password123`
4. Haz clic en "Registrarse"
5. ✅ Deberías recibir un email con el código de verificación

### Test 2: Verificación de Email

1. Revisa tu correo electrónico
2. Copia el código de 6 dígitos
3. Serás redirigido automáticamente a la pantalla de verificación
4. Ingresa tu email y el código
5. Haz clic en "Verificar Cuenta"
6. ✅ Tu cuenta está verificada

### Test 3: Inicio de Sesión

1. Ingresa el email y contraseña que registraste
2. Haz clic en "Iniciar Sesión"
3. ✅ Deberías ver el mensaje de login exitoso

---

## 🔍 Verificar que todo funciona

### Backend (Terminal 1)
Deberías ver logs como:
```
Server running on port 3002
SMTP conectado correctamente
Email enviado: <message-id>
```

### Frontend (Terminal 2)
Deberías ver:
```
VITE v5.2.0  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### Consola del Navegador
- Abre las DevTools (F12)
- En la pestaña "Network" verás las peticiones a:
  - POST `http://localhost:3002/api/v1/auth/sign-up`
  - POST `http://localhost:3002/api/v1/auth/verify-email`
  - POST `http://localhost:3002/api/v1/auth/signin`

---

## ⚠️ Solución de Problemas Comunes

### ❌ Error: SMTP connection failed
**Solución:** Verifica que:
- Tu contraseña de aplicación de Gmail esté correcta
- La verificación en dos pasos esté activada en Google
- No uses tu contraseña normal de Gmail

### ❌ Error: Cannot connect to MongoDB
**Solución:**
- Verifica que tu `DATABASE_URL` sea correcta
- Asegúrate de que MongoDB Atlas permita tu IP
- Verifica que el usuario y contraseña sean correctos

### ❌ Error: CORS
**Solución:** El backend ya está configurado para permitir `http://localhost:5173`

### ❌ No recibo el email
**Solución:**
- Revisa la carpeta de spam
- Verifica los logs del backend
- Asegúrate de que SMTP_USER sea correcto

---

## 📁 Estructura Final del Proyecto

```
cierre/
├── auth-back-project/          # Backend (Express + Prisma + MongoDB)
│   ├── src/
│   ├── prisma/
│   ├── .env                    # ⚠️ Debes crear este archivo
│   └── package.json
│
└── auth-front-project/         # Frontend (Vue 3 + Vuex + Vue Router)
    ├── src/
    │   ├── store/
    │   ├── views/
    │   ├── router/
    │   ├── services/
    │   └── App.vue
    └── package.json
```

---

## 🎯 Endpoints de la API

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/auth/sign-up` | Registro de usuario |
| POST | `/api/v1/auth/verify-email` | Verificación de email |
| POST | `/api/v1/auth/signin` | Inicio de sesión |
| POST | `/api/v1/auth/resend-verification` | Reenviar código |

---

## ✅ Checklist Final

- [ ] Backend corriendo en puerto 3002
- [ ] Frontend corriendo en puerto 5173
- [ ] Archivo .env configurado correctamente
- [ ] MongoDB conectado
- [ ] SMTP configurado y funcionando
- [ ] Puedes registrar un usuario
- [ ] Recibes el email de verificación
- [ ] Puedes verificar tu cuenta
- [ ] Puedes iniciar sesión

---

## 🎉 ¡Listo!

Si todos los pasos están completos y funcionando, tu sistema de autenticación está operativo.

**Flujo completo:**
1. Usuario se registra → Recibe código por email
2. Usuario ingresa el código → Cuenta verificada
3. Usuario inicia sesión → Obtiene token JWT

**Características implementadas:**
✅ Registro con validaciones
✅ Verificación por email con código de 6 dígitos
✅ Código expira en 15 minutos
✅ Login con JWT
✅ Token válido por 24 horas
✅ Manejo de estados con Vuex
✅ Navegación con Vue Router
✅ Diseño responsive

---

## 📚 Recursos Adicionales

- [Vue 3 Documentation](https://vuejs.org/)
- [Vuex Documentation](https://vuex.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Express Documentation](https://expressjs.com/)
