import React from 'react';
import { Table, Navbar, Button, Container, Form } from 'react-bootstrap';
import { useState } from 'react';
import FormGroup from './FormGroup.js';

function EmployeesList() {

  const employees = [
    {
      id: 1,
      name: "David Pirul Alvarez",
      mail: "david@pirul.com"
    },
    {
      id: 2,
      name: "Esteban Campos Campusano",
      mail: "esteban@campos.com"
    }
  ];

  const [tables, setTables] = useState(employees);

  const employeeNew = (table) => {
    setTables([...tables, table])
  }

  const [searchInList, setSearchiInList] = useState('')

  const handleChange = (e) => {
    setSearchiInList(e.target.value);
  };

  const results = !searchInList
    ? tables
    : tables.filter((data) => data.name.toLowerCase().includes(searchInList));


  return (

    <Container>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">LISTA DE COLABORADORES </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              value={searchInList}
              onChange={handleChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <br />

      <FormGroup
        employeeNew={employeeNew}
      />
      <br />
      <hr />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {results.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.mail}</td>
              </tr>
            )
          }
          )}
        </tbody>
      </Table>
    </Container>

  );
}

export default EmployeesList;