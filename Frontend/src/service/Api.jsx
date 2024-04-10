import axios from "axios";

const baseURL = "http://localhost:7000/api/user";

export const addUser = async (formData) => {
  try {
    const response = await axios.post(`${baseURL}/add`, formData);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseURL}/get`);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getSingleUsers = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateUsers = async (id, formData) => {
  try {
    const response = await axios.put(`${baseURL}/update/${id}`, formData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteUsers = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/delete/${id}`);
  } catch (error) {
    return error;
  }
};
