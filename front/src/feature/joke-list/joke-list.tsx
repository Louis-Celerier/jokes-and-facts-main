"use client";

import React, { useState } from 'react';
import { useAsync } from "react-use";

export function SelectBar() {
    const [selectedValue, setSelectedValue] = useState('');

    const { loading, error, value } = useAsync(async () => {
        const response = await fetch("http://localhost:3001/jokes/types");
        return await response.json();
    }, []);


    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    if (loading) return <div>Loading joke types...</div>;
    if (error) return <div>Error loading joke types: {error.message}</div>;
    return (
        <div>
            <label htmlFor="select-bar">Select joke's type:</label>
            <select id="select-bar" value={selectedValue} onChange={handleChange}>
                <option value="">--Please choose an option--</option>
                {value.map((jType, index) => (
                    <option key={index} value={jType}>
                        {jType}
                    </option>
                ))}
            </select>
            <div>
                {selectedValue && <JokeList jType={selectedValue} />}
            </div>
        </div>
    );
}

export function JokeList({ jType }: { jType: string }) { 
  const { loading, error, value } = useAsync(async () => {
    console.log("Essaie " + jType);
    const response = await fetch(`http://localhost:3001/jokes/${jType}`);
    return await response.json();
  }, [jType]);

  if (loading) return <div>Loading jokes...</div>;
  if (error) return <div>Error loading jokes: {error.message}</div>;
    console.log(jType);

  return value.map((joke, index) => (<li key={index}>{joke.setup} - {joke.punchline}</li>));
}