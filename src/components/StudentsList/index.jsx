import React from 'react';

const StudentsList = props => {
    const { 
        students = [], 
        onStudentRemove = () => {},
        onStudentEdit = () => {},
    } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Carrera</th>
                    <th>Matriculado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => {
                        return (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.age}</td>
                                <td>{student.carreer}</td>
                                <td>{student.declared ? 'Si' : 'No'}</td>
                                <td>
                                    <button onClick={() => onStudentRemove(student.id)}>Eliminar</button>
                                    <button onClick={() => onStudentEdit(student)}>Editar</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export default StudentsList;