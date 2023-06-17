import { v4 as uuidv4 } from 'uuid';

// Check if the UUIDs are already stored in local storage
let storedData = localStorage.getItem('data');

// If the UUIDs are not stored, generate new ones
if (!storedData) {
  const newData = [
    {
      id: uuidv4(),
      Name: 'Green Jaket',
      image: './Images/vet1.png',
      prix: 3500,
      Date: '09/10/2023',
    },
    {
      id: uuidv4(),
      Name: 'test1',
      image: './Images/vet2.png',
      prix: 3500,
      Date: '09/10/2023',
    },
    {
      id: uuidv4(),
      Name: 'test1',
      image: './Images/vet1.png',
      prix: 3500,
      Date: '09/10/2023',
    },
    {
      id: uuidv4(),
      Name: 'test1',
      image: './Images/vet2.png',
      prix: 3500,
      Date: '09/10/2023',
    },
  ];

  // Store the generated UUIDs in local storage
  localStorage.setItem('data', JSON.stringify(newData));
  storedData = newData;
} else {
  storedData = JSON.parse(storedData);
}

export const data = storedData;
