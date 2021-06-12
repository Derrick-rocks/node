module.exports = {
  apps : [{
    script: 'src/app.js',
    max_memory_restart: '1G',
    instances: 1,
    env: {
      NODE_ENV: 'production'
    },
    env_prod: {
      NODE_ENV: 'production',
      PORT: 7100
    },
  }],

  deploy : {
    prod : {
      user : 'ubuntu',
      host : '54.199.236.116',
      ref  : 'origin/main',
      repo : 'git@github.com:Derrick-rocks/node.git',
      path : '/home/ubuntu/node-express-prod',
      'post-deploy' : 'ln -sf ../../shared/config.json db/config.json && npm install && ./node_modules/sequelize-cli/lib/sequelize db:migrate --env=production && pm2 start ecosystem.config.js --env prod',
    }
  }
};
