export default {
  headers: {
    Authorization: 'Token 24e80ceccc9101c72ee930015c36bea4db50bdf6'
  },
  validateStatus: function (status) {
    return status <= 600;
  }
}