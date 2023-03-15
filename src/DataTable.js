import React, { useEffect, useState } from 'react';

const DataTable = () => {
    return (
        <div className='dataTable'>
            <table className='table table-hover'>
                <TableHeader />
                <TableRow />
            </table>
        </div>
    );
};
export default DataTable;

const TableHeader = () => {
    return (
        <thead className='border-bottom border-2 border-dark'>
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

const TableAction = () => {
    return (
        <div>
            <button type='button' className='btn btn-info'>Details</button>
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

const TableRow = () => {
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
                        <td><TableAction /></td>
                    </tr>
                )
                )
            }
        </tbody>
    );

}


