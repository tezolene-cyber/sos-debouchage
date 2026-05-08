import { createClient } from "@/lib/supabaseServer";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: leads, error } = await supabase.from("leads").select("*");

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Leads disponibles</h2>
        {error && <p className="text-red-500">Erreur : {error.message}</p>}
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-2">Type</th>
              <th className="pb-2">Code Postal</th>
              <th className="pb-2">Urgence</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads?.map((lead: any) => (
              <tr key={lead.id} className="border-t">
                <td className="py-2">{lead.type_panne}</td>
                <td className="py-2">{lead.postal_code}</td>
                <td className="py-2">{lead.urgence}</td>
                <td className="py-2">{new Date(lead.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}