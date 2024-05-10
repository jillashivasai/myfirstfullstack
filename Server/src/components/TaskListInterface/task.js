import React, { useEffect, useState } from 'react';

export default function Task() {
    const [info, setInfo] = useState('');

    const api = 'http://localhost:8080/newuser';
    

    const fetchData = async () => {
        try {
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setInfo(JSON.stringify(data)); // Convert JSON data to string
        } catch (error) {
            console.error('Error fetching data:', error);
            setInfo('Error fetching data'); // Update state with error message
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <p>{info}</p>
        </div>
    );
}
