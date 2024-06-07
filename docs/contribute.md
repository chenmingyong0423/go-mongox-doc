---
layout: doc
sidebar: false
prev: false
next: false
---
# 贡献指南
> 为 go mongox 做出贡献吧！
- 如果有您的加入，`go mongox` 将会变得更加强大！
- 您可以通过以下方式为 `go mongox` 做出贡献：

## 传播 go mongox
- 在您的博客、社交媒体上分享 `go mongox`，让更多的人知道它
- 在 `GitHub` 上给 [go mongox](https://github.com/chenmingyong0423/go-mongox) 来个一键三连（[Star](https://github.com/chenmingyong0423/go-mongox/stargazers)、[Fork](https://github.com/chenmingyong0423/go-mongox/network/members) 和 [Watch](https://github.com/chenmingyong0423/go-mongox/watchers)）
- 编写教程、博客、视频等内容，分享 `go mongox` 的使用经验
- 在 [Stack Overflow](https://stackoverflow.com/questions/tagged/go-mongox) 和 [Github issues](https://github.com/chenmingyong0423/go-mongox/issues) 等地方帮助他人解决问题

## 参与 go mongox 的开发
- 在 [GitHub](https://github.com/chenmingyong0423/go-mongox/pulls) 上提交 `Pull Request`，修复 `bug` 或者增加新的功能
- 为 `go mongox` 编写插件，扩展它的功能

### 准备工作
- **Fork 项目：** 在开始之前，请先 [Fork go mongox](https://github.com/chenmingyong0423/go-mongox/fork) 到您自己的 `GitHub` 仓库中，这样您就可以在自己的仓库中进行修改和提交。
- **设置开发环境：**
    - **安装 Go：** 确保您已经安装了 Go，并且版本高于 `1.18`。
    - **安装 make 工具：** `go mongox` 使用 `make` 来管理项目，请确保您已经安装了 `make` 工具。
    - **安装依赖：** 在项目根目录下执行 `make setup` 命令，该命令将安装所需的依赖项，并配置 `git` 钩子，代码格式化以及代码检查工具。
### 贡献流程

- **选择或创建 Issue（可选）：** 在开始编写代码之前，您可以选择一个已存在的 `Issue` 进行解决，或者创建一个新的 `Issue` 描述您的工作内容和目的。这有助于提前讨论您的贡献和确保它符合项目的需求。如果您选择跳过这一步，您可以直接进行下一步的代码编写。

- **编写代码和测试用例：** 在您的本地仓库中根据项目需求进行代码编写。请遵循项目的代码风格和规范，确保代码的可读性和可维护性。同时，请不要忘记编写相应的测试用例来验证您所实现的功能。测试用例应该覆盖代码的各种情况，包括边界情况和异常情况，以确保代码的稳健性和可靠性。

- **代码检查和格式化：** 在提交代码之前，请确保通过 `make check` 和 `make lint` 命令对代码进行格式化和检查。这将确保您的代码符合项目的代码规范和质量标准。

- **代码测试：** 在提交代码之前，请确保通过项目提供的测试工具进行测试。您可以使用 `make ut` 运行单元测试，以及 `make e2e` 运行集成测试。

- **提交 Pull Request：** 当您完成贡献并通过了本地测试后，请提交一个 `Pull Request` 到本仓库的主分支。请在 `PR` 描述中清晰地说明您的修改内容以及解决的 `Issue`（如果适用）。


## 参与 go mongox 的文档编写
- 在 [GitHub](https://github.com/chenmingyong0423/go-mongox-doc/pulls) 上提交 `Pull Request`，修复文档错误或者增加新的文档
