---
layout: home

hero:
  name: "go mongox 文档"
  text: "泛型集合、链式调用、高效构建 bson、插件化编程"
  tagline: "一个基于 MongoDB 官网库进行二次封装的 Go 语言泛型操作库"
  image:
    src: /go-mongox-logo.png
    alt: go mongox
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
    details: 通过 go mongox 提供的 bson 构建器和内置构建函数，可以更加方便的构建 bson
  - title: 插件化编程
    details: go mongox 提供了插件化编程的方式，可以更加方便的扩展 go mongox 的功能
  - title: Hooks 钩子
    details: go mongox 提供了钩子函数的方式，可以更加方便的进行数据操作前后的处理
  - title: 内置 Model，自动化更新默认的 field 字段
    details: go mongox 内置一个通用 Model 结构体。它的字段值在新建或修改文档时自动更新。
  - title: 支持结构体 tag 校验
    details: go mongox 使用 go-playground/validator 库确保结构体的字段值符合预定义的校验规则。
---

