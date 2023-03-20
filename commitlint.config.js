/**
 * 约定git提交规范
 * types:[空格]message
 * e.g. feat: 这是一个新的feature
 */

const types = [
  'feat', // 新功能 feature
  'fix', // 修复 bug
  'docs', // 文档注释
  'style', // 代码格式(不影响代码运行的变动)
  'refactor', // 重构(既不增加新功能，也不是修复bug)
  'perf', // 性能优化
  'test', // 增加测试
  'chore', // 构建过程或辅助工具的变动
  'revert', // 回退
  'build', // 打包
  'release', // 发布版本
]

const commitTypeRules = [
  2, 'always', types
]

module.exports = { 
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": commitTypeRules,
    // type 和 subject 必须为空 否则报错 不允许通过
    // "type-empty": [2, 'always'],
    // "subject-empty": [2, 'always']

    // type 和 subject 必须为空 否则警告 允许通过
    // "type-empty": [1, 'always'],
    // "subject-empty": [1, 'always']

    // type 和 subject 必须为空 可以不为空 允许通过
    "type-empty": [0, 'always'],
    "subject-empty": [0, 'always']

    // type(subject) body
  }
};
// https://blog.csdn.net/dragonballs/article/details/126313307

// https://www.swvq.com/article/detail/959/

// <type>(<scope>): <subject>
// <BLANK LINE>
// <body>
// <BLANK LINE>
// <footer></footer>

// type （必选）

// 类型	说明
// feat	新增特性
// fix	修复问题
// docs	修改文档
// style	修改代码格式（非CSS样式修改）
// refactor	重构代码
// perf	修改提高性能的代码
// test	新增、修改测试用例
// chore	修改构建流程,、依赖管理
// scope

// 本次commit的修改影响范围
// subject

// 本次commit的描述信息
// body

// 本次commit具体的修改内容
// footer

// 页脚注释 通常用于放issues