import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyTestableComponent from './MyTestableComponent'

test('should allow sign-up', async () => {
    // Given
    render(<MyTestableComponent/>)
    expect(await screen.findByText('before')).toBeInTheDocument()

    // When
    userEvent.click(await screen.findByRole('button', { name: /click me/i }))

    // Then
    expect(await screen.findByText('after')).toBeInTheDocument()
})
