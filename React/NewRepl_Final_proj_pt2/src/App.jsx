import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import DisplayTable from './components/DisplayTable';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <EmployeeList />
        <DisplayTable />
      </div>
    </Provider>
  );
}

export default App;
