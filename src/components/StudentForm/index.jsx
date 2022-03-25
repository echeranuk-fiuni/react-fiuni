import React, { useEffect, useState } from 'react';

const StudentForm = props => {

    const { onStudentSubmit = () => {}, studentOnEdit = undefined } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(18);
    const [carreer, setCarreer] = useState('');
    const [declared, setDeclared] = useState(false);

    const cleanForm = () => {
        setFirstName('');
        setLastName('');
        setAge(18);
        setCarreer('');
        setDeclared(false);
    };

    const fillForm = student => {
        setFirstName(student?.firstName || '');
        setLastName(student?.lastName || '');
        setAge(student?.age || 18);
        setCarreer(student?.carreer || '');
        setDeclared(student?.declared || false);
    };

    useEffect(() => {
        fillForm(studentOnEdit);
    }, [studentOnEdit]);

    const handleSubmit = event => {
        event.preventDefault();
        onStudentSubmit({
            firstName,
            lastName,
            age,
            carreer,
            declared,
        });
        cleanForm();
    };

    return (
        <>
            <h3>Guardar estudiante:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    Nombre: <input type='text' value={firstName} onChange={event => setFirstName(event.target.value)} />
                </div>
                <div>
                    Apellido: <input type='text' value={lastName} onChange={event => setLastName(event.target.value)} />
                </div>
                <div>
                    Edad: <input type='number' value={age} min={18} max={99} step={1} onChange={event => setAge(event.target.value)} />
                </div>
                <div>
                    Carrera: 
                    <select value={carreer} onChange={event => setCarreer(event.target.value)}>
                        <option>Ingenieria en Informatica</option>
                        <option>Ingenieria Civil</option>
                        <option>Ingenieria Electromecanica</option>
                    </select>
                </div>
                <div>
                    Matriculado?: <input type='checkbox' checked={declared} onChange={event => setDeclared(event.target.checked)} />
                </div>
                <div>
                    <input type='submit' value='Guardar' />
                </div>
            </form>
        </>
    );
};

export default StudentForm;