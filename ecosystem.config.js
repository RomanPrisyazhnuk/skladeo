module.exports = {
  apps: [{
    name: 'skladeo',
    script: 'npm run serve',
    instances: 1,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_PATH: '.',
      PORT: '3000',
    },
    env_production: {
      NODE_ENV: 'production',
    },

  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '18.216.214.102',
      ref: 'origin/master',
      repo: "git@github.com:RomanPrisyazhnuk/skladeo.git",
      path: '/home/ubuntu/skladeo',
      ssh_options: ['StrictHostKeyChecking=no', 'IdentitiesOnly=yes'],
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
