"use server";

import axios from "axios";
import { BASE_URL } from "../configs/constants";

export async function getAllNotes() {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/notes/list`);

    if (response.status !== 200) {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (err) {
    return err.message;
  }
}

export async function createNotes(data) {
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/notes/create`, data);

    return response.data;
  } catch (err) {
    return err.message;
  }
}

export async function deleteNotes(id) {
  try {
    const response = await axios.delete(
      `${BASE_URL}/api/v1/notes/delete/${id}`
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
}

export async function getNoteById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/notes/detail/${id}`);

    return response.data;
  } catch (err) {
    return err.message;
  }
}

export async function updateNotes(id, data) {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/v1/notes/update/${id}`,
      data
    );

    return response.data;
  } catch (err) {
    return err.message;
  }
}
