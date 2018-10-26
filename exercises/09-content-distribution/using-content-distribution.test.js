import component from './using-content-distribution.vue'
import { mount } from '@vue/test-utils'

describe('09) content-distribution', () => {
  const id = Math.random()
  const MyComponent = {
    template: `
  <div class="content-distribution" data-test="${id}">
    <div data-test="title-${id}">
      <slot name="title" />
    </div>

    <slot />
  </div>`,
  }

  it('should provide contents to MyComponent', () => {
    const wrapper = mount(component, {
      components: { MyComponent },
    })

    expect(wrapper.find(`[data-test="${id}"]`).text()).toEqual(
      expect.stringContaining('from parent')
    )
  })

  it('should provide title content to MyComponent', () => {
    const wrapper = mount(component, {
      components: { MyComponent },
    })

    expect(wrapper.find(`[data-test="title-${id}"]`).text()).toEqual(
      expect.stringContaining('title from parent')
    )
  })
})
