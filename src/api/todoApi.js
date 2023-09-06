import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://64f5ade02b07270f705d8839.mockapi.io/datacontacts',
})

export const getAllToDo = async () => {
    const { data } = await instance()
    return data
}

export const addContact = async (data) => {
    const response = await instance.post('', {
        name: data.name,
        phone: data.phone,
    })
    return response.data;
}

export const deleteContact = async (id) => {
    await instance.delete(`${id}`)
}
