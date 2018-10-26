import component from './iterative-rendering.vue'
import { shallowMount } from '@vue/test-utils'

describe('06) iterative-rendering', () => {
  it('Use v-for directive to render array', () => {
    const wrapper = shallowMount(component)
    const fruits = ['Apple', 'Banana', 'Mango', 'Peach']

    fruits.sort(() => 0.5 - Math.random())
    wrapper.setData({ fruits })

    const list = wrapper.find('[data-test="fruits"]')
    const items = list.findAll('[data-test="item"]')

    expect(items).toHaveLength(fruits.length)
    fruits.forEach((fruit, index) => {
      expect(items.at(index).text()).toBe(fruit)
    })
  })

  it('Use v-for directive to render object', () => {
    const wrapper = shallowMount(component)
    const person = {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 1 + Math.floor(Math.random() * 80),
    }

    wrapper.setData({ person })

    const list = wrapper.find('[data-test="person"]')
    const items = list.findAll('[data-test="property"]')

    expect(items).toHaveLength(3)
    expect(items.at(0).text()).toBe('firstName: Jane')
    expect(items.at(1).text()).toBe('lastName: Doe')
    expect(items.at(2).text()).toBe('age: ' + person.age)
  })

  it('Use v-for directive to render range', () => {
    const wrapper = shallowMount(component)
    const range = 1 + Math.floor(Math.random() * 5)

    wrapper.setData({ range })

    const list = wrapper.find('[data-test="range"]')
    const items = list.findAll('[data-test="item"]')

    expect(items).toHaveLength(range)
  })

  it('should use key attribute', () => {
    const wrapper = shallowMount(component)
    const fruits = ['Apple', 'Banana', 'Mango', 'Peach']
    const attr = `data-${Math.random()}`

    wrapper.setData({ fruits })

    wrapper
      .find('[data-test="fruits"]')
      .findAll('[data-test="item"]')
      .wrappers.forEach((item, index) => {
        item.element.setAttribute(attr, fruits[index])
      })

    fruits.push(fruits.shift())

    const list = wrapper.find('[data-test="fruits"]')
    const items = list.findAll('[data-test="item"]')

    expect(items).toHaveLength(fruits.length)
    fruits.forEach((fruit, index) => {
      if (items.at(index).attributes(attr)) {
        expect(items.at(index).attributes(attr)).toBe(fruit)
      }
    })
  })
})
