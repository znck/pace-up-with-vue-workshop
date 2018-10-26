import component from './watchers.vue'
import { shallowMount } from '@vue/test-utils'

describe('13) watchers', () => {
  it('should log `value changed from <value> to <value>`', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {})
    const wrapper = shallowMount(component, {
      propsData: { value: 'foo' },
    })

    const value = '' + Math.random()
    wrapper.setProps({ value })

    expect(spy).toHaveBeenCalledWith('value changed from foo to ' + value)
    expect(spy).toHaveBeenCalledWith('value changed from undefined to foo')

    spy.mockClear()
  })
})
