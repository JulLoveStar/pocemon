import { AuthNeed } from '../components/AuthNeed'
import {render, screen} from '@testing-library/react'

describe('AuthNeed', () => {
  test('renders a heading', () => {
    render(<AuthNeed />)
    expect(screen.getByRole('heading')).toHaveTextContent('You need to Auth')
  })
  test('render an svg', () => {
    render(<AuthNeed/>)
    const svg = screen.getByTestId('svg')
    expect(svg).toBeInTheDocument()
  })
})