import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  // Get password from server-side environment variable (not exposed to frontend)
  const correctPassword = process.env.APP_PASSWORD;
  
  // Debug logging (remove in production)
  console.log('Debug - APP_PASSWORD exists:', !!process.env.APP_PASSWORD);
  console.log('Debug - APP_PASSWORD length:', process.env.APP_PASSWORD?.length);
  console.log('Debug - APP_PASSWORD value:', JSON.stringify(process.env.APP_PASSWORD));
  console.log('Debug - Received password length:', password?.length);
  console.log('Debug - Received password value:', JSON.stringify(password));
  
  if (!correctPassword) {
    return res.status(500).json({ error: 'Configuración de servidor incompleta' });
  }

              // Remove quotes from environment variable if they exist
              const cleanPassword = correctPassword.replace(/^"(.*)"$/, '$1');
              
              if (password === cleanPassword) {
                res.status(200).json({ success: true });
              } else {
                res.status(401).json({
                  error: 'Contraseña incorrecta',
                  debug: {
                    hasEnvVar: !!process.env.APP_PASSWORD,
                    envVarLength: process.env.APP_PASSWORD?.length,
                    receivedLength: password?.length,
                    envVarValue: JSON.stringify(process.env.APP_PASSWORD),
                    receivedValue: JSON.stringify(password),
                    cleanPassword: JSON.stringify(cleanPassword)
                  }
                });
              }
}
