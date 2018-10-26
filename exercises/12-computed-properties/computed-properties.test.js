import component from './computed-properties.vue'
import { shallowMount } from '@vue/test-utils'

describe('12) computed-properties', () => {
  it('should compute `name` from `firstName` and `lastName`', () => {
    const wrapper = shallowMount(component, {
      propsData: {
        firstName: 'John',
        lastName: 'Doe',
      },
    })

    expect(wrapper.vm.name).toBe('John Doe')

    wrapper.setProps({ firstName: 'Jane' })

    expect(wrapper.vm.name).toBe('Jane Doe')
  })

  it('should emit `update:firstName` and `update:lastName` when name changes', () => {
    const wrapper = shallowMount(component, {
      propsData: {
        firstName: 'John',
        lastName: 'Doe',
      },
    })

    expect(wrapper.vm.name).toBe('John Doe')

    wrapper.vm.name = 'Jane Doe'

    expect(wrapper.emitted('update:firstName')).toHaveLength(1)
    expect(wrapper.emitted('update:firstName')).toEqual([['Jane']])
    expect(wrapper.emitted('update:lastName')).toBe(undefined)
  })
})
