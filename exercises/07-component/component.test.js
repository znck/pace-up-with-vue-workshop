import component from './component.vue'
import { mount } from '@vue/test-utils'

describe('07) component', () => {
  const id = Math.random()
  const MyComponent = {
    template: `<div v-bind="$props" data-test="${id}"></div>`,
    props: ['name'],
  }
  it('should render MyComponent component', () => {
    const wrapper = mount(component, {
      stubs: { MyComponent },
    })

    expect(wrapper.find(`[data-test="${id}"]`).exists()).toBe(true)
  })

  it('should render with name prop', () => {
    const wrapper = mount(component, {
      stubs: { MyComponent },
    })

    const myComponent = wrapper.find(`[data-test="${id}"]`)

    expect(myComponent.props('name')).toBeTruthy()
  })
})
