---
to: "exercises/<%= (`${h.exerciseNumber(name)}`).padStart(2, '0') + '-' + h.exerciseFileBasename(name) + '/' + h.exerciseFileBasename(name) %>.test.js"
---
import component from './<%= h.exerciseFileBasename(name) %>.vue'
import { shallowMount } from '@vue/test-utils'

describe('<%= h.exerciseNumber(name) %>) <%= h.exerciseFileBasename(name) %>', () => {
  it('---', () => {
    const wrapper = shallowMount(component)

    expect(wrapper.html()).toTruthy()
  })
})
