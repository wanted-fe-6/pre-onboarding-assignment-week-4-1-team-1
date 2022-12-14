import instance from './index';
import customersService from '../services/customers';

const getCustomersByPage = (page = 1, search, filters = {}) =>
  customersService.getCustomersByPage(page, search, filters);

const searchCustomers = word => instance.get(`customers/?q=${word}`);

const getACustomersById = id => instance.get(`/customers/${id}`);

const deletCustomersById = id => customersService.deleteCustomers(id);

const updateUserNameById = (id, name) => customersService.updateCustomers(id, name);

const addUser = ({ uuid, e }) => customersService.createCustomers(uuid, e);

const getACustomerSetting = uuid => instance.get(`/customers/?uuid=${uuid}`);

const getCustomersAll = () => instance.get('customers');

export {
  getCustomersByPage,
  searchCustomers,
  addUser,
  getACustomersById,
  deletCustomersById,
  updateUserNameById,
  getACustomerSetting,
  getCustomersAll,
};
