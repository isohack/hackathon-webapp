const prod = {
  BASE_URL: process.env.REACT_APP_BASE_URL
};

const dev = {
  BASE_URL: 'http://localhost:8000'
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod ;