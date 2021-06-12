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
    staging : {
      user : 'ubuntu',
      host : '54.199.236.116',
      ref  : 'origin/master',
      repo : 'git@github.com:Derrick-rocks/node.git',
      path : '/home/ubuntu/node-express-prod',
      'post-deploy' : 'npm install && pm2 start ecosystem.config.js --env prod',
    }
  }
};
