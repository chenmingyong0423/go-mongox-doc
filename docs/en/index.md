---
layout: home

hero:
  name: "go-mongox documentation"
  text: "Silky operation, chain call, efficient construction bson" 
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
  - title: Efficient construction bson
    details: Through the bson builder and built-in construction functions provided by go-mongox, bson can be more conveniently constructed
  - title: Plugin programming
    details: go-mongox provides a way of plug-in programming, which can more conveniently extend the function of go-mongox
  - title: Hooks
    details: go-mongox provides a way of hook function, which can more conveniently handle the data operation before and after
  - title: Automatic Default Fields Update
    details: go-mongox comes with a built-in generic Model struct. Its fields are automatically updated when creating or modifying documents.
  - title: Struct Tag Validation Support
    details: go-mongox offers an automatic tag validation feature that uses an integrated validation hook to recognize and validate struct tags. It employs the go-playground/validator library to automatically ensure that field values meet predefined validation criteria.
---

