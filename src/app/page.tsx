"use client";
import React from 'react';
import { useState } from 'react';

export default function Home() {
  const [typeOfPanne, setTypeOfPanne] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [urgency, setUrgency] = useState('');

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold mb-6">Trouvez un artisan fiable en 30 minutes</h1>
      
      {/* Sous-titre */}
      <p className="text-xl text-gray-700 mb-12">Débouchage, curage, inspection caméra en Île-de-France</p>

      {/* Formulaire */}
      <form className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        {/* Type de panne */}
        <div className="mb-4">
          <label htmlFor="typeOfPanne" className="block text-gray-700 font-bold mb-2">Type de panne</label>
          <select
            id="typeOfPanne"
            value={typeOfPanne}
            onChange={(e) => setTypeOfPanne(e.target.value)}
            required
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Choisissez un type de panne</option>
            <option value="Débouchage">Débouchage</option>
            <option value="Curage">Curage</option>
            <option value="Inspection caméra">Inspection caméra</option>
          </select>
        </div>

        {/* Code postal */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">Code postal</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            placeholder="Ex : 75001"
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Urgence */}
        <div className="mb-6">
          <label htmlFor="urgency" className="block text-gray-700 font-bold mb-2">Urgence</label>
          <select
            id="urgency"
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            required
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="">Choisissez une urgence</option>
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Très urgent">Très urgent</option>
          </select>
        </div>

        {/* Bouton de recherche */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:border-blue-500"
        >
          Trouver un artisan
        </button>
      </form>
    </div>
  );
}