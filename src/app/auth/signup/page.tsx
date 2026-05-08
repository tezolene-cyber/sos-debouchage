"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
    postalCode: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    // Redirige vers le dashboard après inscription réussie
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Inscription artisan</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md"
        noValidate
      >
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Mot de passe */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Nom de l'entreprise */}
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-gray-700 font-bold mb-2">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            required
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Code postal */}
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-gray-700 font-bold mb-2">
            Code postal (5 chiffres)
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            pattern="[0-9]{5}"
            maxLength={5}
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Téléphone */}
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
            Téléphone
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            pattern="(\+33|0)[1-9]\d{8}"
            placeholder="+33 ou 0..."
            className="appearance-none w-full py-3 px-4 text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full focus:outline-none focus:shadow-outline"
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
}