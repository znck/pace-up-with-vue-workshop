import component from './two-way-binding.vue'
import { shallowMount } from '@vue/test-utils'

describe('04) two-way-binding', () => {
  it('use two-way binding (v-model)', () => {
    const wrapper = shallowMount(component)
    const target = wrapper.find('[data-test="target"]')

    expect(wrapper.vm.name).toBe('John')
    expect(target.text()).toBe('John')

    wrapper.vm.name = 'Jane'
    expect(wrapper.vm.name).toBe('Jane')
    expect(target.text()).toBe('Jane')

    wrapper.find('input').element.value = 'John'
    wrapper.find('input').trigger('input')
    expect(wrapper.vm.name).toBe('John')
    expect(target.text()).toBe('John')
  })
})
