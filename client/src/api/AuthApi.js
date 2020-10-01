class AuthApi {
  url = 'localhost:5000';

  async login(name) {
    const res = await fetch(this.url, {
      method: 'POST',
      body: {name}
    })
  }
}

export default new AuthApi();