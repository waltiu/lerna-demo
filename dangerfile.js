import { danger, fail, warn } from 'danger'

fail('This is a failure message')

warn('This is a warn message')

const mrOrPr = danger.gitlab && danger.gitlab.mr && danger.github && danger.github.pr

const { title } = mrOrPr.pr

if (!title.startsWith('feature/')) {
	fail('标题必须要由"feature/"开头')
}

// console.warn('=== danger.github:')
console.warn(JSON.stringify(mrOrPr))
