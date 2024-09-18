import React, { act } from 'react';
import {fireEvent, render, screen } from '@testing-library/react'
import DaftarTalent from './pages/DaftarTalent';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import instance from './services/axiosConfig';
import TalentCard from './components/TalentCard';
import { AddCircleOutline } from '@mui/icons-material';

jest.mock("./services/axiosConfig");

// test('renders learn react link', async () => {
//   await act(async () => {
//     render(
//       <MemoryRouter>
//         <DaftarTalent />
//       </MemoryRouter>
//     );
//   });
//   const linkElements = screen.getAllByText(/daftar talent/i);
//   expect(linkElements.length).toBeGreaterThan(0);
//   linkElements.forEach(linkElement => {
//     expect(linkElement).toBeInTheDocument();
//   })
// });

// test('fetch data asynchronously', async () => {
//   try {
//       const response = await instance.get('/skill-set-option-lists');
//       console.log('Response data:', response.data.mappingResponse);
//   } catch (error) {
//       console.log('Error fetching data:', error);
//   }
// });


// test('fetch data asynchronously', async () => {
//   try {
//       const response = await axios.get('url');
//       console.log('Response data:', response.data);
//       expect(response.status).toBe(200);
//   } catch (error) {
//       console.log('Error fetching data:', error);
//   }
// });


// test("chekc button and handleClick", () => {
//   render(<DaftarTalent />);

//   const button 1 = lo
// })

// test("find button with name and handleClick", async () =>  {
//   const handleTalent = jest.fn();

//   await act(async () => {
//     render (
//       <MemoryRouter>
//         <DaftarTalent handleTalent={handleTalent}/>
//       </MemoryRouter>
//     );
//   })
//   const button = screen.getByRole('button', {name: "Tambah Talent"});
//   expect(button).toBeInTheDocument();
//   fireEvent.click(button);
//   expect(handleTalent).toHaveBeenCalledTimes(1);
// });

// test("find icon in button", async () => {
//   await act( async () => {
//     render(
//       <MemoryRouter>
//         <DaftarTalent />
//       </MemoryRouter>
//     );
//   });

//   const icon = <AddCircleOutline />;

//   const iconButton = screen.getByTestId("icon-add");
//   expect(iconButton).toBeInTheDocument();
// });

