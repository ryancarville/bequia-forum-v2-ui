
export const CONFIG = {
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development',
  COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID || '',
  COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID || '',
  AWS_REGION: process.env.AWS_REGION || 'eu-central-1',
  API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8000'
};
