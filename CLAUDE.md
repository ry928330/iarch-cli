# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目架构

这是一个使用Lerna管理的monorepo项目，包含多个npm包：

- `@iarch-cli/core` - 核心功能包 (packages/core/)
- `@iarch-cli/utils` - 工具函数包 (packages/utils/)

## 开发命令

### 包管理
```bash
# 安装所有依赖
npm install

# 使用Lerna管理包依赖
npx lerna bootstrap
```

### 测试
```bash
# 运行core包测试
cd packages/core && npm test

# 运行utils包测试
cd packages/utils && npm test

# 或者直接运行
node packages/core/__tests__/core.test.js
node packages/utils/__tests__/utils.test.js
```

### 包发布
```bash
# 使用Lerna发布所有包
npx lerna publish
```

## 代码结构

### 包结构
每个包遵循标准的npm包结构：
- `lib/` - 主要代码文件
- `__tests__/` - 测试文件
- `package.json` - 包配置
- `README.md` - 包文档

### 测试架构
- 使用Node.js内置的`assert`模块进行测试
- 测试文件位于各包的`__tests__/`目录
- 每个包有独立的测试脚本

### 模块导出
- 使用CommonJS模块系统 (`module.exports`)
- 每个包的主入口文件导出单一函数