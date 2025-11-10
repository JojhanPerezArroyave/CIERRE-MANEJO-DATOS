<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Registro</h1>
      <p class="subtitle">Crea tu cuenta para comenzar</p>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="fullname">Nombre Completo</label>
          <input
            type="text"
            id="fullname"
            v-model="formData.fullname"
            placeholder="Ingresa tu nombre completo"
            required
          />
        </div>

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
            v-model="formData.current_password"
            placeholder="Mínimo 6 caracteres"
            required
          />
          <small>Debe contener al menos una letra y un número</small>
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <div v-if="success" class="success-message">
          {{ success }}
        </div>

        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Registrando...' : 'Registrarse' }}
        </button>
      </form>

      <div class="auth-footer">
        <p>¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Register',
  setup() {
    const store = useStore();
    const router = useRouter();
    
    const formData = ref({
      fullname: '',
      email: '',
      current_password: ''
    });
    
    const loading = ref(false);
    const error = ref(null);
    const success = ref(null);

    const handleRegister = async () => {
      error.value = null;
      success.value = null;
      loading.value = true;

      try {
        await store.dispatch('auth/register', formData.value);
        success.value = 'Registro exitoso. Revisa tu correo para verificar tu cuenta.';
        
        // Redirigir a verificación después de 2 segundos
        setTimeout(() => {
          router.push({
            name: 'VerifyEmail',
            query: { email: formData.value.email }
          });
        }, 2000);
      } catch (err) {
        error.value = err.response?.data?.message || 'Error en el registro';
      } finally {
        loading.value = false;
      }
    };

    return {
      formData,
      loading,
      error,
      success,
      handleRegister
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

small {
  display: block;
  margin-top: 5px;
  color: #999;
  font-size: 12px;
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
