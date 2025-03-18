# ReDistributeMe

ReDistributeMe is a RaC-powered webapp built with TypeScript and the OpenFisca
API to show how taxes and social benefits have an impact on households'
disposable income (or their net income including benefits).

Disposable income is a crucial tool for rule-makers to assess fairness and equity.
Its distribution among households varies based on their composition and income
levels. Yet, the complexity of tax and benefit systems makes it challenging to
quickly evaluate constituents’ disposable income. ReDistributeMe aims to help you
to have a preliminary illustration of disposable income variance, to show how,
based on different household compositions and income levels, it has a
redistributive impact influenced by both taxes and social benefits.

## Built With

- [Astro](https://astro.build/)
- [Cypress](https://www.cypress.io/)
- [OpenFisca](https://openfisca.org/)
- [React](https://reactjs.org/)
- [Svelte](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)

### Installation

To get a local copy of this project, run in a console:

```sh
git clone git@github.com:redte-ch/ReDistributeMe.git
cd ReDistributeMe
```

Then install the dependencies:

```sh
npm install
```

## Usage

Run:

```sh
npm run dev
```

Then open [localhost:4321](http://localhost:4321/) in your browser.

## Testing

Run:

```sh
npm run test
```

## Roadmap

- [x] Fix `disposable_income` formula in `openfisca-country-template`
- [x] Adapt core to changes in `openfisca-country-template`
- [x] Bootstrap this repository with a vanilla Astro app
- [x] Add licence
- [x] Add contributing guidelines
- [x] Implement the calculation of income tax
- [x] Implement the calculation of disposable income
- [ ] Calculate disposable income based on different levels of salary
- [ ] Plot the calculation of disposable income for different levels of salary

## Licence

Distributed under the EUPL-1.2 licence. See [LICENSE](LICENSE) for more information.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

### Top contributors

<a href="https://github.com/redte-ch/ReDistributeMe/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=redte-ch/ReDistributeMe" alt="contrib.rocks image" />
</a>

## Contact

- [Mauko Quiroga-Alvarado](https://www.linkedin.com/in/maukoquiroga/)
- [Thomas Guillet](https://www.linkedin.com/in/thomasguillet1234/)

## Acknowledgments

- [DINUM](https://www.numerique.gouv.fr/)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
