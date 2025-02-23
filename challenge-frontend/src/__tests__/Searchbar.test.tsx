import { describe, expect, it, vi, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Searchbar from '../components/ui/Searchbar'

afterEach(() => {
  cleanup();
})

describe('Searchbar component', () => {
  it('renders correctly with initial query', () => {
    const handleInputChange = vi.fn()
    render(<Searchbar query="test" handleInputChange={handleInputChange} />)

    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('test')
  })

  it('updates displayed value when query prop changes', () => {
    const handleInputChange = vi.fn()
    const { rerender } = render(
      <Searchbar query="initial" handleInputChange={handleInputChange} />
    )

    const input = screen.getByRole('textbox', { name: /search/i })
    expect(input).toHaveValue('initial')

    rerender(<Searchbar query="updated" handleInputChange={handleInputChange} />)
    expect(input).toHaveValue('updated')
  })

  it('calls handleInputChange when user types', async () => {
    const user = userEvent.setup()
    const handleInputChange = vi.fn()
    render(<Searchbar query="" handleInputChange={handleInputChange} />)

    const input = screen.getByRole('textbox', { name: /search/i })
    await user.type(input, 'react')

    expect(handleInputChange).toHaveBeenCalledTimes(5)
  })
})