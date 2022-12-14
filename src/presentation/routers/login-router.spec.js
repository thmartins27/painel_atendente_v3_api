class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) return { statusCode: 500 }
    const { email, password } = httpRequest.body
    if (!email || !password) return { statusCode: 400 }
  }
}

describe('Login Router', () => {
  test('Shoud return 400 if no email is proivide', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Shoud return 400 if no password is proivide', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('Shoud return 500 if no httpRequest is proivide', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('Shoud return 500 if no httpRequest has no body', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route({})
    expect(httpResponse.statusCode).toBe(500)
  })
})
