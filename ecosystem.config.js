module.exports = {
  apps: [
    {
      name: "saas-prod",
      script: "npm",
      args: "start",
      cwd: "/var/www/app-web-app-prod",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3010, // Porta de PROD
      },
    },
    {
      name: "saas-dev",
      script: "npm",
      args: "start",
      cwd: "/var/www/app-web-app-dev",
      env: {
        NODE_ENV: "production", // Next precisa de 'start' mesmo em homolog
        PORT: 3011, // Porta de DEV
      },
    },
  ],
};
