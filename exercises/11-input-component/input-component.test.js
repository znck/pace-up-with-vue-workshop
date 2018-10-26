import component from './input-component.vue'
import { mount } from '@vue/test-utils'

describe('11) input-component', () => {
  const TestTarget = {
    template: `<MyInput v-model="value" />`,
    data: () => ({ value: 'foo' }),
    components: {
      MyInput: component,
    },
  }

  it('should work with v-model', () => {
    const wrapper = mount(TestTarget)

    const input = wrapper.find('[data-test="input"]')

    expect(input.element.value).toBe('foo')

    input.element.value = 'bar'
    input.trigger('input')

    expect(wrapper.vm.value).toBe('bar')
  })
})
