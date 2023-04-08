import axios from 'axios';
export const client  = axios.create({
	// Configuration
	baseURL: 'https://ecommerce-jkod.onrender.com/api/v1/',
	timeout: 8000,
	headers: {
		Accept: 'application/json',
    	},
});

