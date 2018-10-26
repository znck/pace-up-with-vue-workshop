import { shallowMount } from '@vue/test-utils'
import component from './todo-list.vue'

describe('10) render-logic-separation', () => {
  const items = [
    { text: 'Data binding', done: true },
    { text: 'Event binding', done: true },
    { text: 'Input component', done: false },
  ]

  it('should provide scoped slots', () => {
    const wrapper = shallowMount(component, {
      propsData: { items },
      scopedSlots: {
        default:
          '<div data-test="todo">[{{ props.done }}] {{ props.text }}</div>',
      },
    })

    const els = wrapper.findAll('[data-test="todo"]')

    expect(els).toHaveLength(3)
    expect(els.at(0).text()).toBe('[true] Data binding')
  })
})
