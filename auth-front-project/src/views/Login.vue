<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Iniciar Sesión</h1>
      <p class="subtitle">Ingresa a tu cuenta</p>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder="Tu contraseña"
            required
          />
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
          <div v-if="requiresVerification">
            <router-link to="/verify-email">Ir a verificar email</router-link>
          </div>
        </div>

        <div v-if="success" class="success-message">
          {{ success }}
        </div>

        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
        </button>
      </form>

      <div class="auth-footer">
        <p>¿No tienes cuenta? <router-link to="/register">Regístrate</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const formData = ref({
      email: '',
      password: ''
    });
    
    const loading = ref(false);
    const error = ref(null);
    const success = ref(null);
    const requiresVerification = ref(false);

    const handleLogin = async () => {
      error.value = null;
      success.value = null;
      requiresVerification.value = false;
      loading.value = true;

      try {
        const response = await store.dispatch('auth/login', formData.value);
        success.value = 'Login exitoso. Redirigiendo...';
        
        // Redirigir al dashboard
        setTimeout(() => {
          router.push('/dashboard');
        }, 1500);
      } catch (err) {
        error.value = err.response?.data?.message || 'Error en el inicio de sesión';
        
        if (err.response?.data?.requiresVerification) {
          requiresVerification.value = true;
        }
      } finally {
        loading.value = false;
      }
    };

    return {
      formData,
      loading,
      error,
      success,
      requiresVerification,
      handleLogin
    };
  }
};
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.auth-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
}

h1 {
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

input:focus {
  outline: none;
  border-color: #667eea;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error-message {
  background-color: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: center;
}

.error-message a {
  color: #c33;
  text-decoration: underline;
  font-weight: 600;
  display: block;
  margin-top: 8px;
}

.success-message {
  background-color: #efe;
  color: #3c3;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 15px;
  text-align: center;
}

.auth-footer {
  margin-top: 20px;
  text-align: center;
  color: #666;
}

.auth-footer a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.auth-footer a:hover {
  text-decoration: underline;
}
</style>
