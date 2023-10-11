import Home from '@/pages/Home';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

describe('Home', () => {
    it('should contains a label for the ui library', () => {
        render(<Home />);

        const label = screen.getByText('Material UI Documentation');

        expect(label).toBeInTheDocument();
    });
});
