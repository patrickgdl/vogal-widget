import { WidgetStore } from '@/lib/store'
import { FC, memo, useEffect } from 'react'

declare global {
	interface Window {
		Vogal?: {
			setTheme: (theme?: WidgetStore['theme']) => void
		}
	}
}

type Props = {
	theme?: WidgetStore['theme']
}

const WidgetClient: FC<Props> = ({ theme }) => {
	useEffect(() => {
		if (document.getElementById('vogal-script')) return

		const script = document.createElement('script')
		script.src = 'https://unpkg.com/vogal-widget'
		script.async = true
		script.id = 'vogal-script'
		if (theme) script.setAttribute('data-theme', theme)
		document.body.appendChild(script)
	}, [])

	useEffect(() => {
		window.Vogal?.setTheme(theme)
	}, [theme])

	return null
}

export default memo(WidgetClient)
