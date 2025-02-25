import '@testing-library/jest-dom/vitest'
import { render as rtlRender, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { default as appRoutes } from './src/routes'

export const render = (route, routes) => {
    const router = createMemoryRouter(routes || appRoutes, { initialEntries: [route] })

    return {
        screen,
        ...rtlRender(
            <RouterProvider router={router} />,
        )    
    }
}