import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '../../../components/atoms/Text';

describe('Text Component', () => {
    it('renderiza el texto con el contenido correcto', () => {
        render(<Text>Hola Mundo</Text>);
        const text = screen.getByText('Hola Mundo');
        expect(text).not.toBeNull();
    });

    it('renderiza el texto con el elemento HTML correcto', () => {
        render(<Text variant="h1">Título</Text>);
        const text = screen.getByText('Título');
        expect(text.tagName).toBe('H1');
    });

    it('aplica las clases correctamente', () => {
        render(<Text className="test-class">Texto con clase</Text>);
        const text = screen.getByText('Texto con clase');
        expect(text.className).toContain('test-class');
    });
});