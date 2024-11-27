import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootpath = path.join(__dirname, '')
console.log(rootpath)

export default rootpath