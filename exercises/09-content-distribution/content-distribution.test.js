import component from './content-distribution.vue'
import { shallowMount } from '@vue/test-utils'

describe('09) content-distribution', () => {
  const id = Math.random()
  it('should render content from parent', () => {
    const wrapper = shallowMount(component, {
      slots: {
        default: `<div data-test="${id}">from parent</div>`,
      },
    })
    const el = wrapper.find(`[data-test="${id}"]`)

    expect(el.exists()).toBe(true)
    expect(el.text()).toBe('from parent')
  })

  it('should render default title content', () => {
    const wrapper = shallowMount(component)

    expect(wrapper.find('[data-test="title"]').text()).toBe('This is title.')
  })

  it('should render title content from parent', () => {
    const wrapper = shallowMount(component, {
      slots: {
        title: `<div data-test="${id}">from parent</div>`,
      },
    })
    const el = wrapper.find('[data-test="title"]').find(`[data-test="${id}"]`)

    expect(el.exists()).toBe(true)
    expect(el.text()).toBe('from parent')
  })
})
