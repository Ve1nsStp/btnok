import { useStorage } from '@vueuse/core'
export const info = useStorage('info', { token: null, user: null })
