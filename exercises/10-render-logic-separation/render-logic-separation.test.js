import component from './render-logic-separation.vue'
import { mount } from '@vue/test-utils'

describe('10) render-logic-separation', () => {
  const ToDoList = {
    template: `
      <div class="todos">
        <div class="item" v-for="item in items" data-test="todo">
          <slot v-bind="item" />
        </div>
      </div>
    `,
    props: ['items'],
  }
  const todos = [
    { text: 'Data binding', done: true },
    { text: 'Event binding', done: true },
    { text: 'Input component', done: false },
  ]
  it('should use scoped slots', () => {
    const wrapper = mount(component, {
      data() {
        return {
          todos,
        }
      },
      components: { ToDoList },
    })

    const items = wrapper.findAll('[data-test="todo"]')

    todos.forEach(({ text }, index) => {
      expect(items.at(index).text()).toEqual(expect.stringContaining(text))
    })
  })
})
