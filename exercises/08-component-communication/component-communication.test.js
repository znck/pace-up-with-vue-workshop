import component from './component-communication.vue'
import { shallowMount } from '@vue/test-utils'

describe('08) component-communication', () => {
  const title = `Today is ${new Date().toLocaleTimeString()}.`

  it('should accept title prop', () => {
    const wrapper = shallowMount(component, {
      propsData: { title },
    })

    expect(wrapper.attributes('title')).toBe(undefined)
    expect(wrapper.text()).toEqual(expect.stringContaining(title))
  })

  it('should emit done event', () => {
    const wrapper = shallowMount(component, {
      propsData: { title },
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted().done).toHaveLength(1)
  })
})
