const dev = {
  strapi: {
    api_url: 'http://127.0.0.1:3001'
  }
}

const prod = {
  strapi: {
    api_url: 'https://modshop.herokuapp.com'
  }
}

const config = (process.env.REACT_APP_STAGE === "production") ? prod : dev;

export default {
  ...config
}
