const env = import.meta.env

const NAMESPACE_KEY = 'VITE_LOG_NAMESPACE'

export const getDefaultLogNamespace = () => {
  return env[NAMESPACE_KEY] || 'DEBUG'
}
