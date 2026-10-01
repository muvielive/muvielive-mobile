export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    RESEND_CODE: '/auth/resend-code',
    LOGOUT: '/auth/logout',
  },

  MOVIES: {
    LIST: '/movies',
    DETAILS: (id: string) => `/movies/${id}`,
    TRENDING: '/movies/trending',
    FEATURED: '/movies/featured',
  },

  PAYMENTS: {
    CREATE_ORDER: '/payments/orders',
    VERIFY: '/payments/verify',
    HISTORY: '/payments/history',
  },

  STREAMING: {
    TOKEN: '/streaming/token',
    START: '/streaming/start',
    HEARTBEAT: '/streaming/heartbeat',
  },

  PROFILE: {
    ME: '/profile',
    UPDATE: '/profile',
  },
};