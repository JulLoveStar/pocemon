import { render, fireEvent } from '@testing-library/react'
import { AuthForm } from '../components/AuthForm'

test('render form properly', () => {
    const { getByTestId, getByLabelText } = render(<AuthForm/>)

    const emailLabel = getByTestId('emailLabel')
    const passwordLabel = getByTestId('passwordLabel')
    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()

    const emailInput = getByTestId('emailInput')
    const passwordInput = getByTestId('passwordInput')
    expect(emailInput).toHaveAttribute('type','email')
    expect(passwordInput).toHaveAttribute('type', 'password')
})