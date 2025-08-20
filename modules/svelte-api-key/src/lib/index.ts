import { createAuthClient } from 'better-auth/client'
import { apiKeyClient } from 'better-auth/client/plugins'

const client = createAuthClient(
  {
    baseURL: import.meta.env.VITE_API_BASE_URL!,
    plugins: [apiKeyClient()]
  }
)

// @ts-expect-error
globalThis.client = client

// @ts-expect-error
globalThis.register = async function register () {
  const randomEmail = `test-${Math.random().toString(36).substring(2, 15)}@test.com`
  await client.signUp.email({
    email: randomEmail,
    password: 'password',
    name: 'Test User'
  })
  const apiKey = await client.apiKey.create()
  console.log('apiKey', apiKey)
}
