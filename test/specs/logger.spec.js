const path = require('path')
const sinon = require('sinon')

const Logger = require(path.join(__dirname, '../..', 'src', 'logger'))
const TestString = '    ✓'

describe('Logger', () => {
  it('should log a message to the console', () => {
    const sut = new Logger()
    const spy = sinon.spy(console, 'log')

    sut.log(TestString)

    expect(spy.calledOnce)
    expect(spy.calledWithMatch(TestString))

    spy.restore()
  })
})
