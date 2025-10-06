import { create } from 'zustand'

type State = {
    username: string
    disabled: boolean
}
type Action = {
    setUsername: (name: string) => void
    toggleDisabled: () => void
}

export const useUserStore = create<State & Action>((set) => ({
    username: '',
    disabled: false,
    setUsername: (name) => set({ username: name }),
    toggleDisabled: () => set((state) => ({ disabled: !state.disabled })),
}))
