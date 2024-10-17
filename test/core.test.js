import { describe, test, expect } from 'real-test-js'
import { getValue } from '../src/index.mjs'

const data = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
}

describe('Unit test for core functions', () => {
  describe('Unit test for getValue() functions', () => {
    test('Check function returns correct value', () => {
      expect(getValue(data, 'id')).toBeEqual(28802695164)
    })

    test('Check function returns correct value with `.` notation', () => {
      expect(getValue(data, 'data.onlineStatus.active')).toBeEqual(67)
    })

    test('Check function returns undefined for property does not exist', () => {
      expect(getValue(data, 'name')).toBeUndefined()
    })
  })
})
