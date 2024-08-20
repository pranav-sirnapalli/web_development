export const fetchEmployees = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
        const data = await response.json();
        dispatch({ type: 'SET_EMPLOYEES', payload: data });
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
  };
  
  export const deleteEmployee = (id) => {
    return async (dispatch, getState) => {
      try {
        await fetch(`https://hub.dummyapis.com/employee/${id}`, {
          method: 'DELETE',
        });
        
        const updatedEmployees = getState().employees.filter(employee => employee.id !== id);
        dispatch({ type: 'SET_EMPLOYEES', payload: updatedEmployees });
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    };
  };
  
  export const updateEmployee = (updatedEmployee) => {
    return async (dispatch, getState) => {
      try {
        await fetch(`https://hub.dummyapis.com/employee/${updatedEmployee.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedEmployee),
        });
        
        const updatedEmployees = getState().employees.map(employee =>
          employee.id === updatedEmployee.id ? updatedEmployee : employee
        );
        dispatch({ type: 'SET_EMPLOYEES', payload: updatedEmployees });
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    };
  };
  