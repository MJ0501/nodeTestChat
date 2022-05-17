module.exports = {
  root: true,
  env : {
    node:true,
  },
  extends : ['airbnb-base','prettier'],
  rules: {
    'import/prefer-default-export':['off'],
  }
}