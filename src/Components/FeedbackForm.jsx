import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling


const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
    
const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};
      

const handleSubmit = (event) => {
    event.preventDefault(); //Con esto previene que recarga la pagina al apretar el boton submit
    const confirmationMessage = `
        Nombre: ${formData.name}
        Correo electrónico: ${formData.email}
        Comentarios: ${formData.feedback}
        Calificación: ${formData.rating}
    `;
    const isConfirmed = window.confirm(`Por favor confirma tus detalles:\n\n${confirmationMessage}`);
    if (isConfirmed) {
      console.log('Enviando comentarios:', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('¡Gracias por tus valiosos comentarios!');
    }
  };


  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
    <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        {/* Campo para el nombre */}
        <input
            type="text"          // acepta texto normal
            name="name"          // nombre del campo
            placeholder="Tu Nombre" // texto de ayuda
            value={formData.name}
            onChange={handleChange}
        />

        {/* Campo para email */}
        <input
            type="email"         // valida formato email
            name="email"
            placeholder="Tu Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
        />

        {/* Campo de texto multilínea */}
        <textarea
            name="feedback"
            placeholder="Tu Retroalimentación"
            value={formData.feedback}
            onChange={handleChange}
        ></textarea>
        <div
            style={{
                display: 'flex',
                gap: '10px',
                flexDirection: 'column'
            }}
        >
            <label>Califícanos:</label>

            <label>
                <input
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                />
                1
            </label>

            <label>
                <input
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={handleChange}
                />
                2
            </label>

            <label>
                <input
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={handleChange}
                />
                3
            </label>

            <label>
                <input
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={handleChange}
                />
                4
            </label>

            <label>
                <input
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={handleChange}
                />
                5
            </label>
        </div>

        {/* Botón de envío */}
        <button type="submit">
            Enviar Retroalimentación
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
