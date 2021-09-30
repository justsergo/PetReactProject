import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {

    const makeElements = data.map(item => {
        return (
            <EmployeesListItem {...item}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {makeElements}
        </ul>
    )
}

export default EmployeesList;