import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../../components/atoms/button';

describe('Button Component', () => {
    it('renderiza el botón correctamente', () => {
        render(<Button>Haz click</Button>);
        const button = screen.getByText('Haz click');
        expect(button).not.toBeNull();
    });

    it('aplica los props correctamente', () => {
        render(<Button variant="primary">Haz click</Button>);
        const button = screen.getByText('Haz click');
        expect(button.className).toContain('btn-primary');
    });

    it('aplica estilos personalizados correctamente', () => {
        render(<Button style={{ backgroundColor: 'blue' }}>Personalizado</Button>);
        const button = screen.getByText('Personalizado');
        expect(button.style.backgroundColor).toBe('blue');
    });
});