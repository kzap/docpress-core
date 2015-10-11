const compile = require('../../index')()

describe('index/toc-less:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    this.ms = {
      metadata () {
        return { docs: 'docs' }
      }
    }

    this.files = {
      'README.md': { contents: '# hello\n' }
    }

    compile(this.files, this.ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('works', function () {
    expect(this.files['index.html']).toExist()
  })

  it('renders title', function () {
    expect(this.files['index.html'].title).toEqual('hello')
  })
})
