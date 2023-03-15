import React, { useEffect, useState } from 'react';

const DataTable = () => {

    const [student, setStudent] = useState({ id: '', firstName: '', lastName: '', age: '' });
    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = (student) => {
        setStudent(student);
        setShowDetails(true);
    }

    const handleHideDetails = () => setShowDetails(false);

    return (
        <div className='dataTable border border-success border-3 rounded-3 m-2 '>
            <table className='table table-hover'>
                <TableHeader />
                <TableRow onShowDetails={handleShowDetails} />
            </table>
            {showDetails && <ShowStudentDetails student={student} onHideDetails={handleHideDetails} />}
        </div>
    );
};

const TableHeader = () => {
    return (
        <thead className='border-bottom border-2 border-dark p-3 mb-2 bg-black text-white'>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableAction = ({ student, onShowDetails }) => {
    return (
        <div>
            <button type='button' className='btn btn-success' onClick={() => onShowDetails(student)}>Details</button>
        </div>
    );
}
const studentList = [
    {
        id: '1',
        firstName: 'Son',
        lastName: 'Nghiem',
        age: '35'
    },
    {
        id: '2',
        firstName: 'Mikael',
        lastName: 'Svensson',
        age: '32'
    },
    {
        id: '3',
        firstName: 'David',
        lastName: 'Svantesson',
        age: '30'
    },
    {
        id: '4',
        firstName: 'Marius',
        lastName: 'Stoica',
        age: '39'
    }
];

const TableRow = ({ onShowDetails }) => {
    const [lists, setStudentList] = useState([{ id: '', firstName: '', lastName: '', age: '' }]);
    useEffect(() => {
        setStudentList(studentList);
    }, []);
    return (
        <tbody>
            {
                lists.map(student =>
                (
                    <tr>
                        <td>{student.id}</td>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.age}</td>
                        <td><TableAction student={student} onShowDetails={onShowDetails} /></td>
                    </tr>
                )
                )
            }
        </tbody>
    );

}

const ShowStudentDetails = ({ student, onHideDetails }) => {
    return (
        <div className='border border-success rounded-3 position-absolute top-50 start-50 translate-middle px-5 py-3'>
            <h3>Student Information</h3>
            <hr />
            <p>Student Id: {student.id}</p>
            <p>Full Name: {student.firstName} {student.lastName}</p>
            <p>Age: {student.age}</p>
            <button type='button' className='btn btn-success' onClick={onHideDetails}>Hide</button>
        </div>
    );
};
export default DataTable;