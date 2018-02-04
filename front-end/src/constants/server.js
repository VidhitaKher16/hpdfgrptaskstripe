const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.advance88.hasura-app.io/charge'
  : 'http://localhost:8080';

export default PAYMENT_SERVER_URL;