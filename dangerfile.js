import { danger, fail, warn } from 'danger'

fail('This is a failure message')

warn('This is a warn message')

if (danger.github.pr.title.startsWith('feature/')) {
	fail('标题必须要由"feature/"开头')
}

// console.warn('=== danger.github:')
// console.warn(JSON.stringify(danger.github))
