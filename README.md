# vue-prevent-wheel-transitions

A vue plugin for preventing the screen transitions fired by wheeling.

## Quick start

##### Installing the module.
```console
$ npm install vue-prevent-wheel-transitions
```
or
```console
$ yarn add vue-prevent-wheel-transitions
```

##### In your main process.
```javascript
import VuePreventWheelTransitions from 'vue-prevent-wheel-transitions'

Vue.use(VuePreventWheelTransitions)
```

##### In your component.
````html
<template>
  <div
    v-prevent-wheel-transitions
    class="the-outer"
  >
    <div class="the-inner" />
  </div>
</template>

<style>
.the-outer {
  width: 100px;
  overflow-x: auto;
}
.the-inner {
  width: 200px;
}
</style>
````

## License

This software is distributed under [MIT license](LICENSE.txt).

## Support

No Vue3 support currently.

<br>

##### Note
This project was created as my personal learning theme for self-study days within my company.
