---
layout: home

hero:
    name: "mongox Documentation"
    text: "Generic Collections, Method Chaining, Efficient BSON Construction, Plugin-based Programming"
    tagline: "A Go language library that extends the official MongoDB library with generics"
    image:
    src: /go-mongox-logo.png
    alt: mongox
    actions:
        - theme: brand
          text: Get Started
          link: /en/getting-started/generic-collection
        - theme: alt
          text: Github
          link: https://github.com/chenmingyong0423/go-mongox

features:
  - title: Generic Collections (Collection)
    details: Bind structs to MongoDB collections using generics, achieving type safety and simplifying data operations.
  - title: Method Chaining
    details: Operate on MongoDB collections using method chaining, making data manipulation more convenient.
  - title: Efficient BSON Construction
    details: Use the BSON builders and built-in functions provided by mongox to easily construct BSON data.
  - title: Plugin-based Programming
    details: mongox supports plugin-based programming, making it easier to extend the functionality of mongox.
  - title: Hooks
    details: mongox provides hook functions for handling logic before and after data operations.
  - title: Built-in Model with Automatic Field Updates
    details: mongox includes a generic Model struct that automatically updates its field values when creating or modifying documents.
  - title: Struct Tagging
    details: mongox supports tagging structs (the generic parameter of Collection) to automatically populate field values when inserting or updating documents. This reduces redundant code and improves development efficiency.

---
