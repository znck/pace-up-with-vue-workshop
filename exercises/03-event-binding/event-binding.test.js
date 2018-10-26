import component from './event-binding.vue'
import { shallowMount } from '@vue/test-utils'

describe('3) event-binding', () => {
  it('use event binding (v-on directive) to attach a method to click event', () => {
    const handleClick = jest.fn()
    const wrapper = shallowMount(component, {
      methods: {
        handleClick,
      },
    })

    wrapper.find('[data-test="input"]').trigger('click')
    expect(handleClick).toHaveBeenCalled()
  })
  it('use event binding (v-on directive) to attach an expression to mousedown event', () => {
    const handleMouseDown = jest.fn()
    const wrapper = shallowMount(component, {
      methods: {
        handleMouseDown,
      },
    })

    wrapper.find('[data-test="input"]').trigger('mousedown')
    expect(handleMouseDown).toHaveBeenCalledWith()
  })
})
