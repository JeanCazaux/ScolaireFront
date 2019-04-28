export default [
  {
    path: "*",
    meta: {
      public: true
    },
    redirect: {
      path: "/404"
    }
  },
  {
    path: "/404",
    meta: {
      public: true
    },
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/NotFound.vue`)
  },
  {
    path: "/403",
    meta: {
      public: true
    },
    name: "AccessDenied",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Deny.vue`)
  },
  {
    path: "/500",
    meta: {
      public: true
    },
    name: "ServerError",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Error.vue`)
  },
  {
    path: "/login",
    meta: {
      public: true
    },
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "routes" */
      `@/views/Login.vue`)
  },
  {
    path: "/Mots/MotsEtSons",
    meta: {
      public: true
    },
    name: "MotsEtSons",
    component: () => import(`@/views/Mots/MotsEtSons.vue`)
  },
  {
    path: "/math/liste",
    meta: {
      public: true
    },
    name: "MathListe",
    component: () => import(`@/views/Math/Liste.vue`)
  },
  {
    path: "/math/exercice",
    meta: {
      public: true
    },
    name: "MathExercice",
    component: () => import(`@/views/Math/Exercice.vue`)
  },
  {
    path: "/",
    meta: {},
    name: "Root",
    redirect: {
      name: "MotsEtSons"
    }
  }
];
