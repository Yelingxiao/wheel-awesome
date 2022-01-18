import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import clear from 'rollup-plugin-clear'
const esmPackage = {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.esm.js',
    format: 'esm',
    name: 'PANGOLIN',
    sourcemap: true
  },
  plugins: [
    resolve(),
    commonjs({
      exclude: 'node_modules'
    }),
    json(),
    clear({
      targets: ['dist']
    }),
    typescript({
      useTsconfigDeclarationDir: true,
      clean: true
    })
  ]
}
const total = {
  esmPackage
}
let result = total
const ignore = process.env.IGNORE
const include = process.env.INCLUDE
console.log(`ignore: ${ignore}, include: ${include}`)
if (ignore) {
  delete total[ignore]
  result = total
}
if (include) {
  result = [total[include]]
}
export default [...Object.values(result)]
