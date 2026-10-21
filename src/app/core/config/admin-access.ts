/**
 * Acceso de administración por enlace con token.
 *
 * El administrador entra con: <url de la carta>?acceso=<token>
 * Acá se guarda solo el hash SHA-256 del token (nunca el token en sí), así no queda
 * expuesto en el código ni en el repositorio. Para cambiar el token: generar uno nuevo,
 * calcular su SHA-256 y reemplazar este valor.
 *
 * Nota: sin backend, esta protección es del lado del navegador. Cuando haya servidor,
 * el token debe validarse ahí.
 */
export const ADMIN_TOKEN_SHA256 = 'c1070c848ac4ebd407a62a704ee1d5effe361a3e161f65bef424cfc19b7fbaa4';

/** Nombre del parámetro de la URL que trae el token. */
export const ADMIN_TOKEN_PARAM = 'acceso';

export async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
