import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import GoogleLink from './components/GoogleLink';
import Greetings from './components/Greetings';
import StudentsList from './components/StudentsList';
import StudentForm from './components/StudentForm';

const App = () => {

  const [fullName, setFullName] = useState('Juan Perez');
  const [goodbye, setGoodbye] = useState(false);
  const [currentId, setCurrentId] = useState(1);
  const [students, setStudents] = useState([]);
  const [studentOnEdit, setStudentOnEdit] = useState(undefined);

  const handleChangeGreeting = () => {
    const newFullName = faker.name.findName();
    const newGoodbye = !goodbye;
    setFullName(newFullName);
    setGoodbye(newGoodbye);
  }

  const getNextId = () => {
    const id = Number(currentId);
    setCurrentId(id + 1);
    return id;
  }

  const handleStudentSubmit = student => {
    if (studentOnEdit) {
      // Update
      const updatedStudent = {
        id: studentOnEdit.id,
        ...student
      };

      setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
    } else {
      // Create
      const newStudent = {
        id: getNextId(),
        ...student
      };
  
      setStudents([...students, newStudent]);
    }
    setStudentOnEdit(undefined);
  }

  const handleStudentRemove = id => {
    const newStudents = students.filter(student => student.id !== id);
    setStudents(newStudents);
  }

  const handleStudentEdit = student => {
    setStudentOnEdit(student);
  }

  return (
    <>
      <Greetings fullName={fullName} goodbye={goodbye} onChangeGreeting={handleChangeGreeting} />
      <GoogleLink />
      <StudentsList students={students} onStudentRemove={handleStudentRemove} onStudentEdit={handleStudentEdit} />
      <StudentForm onStudentSubmit={handleStudentSubmit} studentOnEdit={studentOnEdit} />
    </>
  )
}

export default App;
