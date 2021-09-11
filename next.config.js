const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {

    return {
      env: {
        mongodb_username: 'sergio',
        mongodb_password: 'azerty1978',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'nextjsblog_dev'
      }
    }
  }


  return {
    env: {
      mongodb_username: 'sergio',
      mongodb_password: 'azerty1978',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'nextjsblog'
    }
  }
  
}