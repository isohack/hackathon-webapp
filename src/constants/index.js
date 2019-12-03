const prod = {
  BASE_URL: 'https://isohack.herokuapp.com',
};

const dev = {
  BASE_URL: 'http://localhost:8000'
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;