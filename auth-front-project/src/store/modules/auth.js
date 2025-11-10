export default {
  namespaced: true,
  
  state: {
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    error: null,
    loading: false
  },
  
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user,
    authError: state => state.error,
    isLoading: state => state.loading
  },
  
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    
    SET_TOKEN(state, token) {
      state.token = token;
      state.isAuthenticated = true;
      localStorage.setItem('token', token);
    },
    
    SET_ERROR(state, error) {
      state.error = error;
    },
    
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    
    CLEAR_AUTH(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('token');
    },
    
    CLEAR_ERROR(state) {
      state.error = null;
    }
  },
  
  actions: {
    async register({ commit }, userData) {
      commit('SET_LOADING', true);
      commit('CLEAR_ERROR');
      
      try {
        const { register } = await import('../../services/authService');
        const response = await register(userData);
        
        commit('SET_LOADING', false);
        return response;
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Error en el registro');
        commit('SET_LOADING', false);
        throw error;
      }
    },
    
    async verifyEmail({ commit }, verificationData) {
      commit('SET_LOADING', true);
      commit('CLEAR_ERROR');
      
      try {
        const { verifyEmail } = await import('../../services/authService');
        const response = await verifyEmail(verificationData);
        
        commit('SET_LOADING', false);
        return response;
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Error en la verificación');
        commit('SET_LOADING', false);
        throw error;
      }
    },
    
    async login({ commit }, credentials) {
      commit('SET_LOADING', true);
      commit('CLEAR_ERROR');
      
      try {
        const { login } = await import('../../services/authService');
        const response = await login(credentials);
        
        commit('SET_TOKEN', response.token);
        commit('SET_USER', response.user);
        commit('SET_LOADING', false);
        
        return response;
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Error en el inicio de sesión');
        commit('SET_LOADING', false);
        throw error;
      }
    },
    
    logout({ commit }) {
      commit('CLEAR_AUTH');
    },
    
    clearError({ commit }) {
      commit('CLEAR_ERROR');
    }
  }
};
