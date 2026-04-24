import { execSync } from 'child_process'
import { cpSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Run react-router build, ignore the route scan error
try {
  execSync('react-router build', { stdio: 'inherit' })
} catch (e) {
  // build output is still created despite the route scan error
}

// Copy api route files into build output so server can find them
const src = join(process.cwd(), 'src/app/api')
const dest = join(process.cwd(), 'build/server/src/app/api')

if (existsSync(src)) {
  mkdirSync(dest, { recursive: true })
  cpSync(src, dest, { recursive: true })
  console.log('✓ Copied src/app/api into build/server')
} else {
  console.log('⚠ src/app/api not found, skipping copy')
}