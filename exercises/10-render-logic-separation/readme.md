# Scoped Slots

Scoped slots allows parent component render content in child while using data from child component. [https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots](docs)

## Intent

- Render TODO list with alternate

## Instructions

- Wrap the todo item content in a `<slot>` element and pass data to be used in parent compoent using `v-bind`.
- Define an alternative <template> in the parent component and access data from the child via the `slot-scope` attribute.
