import { danger, fail, warn} from 'danger'

fail('This is a failure message')

warn('This is a warn message')

console.warn('pr title:', danger.github.pr.title)

console.warn('=== danger.github:')
console.warn(JSON.stringify(danger.github))
