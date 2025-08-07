// What is difference between undefined and null in JavaScript?

/**
 * undefined means a variable has been declared but has not yet been assigned a value.
 * null is an assigned value that represents "no value" or "no object".
 **/

/**
 * INFO: MEMEROY TECHNIQUE
 * null = like a fridge that is powered on but empty
 * undefined = like a fridge that is not plugged in at all
 **/

let a
console.log(a) // undefined

let b = null
console.log(b) // null

console.log(typeof a) // "undefined"
console.log(typeof b) // "object"  // Note: typeof null returns "object" due to a historical bug in JavaScript

export function normalizeResponse(response) {
  return {
    status: response?.status ?? 200,
    data: response?.data ?? null,
    error: response?.error ?? null,
    message: response?.message ?? 'No message provided',
    headers: response?.headers ?? {},
    config: response?.config ?? {},
    request: response?.request ?? null,
    statusText: response?.statusText ?? 'OK'
  }
}

export function normalizeUserResponse(userResponse) {
  return {
    id: userResponse?.id ?? null,
    name: userResponse?.name ?? 'Anonymous',
    email: userResponse?.email ?? 'No email provided',
    age: userResponse?.age ?? null,
    isActive: userResponse?.isActive ?? false
  }
}

const response = {
  status: 404,
  data: { id: 1, name: 'John Doe', email: 'johnDoe@example.com' },
  error: 'Not Found',
  message: 'The requested resource was not found.',
  headers: {
    'Content-Type': 'application/json'
  },
  config: {
    method: 'GET',
    url: '/api/resource'
  },
  request: null,
  statusText: 'Not Found'
}

let normalizedResponse = normalizeResponse(response)

console.log(normalizedResponse)

let normalizedUserResponse = normalizeUserResponse(normalizedResponse.data)

console.log(normalizedUserResponse)
