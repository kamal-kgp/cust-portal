import React from 'react';
import { Customer } from '../types';

interface CustomerListProps {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomer, onSelectCustomer }) => {
  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <div 
          key={customer.id} 
          className={`customer-card ${selectedCustomer?.id === customer.id ? 'selected' : ''}`}
          onClick={() => onSelectCustomer(customer)}
        >
          <p>{customer.title}</p>
          <p>{customer.description.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerList;