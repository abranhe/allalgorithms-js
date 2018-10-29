## Contributing

> Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

##  See

- [General Rules](#general-rules)
- [All ▲lgorithms Structure](#all-lgorithms-python-library-structure)
- [Adding new algorithms](#adding-new-algorithms)
- [Style](#style)
- [Adding Documentation](#adding-documentation)

### General Rules

- As much as possible, try to follow the existing format of markdown and code.

### All ▲lgorithms Javascript Library Structure

- Directories and files are all in lower case letter.
- Directories in documentation and libraries  are separated by a minus or hyphen (`-`) following `kebeab-case` style.

> We follow this structure

```
allalgorithms
 ├── docs
 │   │── sorting
 |   |    │── bubble-sort.md
 |   |    └── merge-sort.md
 │   └── searches
 |        └── binary-search.md
 ├── src
 │   │── sorting
 |   |    │── bubble-sort.js
 |   |    └── merge-sort.js
 |   |
 │   │─── searches
 |   |    │── binary-search.js
 |   |    └── linear-search.js
 |   |
 │   │─── sorting.js
 |   |
 │   │─── searches.js
 |   |
 |   └─── test
 |	      │── sorting.test.js
 |	      └── searches.test.js
 |
 └── package.json

```

### Adding new algorithms

- Make your pull requests to be **specific** and **focused**. Instead of contributing "several algorithms" all at once contribute them all one by one separately (i.e. one pull request for "Binary Search", another one
for "Bubble Sort" and so on).
- Describe what you do in code using **comments**.

### Style [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

We are proudly using [XO](https://github.com/xojs/xo), so make sure you follow that style.


### Adding Documentation

Please make sure if you add an algorithm, you also add the required
documentation for it the `/docs` directory.

Follow some of the examples already added.

If you are modifying an algorithm make sure you add a benchmark using [Repl.it](https://repl.it/) for the maintainers to have it easy to review it.


#### Lastly and not less important:

Make sure you start ⭐️ the project and follow [@abranhe](https://git.io/abranhe)
