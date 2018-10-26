import DataBinding from './data-binding.vue'
import { shallowMount } from '@vue/test-utils'

describe('2) data binding', () => {
  it('use text interpolation (moustache {{, }}) syntax: render `name` value', () => {
    const wrapper = shallowMount(DataBinding)
    const heading = wrapper.find('h1')

    expect(heading.text()).toEqual(expect.stringContaining('Hello John!'))

    wrapper.setData({ name: 'Jane' })

    expect(heading.text()).not.toEqual(expect.stringContaining('Hello John!'))
    expect(heading.text()).toEqual(expect.stringContaining('Hello Jane!'))
  })

  it('use attribute binding (v-bind syntax): add `classNames` value to `class` attribute on `<div>` tag', () => {
    const wrapper = shallowMount(DataBinding)

    expect(wrapper.classes()).toEqual(['content'])

    const classNames = ['content', 'test']
    wrapper.setData({ classNames })

    expect(wrapper.classes()).toEqual(classNames)
  })

  it('use JS expression in text interpolation: render sum of `a + b`', () => {
    const wrapper = shallowMount(DataBinding)
    const expr = wrapper.find('[data-test="expr"]')

    expect(expr.text()).toBe('a + b = ' + (0.1 + 0.2))
  })
})
