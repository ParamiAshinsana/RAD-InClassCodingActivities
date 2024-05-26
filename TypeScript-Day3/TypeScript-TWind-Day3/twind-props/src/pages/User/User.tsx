import React from 'react';
import GDSEButton from '../../components/Button';
import Titles from '../../components/Title';
import TextField from '../../components/TextField';

export default function User() {
  return (
    <>
      <Titles name="User Management" />

      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-48 object-cover" src="https://via.placeholder.com/400x300" alt="Profile image" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600 mt-2">Full Stack Developer</p>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida,
            nulla nunc varius lectus, nec rutrum justo nibh eu lectus.
          </p>
          <div className="flex mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-700 mr-4">LinkedIn</a>
            <a href="#" className="text-blue-500 hover:text-blue-700">GitHub</a>
          </div>
          <GDSEButton className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" btnName="Contact Me" />
        </div>
      </div>
    </>
  );
}
