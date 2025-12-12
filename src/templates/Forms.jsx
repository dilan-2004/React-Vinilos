import React from 'react';
import { Link } from 'react-router-dom';

const Forms = ({ content, form, onChange, onSubmit, loading = false }) => {
  return (
    <form onSubmit={onSubmit} className="w-full">
      {content.map((item, index) => {
        if (item.type === 'text') {
          return (
            <div key={index} className={item.className}>
              {item.text.map((textItem, idx) => {
                const Tag = textItem.variant || 'div';
                return (
                  <Tag key={idx} className={textItem.className}>
                    {textItem.content}
                  </Tag>
                );
              })}
            </div>
          );
        }

        if (item.type === 'inputs') {
          return (
            <div key={index} className={item.className}>
              {item.inputs.map((input, idx) => (
                <input
                  key={idx}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  value={form[input.name] || ''} 
                  required={input.required}
                  autoComplete={input.autoComplete}
                  className={input.className}
                  onChange={onChange}
                />
              ))}
            </div>
          );
        }

        if (item.type === 'button') {
          return (
            <button
              key={index}
              type="submit"
              className={item.className}
              disabled={loading}
            >
              {loading ? 'Cargando...' : item.text}
            </button>
          );
        }

        if (item.type === 'link') {
          return (
            <div key={index} className="text-center mt-4">
              <span className="text-white mr-2">{item.text}</span>
              <Link to={item.link} className={item.className}>
                Iniciar Sesión
              </Link>
            </div>
          );
        }

        return null;
      })}
    </form>
  );
};

export default Forms;