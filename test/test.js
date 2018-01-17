import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Enzyme, { mount } from 'enzyme'
import React16Adapter from 'enzyme-adapter-react-16'
import { QuickAccess } from '../src'

chai.use(chaiEnzyme()) // Note the invocation at the end
Enzyme.configure({ adapter: new React16Adapter() })

test('just a placeholder', () => {
  expect(true).to.equal(true)
})
