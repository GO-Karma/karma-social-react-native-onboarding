import AsyncStorage from '@react-native-async-storage/async-storage'

const prefix = '@GO_KARMA_ONBOARDING'

const Storage = {
  setItem: async (key, value) => {
    try {
      const k = `${prefix}:${key}`
      const v = { data: value }

      await AsyncStorage.setItem(k, JSON.stringify(v))

      return true
    } catch (e) {
      return false
    }
  },
  getItem: async (key, defaultValue = false) => {
    try {
      const value = await AsyncStorage.getItem(`${prefix}:${key}`)

      if (value === null) {
        return defaultValue
      }

      return JSON.parse(value).data
    } catch (error) {
      return defaultValue
    }
  },
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(`${prefix}:${key}`)
    } catch (error) {
      return error
    }
  },
  mergeItem: (key, value) =>
    AsyncStorage.mergeItem(`${prefix}:${key}`, JSON.stringify({ data: value })),
  clear: async () => {
    const keys = await AsyncStorage.getAllKeys()
    const blackList = []
    const appKeys = keys.filter((key) => key.startsWith(`${prefix}:`) && !blackList.includes(key))

    await AsyncStorage.multiRemove(appKeys)
  }
}

export default Storage
