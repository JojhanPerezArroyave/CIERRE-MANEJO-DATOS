# ⚡ GUÍA RÁPIDA - Ejecutar el Taller

## 🎯 Objetivo
Sistema completo de autenticación con Vue 3 + Vuex + Backend Express

---

## ⏱️ 5 PASOS RÁPIDOS

### 1️⃣ Configurar Backend (.env)
```bash
cd c:/undecimoSemestre/frameworksJavaScript/cierre/auth-back-project
```

Crear archivo `.env`:
```env
DATABASE_URL="mongodb+srv://usuario:password@cluster.mongodb.net/tu-base"
PORT=3002
JWT_SECRET=mi_secreto_super_seguro_123
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=tucorreo@gmail.com
SMTP_PASSWORD=tu_password_de_app_gmail
SMTP_SECURE=true
```

### 2️⃣ Instalar y ejecutar Backend
```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```
✅ Backend en `http://localhost:3002`

### 3️⃣ Instalar y ejecutar Frontend (nueva terminal)
```bash
cd c:/undecimoSemestre/frameworksJavaScript/cierre/auth-front-project
npm install
npm run dev
```
✅ Frontend en `http://localhost:5173`

### 4️⃣ Probar en el navegador
1. Abre `http://localhost:5173`
2. Clic en "Regístrate"
3. Llena el formulario (usa tu email real)
4. Revisa tu email y copia el código
5. Verifica tu cuenta
6. Inicia sesión

### 5️⃣ ¡Listo! 🎉
Sistema funcionando completamente

---

## 📋 Checklist Rápido

- [ ] Archivo `.env` creado y configurado
- [ ] Backend corriendo (puerto 3002)
- [ ] Frontend corriendo (puerto 5173)
- [ ] MongoDB conectado
- [ ] Email de verificación recibido
- [ ] Login exitoso

---

## ⚠️ Si algo falla

### Backend no inicia
- Verifica MongoDB connection string
- Verifica que el puerto 3002 no esté en uso

### No llega el email
- Revisa spam
- Verifica SMTP_USER y SMTP_PASSWORD
- Asegúrate de usar "Contraseña de aplicación" de Google

### Frontend da error
- Verifica que backend esté corriendo
- Limpia caché: Ctrl + Shift + R

---

## 📂 Archivos Creados

### Frontend Completo (NUEVO)
```
auth-front-project/
├── src/
│   ├── store/modules/auth.js     ← Vuex
│   ├── views/Register.vue        ← Vistas
│   ├── views/VerifyEmail.vue
│   ├── views/Login.vue
│   ├── router/index.js           ← Rutas
│   ├── services/authService.js   ← HTTP
│   ├── App.vue
│   └── main.js
├── package.json
├── vite.config.js
└── index.html
```

### Documentación
- `INSTRUCCIONES_COMPLETAS.md` ← Guía detallada paso a paso
- `RESUMEN_TALLER.md` ← Resumen completo del proyecto

---

## 🎯 Flujo Completo

```
REGISTRO → VERIFICACIÓN → LOGIN
   ↓            ↓           ↓
Backend      Email con    Token JWT
genera       código de    guardado en
usuario      6 dígitos    localStorage
PENDING                   
```

---

## 💡 Comandos de Emergencia

### Reiniciar todo
```bash
# Terminal 1 - Backend
cd auth-back-project
npm run dev

# Terminal 2 - Frontend
cd auth-front-project
npm run dev
```

### Verificar que todo funciona
```bash
# Backend
curl http://localhost:3002/api/v1/auth/sign-up

# Frontend
curl http://localhost:5173
```

---

## 📞 Endpoints del Backend

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/v1/auth/sign-up` | POST | Registro |
| `/api/v1/auth/verify-email` | POST | Verificación |
| `/api/v1/auth/signin` | POST | Login |

---

## ✅ ¿Funcionó?

Si puedes:
1. ✅ Registrar un usuario
2. ✅ Recibir email con código
3. ✅ Verificar tu cuenta
4. ✅ Iniciar sesión

**🎉 ¡TALLER COMPLETADO CON ÉXITO!**

---

**Tiempo estimado:** 15-20 minutos  
**Nivel:** Intermedio  
**Framework:** Vue 3 + Vuex + Express
