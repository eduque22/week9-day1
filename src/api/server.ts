import { CarState } from '../redux/slices/rootSlice';

let token = '2a673118bcc1ebca69acc7991dc24f724187316cd305b1aa'

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data'), response.status
        }

        return await response.json()
    },

    create: async(data:CarState) => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status
        }

        return await response.json()
    },

    update: async(id:string, data:CarState) => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data on server'), response.status
        }

        return await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data'), response.status
        }
    }
}