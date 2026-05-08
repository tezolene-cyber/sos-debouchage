"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [typePanne, setTypePanne] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [urgence, setUrgence] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("leads").insert([
      {
        type_panne: typePanne,
        postal_code: postalCode,
        urgence: urgence,
      },
    ]);
    if (error) {
      setMessage("Erreur : " + error.message);
    } else {
      setMessage("Votre demande a bien été envoyée !");
      setTypePanne("");
      setPostalCode("");
      setUrgence("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Trouvez un artisan fiable en 30 minutes</h1>
      <p className="text-xl text-gray-700 mb-12">Débouchage, curage, inspection caméra en Île-de-France</p>
      <form onSubmit={handleSubmit} className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="typePanne" className="block text-gray-700 font-bold mb-2">Type de panne</label>
          <select id="typePanne" value={typePanne} onChange={(e) => setTypePanne(e.target.value)} required className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500">
            <option value="">Choisissez un type de panne</option>
            <option value="Débouchage">Débouchage</option>
            <option value="Curage">Curage</option>
            <option value="Inspection caméra">Inspection caméra</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">Code postal</label>
          <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required placeholder="Ex : 75001" className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="urgence" className="block text-gray-700 font-bold mb-2">Urgence</label>
          <select id="urgence" value={urgence} onChange={(e) => setUrgence(e.target.value)} required className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500">
            <option value="">Choisissez une urgence</option>
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Très urgent">Très urgent</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:border-blue-500">
          Trouver un artisan
        </button>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
}