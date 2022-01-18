module.exports = {
  printWidth: 160, // 单行输出（不折行）的（最大）长度
  tabWidth: 2, // 每个缩进级别的空格数
  tabs: false, // 使用制表符 (tab) 缩进行而不是空格 (space)。
  semi: false, // 是否在语句末尾打印分号
  vueIndentScriptAndStyle: true, // 缩进Vue文件中的脚本和样式标签
  singleQuote: true, // 单引号
  quoteProps: 'as-needed', // 仅在需要时在对象属性周围添加引号
  bracketSpacing: true, // 是否在对象属性添加空格
  trailingComma: 'none', // 未尾分号
  jsxBracketSameLine: false,
  jsxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  proseWrap: 'always', // 当超出print width（上面有这个参数）时就折行
  htmlWhitespaceSensitivity: 'strict', // 空格被认为是敏感的
  endOfLine: 'lf' // 换行符使用 lf
}
