---
layout: doc
sidebar: false
prev: false
next: false
---
# Contribution
> Contribute to go mongox!
- With your participation, `go mongox` will become even more powerful!
- You can contribute to `go mongox` in the following ways:

## Spread the Word About go mongox
- Share `go mongox` on your blog, social media, and let more people know about it.
- On `GitHub`, give [go mongox](https://github.com/chenmingyong0423/go-mongox) a triple hit ([Star](https://github.com/chenmingyong0423/go-mongox/stargazers), [Fork](https://github.com/chenmingyong0423/go-mongox/network/members) and [Watch](https://github.com/chenmingyong0423/go-mongox/watchers)).
- Write tutorials, blogs, videos, etc., to share your experience using `go mongox`.
- Help others solve problems on [Stack Overflow](https://stackoverflow.com/questions/tagged/go-mongox) and [Github issues](https://github.com/chenmingyong0423/go-mongox/issues).

## Participate in the Development of go mongox
- Submit `Pull Requests` on [GitHub](https://github.com/chenmingyong0423/go-mongox/pulls) to fix bugs or add new features.
- Write plugins for `go mongox` to extend its functionality.

### Preparation
- **Fork the Project:** Before you begin, please [Fork go mongox](https://github.com/chenmingyong0423/go-mongox/fork) into your own `GitHub` repository so that you can make modifications and submit them from your own repository.
- **Set Up Development Environment:**
    - **Install Go:** Ensure that you have installed Go, with a version higher than `1.18`.
    - **Install make Tool:** `go mongox` utilizes `make` to manage the project. Make sure you have installed the `make` tool.
    - **Install Dependencies:** Execute the `make setup` command in the project's root directory. This command will install the necessary dependencies and configure `git` hooks, code formatting, and code checking tools.

### Contribution Process

- **Choose or Create an Issue (Optional):** Before starting to write code, you can select an existing `Issue` to address or create a new `Issue` to describe your work and purpose. This helps in discussing your contribution in advance and ensuring it meets the project's requirements. If you choose to skip this step, you can proceed directly to the next step of writing code.

- **Write Code and Test Cases:** Write code in your local repository based on project requirements. Follow the project's code style and standards to ensure code readability and maintainability. Additionally, remember to write corresponding test cases to validate the functionality you've implemented. Test cases should cover various scenarios, including edge and exceptional cases, to ensure code robustness and reliability.

- **Code Check and Formatting:** Before submitting code, ensure it passes formatting and checks by running `make check` and `make lint` commands. This ensures your code complies with the project's code standards and quality criteria.

- **Code Testing:** Before submitting code, ensure it passes through the provided testing tools. You can use `make ut` to run unit tests and `make e2e` to run integration tests.

- **Submit Pull Request:** After completing your contribution and passing local tests, submit a `Pull Request` to the main branch of this repository. Clearly describe your modifications and reference any associated `Issue` in the `PR` description if applicable.

## Participate in Writing Documentation for go mongox
- Submit `Pull Requests` on [GitHub](https://github.com/chenmingyong0423/go-mongox-doc/pulls) to fix documentation errors or add new documentation.
