import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  // Get password from server-side environment variable (not exposed to frontend)
  const correctPassword = process.env.APP_PASSWORD;
  
  if (!correctPassword) {
    return res.status(500).json({ error: 'Configuración de servidor incompleta' });
  }

  if (password === correctPassword) {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ error: 'Contraseña incorrecta' });
  }
}
