---
layout: home

hero:
  name: "go-mongox 文档"
  text: "丝滑操作、链式调用、高效构建 bson"
  tagline: "go-mongox：一个基于 MongoDB 官网库进行二次封装的 Go 语言泛型操作库"
  image:
    src: /go-mongox-logo.png
    alt: go-mongox
  actions:
    - theme: brand
      text: 快速开始
      link: /introduction/getting-started
    - theme: alt
      text: Github
      link: https://github.com/chenmingyong0423/go-mongox

features:
  - title: 泛型集合（Collection）
    details: 通过泛型将结构体与 MongoDB 集合绑定，实现类型安全和简化数据操作。
  - title: 链式调用
    details: 通过链式调用来操作 MongoDB 的集合，更加方便的进行数据操作
  - title: 高效构建 bson
    details: 通过 go-mongox 提供的 bson 构建器和内置构建函数，可以更加方便的构建 bson
  - title: 插件化编程
    details: go-mongox 提供了插件化编程的方式，可以更加方便的扩展 go-mongox 的功能
  - title: Hooks 钩子
    details: go-mongox 提供了钩子函数的方式，可以更加方便的进行数据操作前后的处理
  - title: 自动化地更新默认的 fields
    details: go-mongox 内置一个通用 Model 结构体。它的字段在新建或修改文档时自动更新。
  - title: 支持结构体 tag 校验
    details: go-mongox 提供了自动标签验证功能，通过内置的校验 hook 识别和验证结构体标签。它利用 go-playground/validator 库，自动确保字段值符合预定义的校验规则。
---

