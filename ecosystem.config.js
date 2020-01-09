module.exports = {
  apps: [{
    name: 'nuxt-steven',
    script: 'npm run start:new',
    args: 'one two',
    autorestart: true,
    watch: false,
    output: './logs/out.log',
    error: './logs/error.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    max_memory_restart: '300M',
    env_production: {
      NODE_ENV: 'production'
    },
    env_demo: {
      NODE_ENV: 'demo'
    }
  }],
  deploy: {
    demo: {
      user: 'root',
      host: ['123.456.78.9'],
      ref: 'origin/test',
      repo: 'https://github.com/zuorong/ssr-nuxt.git',
      path: '/web/nuxt-project',
      'pre-setup': 'rm -rf /web/nuxt-project',
      'pre-deploy': 'git pull',
      'post-deploy': 'npm i && pm2 startOrReload ecosystem.config.js --env demo'
    },
    'demo-fast': {
      user: 'root',
      host: ['123.456.78.9'],
      ref: 'origin/test',
      repo: 'https://github.com/zuorong/ssr-nuxt.git',
      path: '/web/nuxt-project',
      'pre-setup': 'rm -rf /web/nuxt-project',
      'pre-deploy': 'git pull',
      'post-deploy': 'pm2 startOrReload ecosystem.config.js --env demo'
    },
    production: {
      user: 'root',
      host: ['123.456.78.9'],
      ref: 'origin/master',
      repo: 'https://github.com/zuorong/ssr-nuxt.git',
      path: '/web/pro/nuxt-project',
      'pre-setup': 'rm -rf /web/pro/nuxt-project',
      'pre-deploy': 'git pull',
      'post-deploy': 'npm i && npm run build && pm2 startOrReload ecosystem.config.js --env production'
    },
    'production-fast': {
      user: 'root',
      host: ['123.456.78.9'],
      ref: 'origin/master',
      repo: 'https://github.com/zuorong/ssr-nuxt.git',
      path: '/web/pro/nuxt-project',
      'pre-setup': 'rm -rf /web/pro/nuxt-project',
      'pre-deploy': 'git pull',
      'post-deploy': 'npm run build && pm2 startOrReload ecosystem.config.js --env production'
    }
  }
};