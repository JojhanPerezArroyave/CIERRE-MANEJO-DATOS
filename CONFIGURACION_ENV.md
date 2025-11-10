# 🔐 Configuración del archivo .env para el Backend

## Ubicación
```
auth-back-project/.env
```

## Contenido del archivo

```env
# ========================================
# CONFIGURACIÓN DE BASE DE DATOS (MongoDB)
# ========================================
DATABASE_URL="mongodb+srv://usuario:password@cluster.mongodb.net/auth-app"

# Reemplaza:
# - usuario: tu usuario de MongoDB Atlas
# - password: tu contraseña
# - cluster: tu cluster de MongoDB
# - auth-app: nombre de tu base de datos


# ========================================
# CONFIGURACIÓN DEL SERVIDOR
# ========================================
PORT=3002


# ========================================
# CONFIGURACIÓN DE JWT (JSON Web Token)
# ========================================
JWT_SECRET=mi_clave_secreta_super_segura_12345_cambiame

# ⚠️ IMPORTANTE: Cambia esto por una clave aleatoria segura
# Puedes generar una con: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"


# ========================================
# CONFIGURACIÓN DE EMAIL (SMTP)
# ========================================

# Para Gmail:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=tucorreo@gmail.com
SMTP_PASSWORD=xxxx xxxx xxxx xxxx
SMTP_SECURE=true

# ⚠️ IMPORTANTE para Gmail:
# 1. Ve a tu cuenta de Google: https://myaccount.google.com/
# 2. Seguridad → Verificación en dos pasos (debe estar ACTIVADA)
# 3. Seguridad → Contraseñas de aplicaciones
# 4. Genera una contraseña para "Correo"
# 5. Usa esa contraseña aquí (16 caracteres con espacios)
# 
# NO uses tu contraseña normal de Gmail, NO funcionará


# ========================================
# EJEMPLO COMPLETO
# ========================================

# DATABASE_URL="mongodb+srv://juan123:mipassword456@cluster0.abc123.mongodb.net/sistema-auth"
# PORT=3002
# JWT_SECRET=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=465
# SMTP_USER=juan.perez@gmail.com
# SMTP_PASSWORD=abcd efgh ijkl mnop
# SMTP_SECURE=true
```

## 📝 Notas Adicionales

### ¿No tienes MongoDB?
1. Ve a https://www.mongodb.com/cloud/atlas
2. Crea una cuenta gratis
3. Crea un cluster (Free tier)
4. Crea un usuario de base de datos
5. Obtén la connection string
6. Reemplaza `<password>` con tu contraseña
7. Reemplaza `<dbname>` con `auth-app`

### ¿Cómo generar un JWT_SECRET seguro?
```bash
# En la terminal (Node.js):
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# O simplemente usa un string aleatorio largo:
JWT_SECRET=esto_es_un_secreto_muy_largo_y_aleatorio_123456789
```

### ¿Problemas con Gmail?
- Asegúrate de tener verificación en 2 pasos ACTIVADA
- Usa una "Contraseña de aplicación", NO tu contraseña normal
- Si sigue sin funcionar, intenta con otro servicio:

#### Alternativa: Ethereal Email (para testing)
```env
SMTP_HOST=smtp.ethereal.email
SMTP_PORT=587
SMTP_USER=obtener_en_ethereal.email
SMTP_PASSWORD=obtener_en_ethereal.email
SMTP_SECURE=false
```

Ve a https://ethereal.email/ para obtener credenciales de prueba

## ⚠️ Seguridad

- ❌ NO subas el archivo `.env` a Git
- ❌ NO compartas tus credenciales
- ✅ El archivo `.gitignore` ya incluye `.env`
- ✅ Usa `.env.copy` como plantilla (sin datos reales)

## ✅ Verificar que funciona

Después de crear el `.env`, ejecuta:
```bash
cd auth-back-project
npm run dev
```

Deberías ver:
```
Server running on port 3002
SMTP conectado correctamente
```

Si ves errores:
- Revisa que no haya espacios extras
- Verifica que las comillas estén correctas
- Asegúrate de que MongoDB esté accesible
- Prueba las credenciales de email

---

**¿Listo?** → Continúa con el paso 2 de la GUIA_RAPIDA.md
