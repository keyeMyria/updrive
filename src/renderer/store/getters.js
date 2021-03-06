import { path, last } from 'ramda'

export const bucketName = state => {
  return path(['auth', 'user', 'bucketName'], state) || ''
}

export const baseHref = state => {
  return 'http://' + bucketName(state) + '.b0.upaiyun.com/'
}

export const backUri = state => {
  const backStack = path(['list', 'history', 'backStack'], state) || []
  return last(backStack)
}

export const forwardUri = state => {
  const forwardStack = path(['list', 'history', 'forwardStack'], state) || []
  return last(forwardStack)
}

export const upyunClient = state => {
  return path(['auth', 'user', 'client'], state) || null
}
