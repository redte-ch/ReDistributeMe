# Introduction

### Welcome to the OpenFisca API Workshop!

Presentation of facilitators.

### Workshop objectives

In this workshop, we will build together a webapp with the OpenFisca API.

We will show through examples the fundamental concepts of OpenFisca.

### Workshop format

- We will use:
  - Node for the first part
  - Node/Python for the second part
- You can participate:
  - Developing the webapp in your workstation
  - Participating in the mob programming
  - As an observer
- If you'll be developing in your environment, have it ready:
    - For the first part, you can either:
      - Start from scratch with us using Node
      - Or with anything to build a front and to do POST requests
    - For the second, you'll also need Python to run OpenFisca locally
- In case you can't stay for the whole workshop, or if you prefer to participate
  as an observer, we've prepared a companion webapp that you can download:
  https://github.com/redte-ch/ReDistributeMe

### Tour de table of participants

Please introduce yourself:

- Name
- Organisation
- What do you expect from the session

### Quick introduction to OpenFisca

- What it is: https://openfisca.org/en/
- Who uses it: https://openfisca.org/en/showcase/
- What it is used for:
  - Eligibility: https://mes-aides.1jeune1solution.beta.gouv.fr/
  - Rule-making: https://socio-fiscal.leximpact.an.fr/
  - Policy evaluation: https://www.ipp.eu/projet/conference-budgetaire-2022-quels-enjeux-budgetaires-face-au-choc-energetique/
- How it works:
  - For populations, Python API: https://openfisca.org/doc/openfisca-python-api/index.html
  - For situations, Web API: https://openfisca.org/doc/openfisca-web-api/index.html
  - We will use the Web API

### What will we do exactly

- We will do calculate some taxes and benefits based an imaginary jurisdiction
  called country template, that is a base to build new OpenFisca packages:
  https://github.com/openfisca/country-template
- The legislation of the country template is available online, and we will use
  it to show how the things we'll calculate are defined:
  https://legislation.demo.openfisca.org/
- We will also use a playground called Swagger, that is a tool to interact with
  the API and to run some calculations before we start coding them:
  https://legislation.demo.openfisca.org/swagger

### Core concepts to keep in mind

The workshop revolves around the ideas of a `situation` and `calculation`.

A `situation` is composed of:
  - Something we want to calculate, called a `Variable`
  - Someone for whom we want to calculate it, called an `Entity`
  - A moment in time for the calculation, called a `Period`

### Swagger example

We can see these concepts within the Swagger situation in `/calculate`:

```json
{
  "households": {
    "_": {
      "adults": [
        "Alicia",
        "Javier"
      ],
      "disposable_income": {
        "2017-01": null
      },
      "total_benefits": {
        "2017-01": null
      },
      "total_taxes": {
        "2017-01": null
      }
    }
  },
  "persons": {
    "Alicia": {
      "birth": {
        "ETERNITY": "1980-01-01"
      },
      "salary": {
        "2017-01": 4000
      }
    },
    "Javier": {
      "birth": {
        "ETERNITY": "1984-01-01"
      },
      "salary": {
        "2017-01": 2500
      }
    }
  }
}
```

We can try this out and get our `calculation` back:

```json
{
  "households": {
    "_": {
      "adults": [
        "Alicia",
        "Javier"
      ],
      "disposable_income": {
        "2017-01": 6578.3335
      },
      "total_benefits": {
        "2017-01": 1200
      },
      "total_taxes": {
        "2017-01": 1121.6666
      }
    }
  },
  "persons": {
    "Alicia": {
      "birth": {
        "ETERNITY": "1980-01-01"
      },
      "salary": {
        "2017-01": 4000
      }
    },
    "Javier": {
      "birth": {
        "ETERNITY": "1984-01-01"
      },
      "salary": {
        "2017-01": 2500
      }
    }
  }
}
```

### Workshop structure

The workshop is divided into six parts:

1. This one, the introduction
2. The application boostrap
3. Doing a calculation for an individual
4. Doing a calculation for a group of individuals
5. Calculating how the variation of one variable affects another
6. Plotting the results to get a visual cue of the previous calculation

We will adapt the pace of the presentation to the groups' dynamic.

### Questions

Any questions so far?
