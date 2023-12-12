import { createSelectorFunctions } from 'auto-zustand-selectors-hook'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IMeQueryStore {
  user: any
  accessToken: string
  refreshToken?: string
  setStore: (data: any) => void
  setAccessToken: (data: string) => void
  logout: () => void
}

const useBaseUserStore = create<IMeQueryStore>()(
  persist(
    set => ({
      accessToken: '',
      refreshToken: undefined,
      user: {},
      setStore: data => set(() => data),
      setAccessToken: data => set(state => ({ ...state, accessToken: data })),
      logout: () => set(() => ({ accessToken: '', refreshToken: undefined, user: {} }))
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

export const useUserStore = createSelectorFunctions(useBaseUserStore)
