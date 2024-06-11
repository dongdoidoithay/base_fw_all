module.exports = {
    apps : [{
      name: 'nextjs-app',
      script: 'npm',
      args: 'start',
  
      // Khởi chạy 4 instances
      instances: 4,
      exec_mode: 'cluster',
  
      // Cấu hình port 666
      env: {
        PORT: 666
      }
    }]
  }