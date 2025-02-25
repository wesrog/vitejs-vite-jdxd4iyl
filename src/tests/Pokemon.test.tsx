import { describe, it, expect } from 'vitest'
import { render } from '../../vitest-setup'
import { pages } from '../mocks/pokemon'
import { Component as PokemonListComponent } from '../PokemonList'

describe('Pokemon tests', () => {
    it('renders', async () => {
        const routes = [
            {
                path: '/',
                element: <PokemonListComponent />,
                loader: () => {
                    return {
                        data: pages[1],
                        page: 1
                    }
                }
            }
        ]
        const { screen } = render('/', routes)
        expect(await screen.findByText(/select a pokemon!/i))
        // screen.debug()
    })
})