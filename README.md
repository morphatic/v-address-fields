# VAddressFields

[![Build Status](https://travis-ci.org/morphatic/v-address-fields.svg?branch=master)](https://travis-ci.org/morphatic/v-address-fields)
[![Coverage Status](https://coveralls.io/repos/github/morphatic/v-address-fields/badge.svg?branch=master)](https://coveralls.io/github/morphatic/v-address-fields?branch=master)
[![NPM](https://img.shields.io/npm/v/v-address-fields)](https://www.npmjs.com/package/v-address-fields)
[![Downloads at NPM](https://img.shields.io/npm/dw/v-address-fields)](https://www.npmjs.com/package/v-address-fields)
[![GitHub](https://img.shields.io/github/license/morphatic/v-address-fields)](https://github.com/morphatic/v-address-fields/blob/master/LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![We use Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

`VAddressFields` is a [Vue.js](https://vuejs.org) plugin that provides components for collecting postal address information. It extends [the Vuetify UI library](https://vuetifyjs.com) which implements the [Material design standard](https://material.io).

Check out a [working demo on CodePen](https://codepen.io/morphatic/pen/KKPozPP).

> NOTE: This is a **_very_** simple component that was created primarily as part of [a short course on how to build packageable components to extend Vuetify with TypeScript](https://morphatic.com/2019/09/04/building-packageable-components-to-extend-vuetify-with-typescript-part-1/). While it should perform exactly as advertised, many developers may find it is just easier to provide [a list of US states](https://www.npmjs.com/package/usa-states) directly to a [Vuetify `VAutocomplete` component](https://vuetifyjs.com/en/components/autocompletes).

## Installation

From the root of a Vue project already using Vuetify:

```sh
npm i -S v-address-fields
```

Or if using yarn

```sh
yarn add v-address-fields
```

If you want the component to be registered and available globally, from your main Vue configuration file (frequently `src/main.js`), add the following **before** instantiating Vue for the first time:

```js
import Vue from 'vue'
import VAddressFields from 'v-address-fields'

Vue.use(VAddressFields)
```

Or if you just want to use the `v-state-select` component within another component:

```vue
<script>
  import { VStateSelect } from 'v-address-fields'
  export default {
    components: {
      VStateSelect
    },
    /* ... the rest of your code ... */
  }
</script>
```

## Basic Usage

```vue
<template>
  <v-state-select v-model="state"></v-state-select>
</template>

<script>
  // the import statement and components section is unnecessary
  // if the component was registered globally (see above)
  import { VStateSelect } from 'v-address-fields'
  export default {
    components: {
      VStateSelect
    },
    data: () => ({
      state: null
    })
    /* ... the rest of your code ... */
  }
</script>
```

## Description

`VStateSelect` extends [Vuetify's `VAutocomplete` component](https://vuetifyjs.com/en/components/autocompletes). All of the properties available on `VAutocomplete` are also available on `VStateSelect` **_except_** `items`. The `items` property is overridden by the list of US states built into this component. There are five properties unique to `VStateSelect` that allow you to modify the list of states:

|         Name         |    Type    | Default | Required? | Description                                                                                                                                                       |
|:--------------------:|:----------:|:-------:|:---------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   `contiguousOnly`   |  `boolean` | `false` |     no    | Only include the "lower 48" contiguous US States                                                                                                                  |
|       `exclude`      | `string[]` |   `[]`  |     no    | List of states or territories to exclude. Can be an array of state abbreviations, e.g. `['AK', 'HI']`, state names, e.g. `['Alaska', 'Hawaii']`, or a mix of both |
| `includeTerritories` | `boolean`  | `false` |     no    | Include US protectorates and territories, e.g. Puerto Rico, Guam, etc.                                                                                            |
|     `storedValue`    |  `string`  |  `abbr` |     no    | The value to be stored in the output variable for this input. Available options: abbr, name, capital                                                              |
|        `text`        |  `string`  |  `name` |     no    | The text value that will be shown in the dropdown. Available values: abbr, name, capital                                                                          |

## Questions, Comments, Bug Reports, etc.

Comments, questions, pull requests, and bug reports are very welcome. Please [submit an issue via the Issues tab](https://github.com/morphatic/v-address-fields/issues) above.

Have fun!
