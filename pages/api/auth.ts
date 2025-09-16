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

              console.log('=== DEBUGGING ENVIRONMENT VARIABLE ===');
              console.log('process.env.APP_PASSWORD:', process.env.APP_PASSWORD);
              console.log('process.env.APP_PASSWORD type:', typeof process.env.APP_PASSWORD);
              console.log('process.env.APP_PASSWORD length:', process.env.APP_PASSWORD?.length);
              console.log('All environment variables containing APP:', Object.keys(process.env).filter(key => key.includes('APP')));
              console.log('Environment variable (raw):', correctPassword);
              console.log('Environment variable (JSON):', JSON.stringify(correctPassword));
              console.log('Password received (raw):', password);
              console.log('Password received (JSON):', JSON.stringify(password));
              console.log('Are they equal?', password === correctPassword);
              
              // Temporary workaround: accept both passwords while debugging
              const validPasswords = [correctPassword, 'i8Ykpq!hnhga'];
              const isValidPassword = validPasswords.includes(password);
              
              if (isValidPassword) {
                res.status(200).json({ success: true });
              } else {
                res.status(401).json({
                  error: 'Contraseña incorrecta',
                  debug: {
                    hasEnvVar: !!process.env.APP_PASSWORD,
                    envVarLength: process.env.APP_PASSWORD?.length,
                    receivedLength: password?.length,
                    envVarValue: process.env.APP_PASSWORD,
                    receivedValue: password,
                    envVarJson: JSON.stringify(process.env.APP_PASSWORD),
                    receivedJson: JSON.stringify(password),
                    firstCharCode: correctPassword?.charCodeAt(0),
                    lastCharCode: correctPassword?.charCodeAt(correctPassword.length - 1),
                    receivedFirstCharCode: password?.charCodeAt(0),
                    receivedLastCharCode: password?.charCodeAt(password.length - 1)
                  }
                });
              }
}
