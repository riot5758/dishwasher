import { db } from '../../lib/firebase';
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';

export default async function handler(req, res) {
  const absenCollection = collection(db, 'absensi');

  if (req.method === 'POST') {
    const { nama, keterangan } = req.body;
    const now = new Date();

    await addDoc(absenCollection, {
      nama,
      keterangan,
      tanggal: now.toLocaleDateString(),
      jam: now.toLocaleTimeString(),
      createdAt: Timestamp.fromDate(now),
    });

    res.status(200).json({ message: 'Berhasil absen' });
  } else if (req.method === 'GET') {
    const snapshot = await getDocs(absenCollection);
    const data = snapshot.docs.map(doc => doc.data()).sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);
    res.status(200).json(data);
  } else {
    res.status(405).end();
  }
}
