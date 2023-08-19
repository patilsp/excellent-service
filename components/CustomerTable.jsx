import React from 'react';

const CustomerTable = ({ customers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          {/* Add more header columns if needed */}
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer._id}>
            <td>{customer.firstname} {customer.lastname}</td>
            <td>{customer.email}</td>
            {/* Add more data cells if needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerTable;
