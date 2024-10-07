# AI Prompt Factory

## Description
This project is an **AI Prompt Factory** designed to create and manage prompts for artificial intelligence systems. Our collection of carefully crafted markdown files serves as a repository of prompts that can be used to guide AI behavior, responses, and task completion across various domains.

## Table of Contents
- [AI Prompt Factory](#ai-prompt-factory)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Inclusion in your own project](#inclusion-in-your-own-project)
  - [Updating the master repo](#updating-the-master-repo)

## Features
- Collection of markdown-based AI prompts
- Organized structure for easy navigation and management
- Customizable prompts for different AI applications
- Version control through Git for tracking prompt evolution

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/ddttom/prompt-master.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd ai-prompt-factory
   ```

## Usage
1. Browse the `prompts` directory to find relevant AI prompts.
2. Open the desired markdown file to view or edit the prompt.
3. Use the content of these markdown files as input for your AI system.

Example:
```markdown
# AI Assistant Prompt

You are an AI assistant specialized in customer service. Your primary role is to:

1. Greet customers politely
2. Understand their queries or concerns
3. Provide accurate and helpful information
4. Escalate complex issues to human support when necessary

Always maintain a friendly and professional tone in your responses.
```

## Contributing
We welcome contributions to improve existing prompts or add new ones. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-prompt`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new customer service prompt'`)
5. Push to the branch (`git push origin feature/new-prompt`)
6. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


## Inclusion in your own project


then using the shell CD into your project folder and run this;

```sh

git subtree add --squash  --prefix prompts  https://github.com/ddttom/prompt-master main

```

If you later want to update your subtrees, use 

```sh

git subtree pull --squash --prefix prompts  https://github.com/ddttom/prompt-master main


```

## Updating the master repo

If you have commit access to the repo, create a pull request and in your branch

```sh
 git subtree push --prefix prompts https://github.com/ddttom/prompt-master main         

```
