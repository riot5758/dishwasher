import { useState, useEffect } from 'react';

export default function Home() {
  const [absensi, setAbsensi] = useState([]);
  const [form, setForm] = useState({ nama: '', keterangan: '' });

  const fetchData = async () => {
    const res = await fetch('/api/absen');
    const data = await res.json();
    setAbsensi(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/absen', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm({ nama: '', keterangan: '' });
    fetchData();
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">📋 Catatan Absen (Firebase)</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Nama"
            className="w-full p-2 border rounded"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
          />
          <input
            type="text"
            placeholder="Keterangan (opsional)"
            className="w-full p-2 border rounded"
            value={form.keterangan}
            onChange={(e) => setForm({ ...form, keterangan: e.target.value })}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Absen
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">📅 Riwayat Absen</h2>
          <ul className="divide-y">
            {absensi.map((item, index) => (
              <li key={index} className="py-2">
                <div className="flex justify-between">
                  <span>{item.nama}</span>
                  <span className="text-sm text-gray-500">
                    {item.tanggal} - {item.jam}
                  </span>
                </div>
                {item.keterangan && (
                  <p className="text-gray-600 text-sm">{item.keterangan}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
