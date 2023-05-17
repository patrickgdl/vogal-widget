import Widget from './components/Widget'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import Store, { WidgetStore } from './lib/store'

let root: Root
let isInitialized = false

const init = (): void => {
	if (isInitialized) throw new Error('Widget is already initialized')

	const script = document.getElementById('vogal-script')
	if (script) setTheme(script.getAttribute('data-theme') as 'light' | 'dark' | undefined)

	const startApp = () => {
		try {
			if (!isInitialized) {
				const node = document.createElement('div')
				node.id = 'vogal-widget'
				document.body.appendChild(node)

				root = createRoot(node)
				root.render(<Widget />)

				isInitialized = true
			}
		} catch (error) {
			console.error('Error while rendering Widget', error)
		}
	}

	if (/complete|interactive|loaded/.test(document.readyState)) {
		// In case the document has finished parsing, document's readyState will
		// Be one of "complete", "interactive" or (non-standard) "loaded".
		startApp()
	} else {
		// The document is not ready yet, so wait for the DOMContentLoaded event
		document.addEventListener('DOMContentLoaded', startApp, false)
	}
}

export const setTheme = (theme?: WidgetStore['theme']): void => {
	if (!theme) return

	Store.setState({ theme })
}

init()
