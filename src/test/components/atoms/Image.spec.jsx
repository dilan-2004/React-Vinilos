import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '../../../components/atoms/image';

describe('Image Component', () => {
    it('renderiza la imagen con los atributos correctos', () => {
        render(<Image src="test.jpg" alt="Test Image" className="test-class" />);
        const img = screen.getByAltText('Test Image');
        expect(img).not.toBeNull(); 
        expect(img.getAttribute('src')).toBe('test.jpg'); 
        expect(img.className).toContain('test-class'); 
    });
});