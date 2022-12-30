import { AuthError } from '../components/AuthError'
import {render, screen} from '@testing-library/react'

describe('AuthError testing ', () => {
  test('AuthError should be after incorrect login', () => {
    render(<AuthError />)
    expect(screen.getByTestId('heading')).toBeInTheDocument()
  })
})