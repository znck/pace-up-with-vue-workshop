import component from './conditional-rendering.vue'
import { shallowMount } from '@vue/test-utils'

describe('05) conditional-rendering', () => {
  it('use v-if to render first branch', () => {
    const wrapper = shallowMount(component)

    wrapper.setData({ timeOfDay: 8 })

    expect(wrapper.text()).toBe('Good Morning')
  })

  it('use v-else-if to render second branch', () => {
    const wrapper = shallowMount(component)

    wrapper.setData({ timeOfDay: 13 })

    expect(wrapper.text()).toBe('Good Afternoon')
  })

  it('use v-else to render third branch', () => {
    const wrapper = shallowMount(component)

    wrapper.setData({ timeOfDay: 20 })

    expect(wrapper.text()).toBe('Good Evening')
  })
})
