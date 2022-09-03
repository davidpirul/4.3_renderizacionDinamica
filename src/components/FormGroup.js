import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, } from 'react-bootstrap'

function FormGroup(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const sendNombre = (e) => {
    setName(e.target.value)
  }
  const sendEmail = (e) => {
    setEmail(e.target.value)
  }

  const sendForm = (e) => {
    e.preventDefault();

    const newEmployee = {
      name: name,
      mail: email,
    }

    console.log(newEmployee)
    props.employeeNew(newEmployee);

  }

  return (
    <div>
      <Container>
        <Form
          onSubmit={sendForm}
        >
          <Form.Group
            className="mb-3"
          >
            <Form.Label>Nombre del colaborador</Form.Label>
            <Form.Control
              value={name}
              onChange={sendNombre}
              type="text"
              placeholder="Ingrese nombre del colaborador"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
          >
            <Form.Label>Correo del colaborador</Form.Label>
            <Form.Control
              value={email}
              onChange={sendEmail}
              type="email"
              placeholder="Ingrese el e-mail del colaborador"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
          >
            Agregar colaborador
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormGroup;