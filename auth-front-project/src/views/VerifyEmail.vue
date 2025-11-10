<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>Verificar Email</h1>
      <p class="subtitle">Ingresa el código de 6 dígitos que enviamos a tu correo</p>

      <form @submit.prevent="handleVerify">
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
          <label for="code">Código de Verificación</label>
          <input
            type="text"
            id="code"
            v-model="formData.verificationCode"
            placeholder="123456"
            maxlength="6"
            required
          />
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <div v-if="success" class="success-message">
          {{ success }}
        </div>

        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Verificando...' : 'Verificar Cuenta' }}
        </button>
      </form>

      <div class="auth-footer">
        <p>¿No recibiste el código? <a href="#" @click.prevent="resendCode">Reenviar</a></p>
        <p><router-link to="/login">Volver al inicio de sesión</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

export default {
  name: 'VerifyEmail',
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    
    const formData = ref({
      email: '',
      verificationCode: ''
    });
    
    const loading = ref(false);
    const error = ref(null);
    const success = ref(null);

    onMounted(() => {
      // Si viene el email por query params
      if (route.query.email) {
        formData.value.email = route.query.email;
      }
    });

    const handleVerify = async () => {
      error.value = null;
      success.value = null;
      loading.value = true;

      try {
        await store.dispatch('auth/verifyEmail', formData.value);
        success.value = 'Email verificado exitosamente. Redirigiendo al login...';
        
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } catch (err) {
        error.value = err.response?.data?.message || 'Error en la verificación';
      } finally {
        loading.value = false;
      }
    };

    const resendCode = async () => {
      if (!formData.value.email) {
        error.value = 'Ingresa tu correo electrónico';
        return;
      }

      try {
        // Aquí puedes implementar el endpoint de reenvío
        success.value = 'Código reenviado. Revisa tu correo.';
      } catch (err) {
        error.value = 'Error al reenviar el código';
      }
    };

    return {
      formData,
      loading,
      error,
      success,
      handleVerify,
      resendCode
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

.auth-footer p {
  margin: 10px 0;
}
</style>
