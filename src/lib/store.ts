import { create } from 'zustand'
import { References } from '@/types'

export enum WidgetState {
	Splash = 'splash',
	Loading = 'loading',
	Finished = 'finished',
	UserTyping = 'user_typing',
}

export type WidgetStore = {
	query: string
	answer: string
	state: WidgetState
	showOnMobile: boolean
	theme: 'light' | 'dark'
	references: References | null

	setQuery: (query: string) => void
	addToAnswer: (text: string) => void
	setMobileShow: (open: boolean) => void
	setState: (state: WidgetState) => void
	overwriteAnswer: (answer: string) => void
	setTheme: (theme: 'light' | 'dark') => void
	setReferences: (references: References) => void

	reset: () => void
}

const useWidgetStore = create<WidgetStore>()((set, get) => ({
	query: '',
	answer: '',
	theme: 'dark',
	references: null,
	showOnMobile: false,
	state: WidgetState.Splash,

	setState: state => set({ state }),
	setTheme: theme => set({ theme }),
	setQuery: query => set({ query }),
	overwriteAnswer: answer => set({ answer }),
	setReferences: references => set({ references }),
	setMobileShow: showOnMobile => set({ showOnMobile }),
	addToAnswer: text => set({ answer: (get().answer + text).replace('\\n', '\n') }),

	reset: () => set({ query: '', answer: '', state: WidgetState.Splash, references: null }),
}))

export default useWidgetStore
