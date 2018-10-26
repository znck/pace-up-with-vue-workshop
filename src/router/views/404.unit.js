import NotFound from './404'

describe('@views/404', () => {
  it('is a valid view', () => {
    expect(NotFound).toBeAViewComponent()
  })
})
