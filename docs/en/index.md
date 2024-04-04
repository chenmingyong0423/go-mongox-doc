---
layout: home

hero:
  name: "go-mongox documentation"
  text: "Generic Collection, chain call, efficient build bson, Plugin programming" 
  tagline: "A generic operation library for Go language, which is a secondary encapsulation based on the official MongoDB library"
  image:
    src: /go-mongox-logo.png
    alt: go-mongox
  actions:
    - theme: brand
      text: Getting Started
      link: /en/introduction/getting-started
    - theme: alt
      text: Github
      link: https://github.com/chenmingyong0423/go-mongox

features:
  - title: Generic Collection
    details: By leveraging generics to bind structs with MongoDB collections, it ensures type safety and simplifies data operations.
  - title: Chain call
    details: Use chain calls to operate MongoDB collections, making data operations more convenient
  - title: Efficient build bson
    details: Through the bson builder and built-in build functions provided by go-mongox, bson can be more conveniently buildeded
  - title: Plugin programming
    details: go-mongox provides a way of plug-in programming, which can more conveniently extend the function of go-mongox
  - title: Hooks
    details: go-mongox provides a way of hook function, which can more conveniently handle the data operation before and after
  - title: Built-in model, automate updates to the default field fields
    details: go-mongox comes with a built-in generic Model struct. Its fields are automatically updated when creating or modifying documents.
  - title: Support for Struct Tag Validation
    details: go-mongox uses the go-playground/validator library to ensure that the values of struct fields comply with predefined validation rules.
---

