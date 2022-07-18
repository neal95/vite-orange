// https://prettier.io/docs/en/options.html
module.exports = {
  // 指定每个缩进级别的空格数。
  tabWidth: 2,
  // 是否使用tab格式化： 使用制表符而不是空格缩进行。
  useTabs: false,
  // 是否加分号，在语句的末尾打印分号。
  semi: true,
  // 是否用单引号， 项目中全部使用单引号
  singleQuote: true,
  // 每一行的宽度(显示的字符数)
  printWidth: 120,
  // 在对象文字中的括号之间打印空格。{foo:bar}格式化为{ foo: bar }
  bracketSpacing: true,
  // 在唯一的箭头函数参数周围包含括号。
  arrowParens: 'always',
  // 换行符 'lf' 'crlf' 'cr' 'auto'
  endOfLine: 'lf',
  // 在多行逗号分隔的句法结构中尽可能打印尾随逗号。 ES2017 TypeScript
  trailingComma: 'all',
};
