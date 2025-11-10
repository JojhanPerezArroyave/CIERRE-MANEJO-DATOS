<template>
  <div class="dashboard-container">
    <div class="dashboard-card">
      <div class="header">
        <h1>🎉 ¡Bienvenido!</h1>
        <button @click="handleLogout" class="btn-logout">Cerrar Sesión</button>
      </div>

      <div class="user-info" v-if="currentUser">
        <h2>Información del Usuario</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">Nombre:</span>
            <span class="value">{{ currentUser.fullname }}</span>
          </div>
          <div class="info-item">
            <span class="label">Email:</span>
            <span class="value">{{ currentUser.email }}</span>
          </div>
          <div class="info-item">
            <span class="label">Rol:</span>
            <span class="value">{{ currentUser.role }}</span>
          </div>
          <div class="info-item">
            <span class="label">Estado:</span>
            <span class="value status-active">{{ currentUser.status }}</span>
          </div>
        </div>
      </div>

      <div class="token-info">
        <h3>🔑 Token JWT</h3>
        <div class="token-box">
          <code>{{ tokenPreview }}</code>
        </div>
        <p class="token-note">El token expira en 24 horas</p>
      </div>

      <div class="success-message">
        ✅ Has iniciado sesión exitosamente
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'Dashboard',
  setup() {
    const store = useStore();
    const router = useRouter();

    const currentUser = computed(() => store.getters['auth/currentUser']);
    const token = computed(() => store.state.auth.token);
    
    const tokenPreview = computed(() => {
      if (token.value) {
        return token.value.substring(0, 50) + '...';
      }
      return 'No token';
    });

    const handleLogout = () => {
      store.dispatch('auth/logout');
      router.push('/login');
    };

    return {
      currentUser,
      tokenPreview,
      handleLogout
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.dashboard-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
}

h1 {
  color: #333;
  margin: 0;
  font-size: 32px;
}

.btn-logout {
  padding: 10px 20px;
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s;
}

.btn-logout:hover {
  transform: translateY(-2px);
  background: #ee2f3f;
}

.user-info {
  margin-bottom: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}

.user-info h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 20px;
}

.info-grid {
  display: grid;
  gap: 15px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background: white;
  border-radius: 5px;
  border-left: 4px solid #667eea;
}

.label {
  font-weight: 600;
  color: #666;
}

.value {
  color: #333;
  font-weight: 500;
}

.status-active {
  color: #27ae60;
  font-weight: 700;
}

.token-info {
  margin-bottom: 30px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
}

.token-info h3 {
  color: #333;
  margin-bottom: 15px;
}

.token-box {
  background: #2d3436;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow-x: auto;
}

.token-box code {
  color: #00ff88;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  word-break: break-all;
}

.token-note {
  color: #666;
  font-size: 14px;
  margin: 0;
  text-align: center;
}

.success-message {
  background: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
  border: 1px solid #c3e6cb;
}

@media (max-width: 600px) {
  .dashboard-card {
    padding: 20px;
  }

  h1 {
    font-size: 24px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }

  .info-item {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
