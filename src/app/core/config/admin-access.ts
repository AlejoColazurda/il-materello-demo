import { StaffUser } from '../models/user.model';

/**
 * Acceso de administración por enlace personal con token.
 *
 * Cada administrador entra con su propio enlace: <url de la carta>?acceso=<token>
 * Acá se guarda solo el hash SHA-256 de cada token (nunca el token en sí), así no queda
 * expuesto en el código ni en el repositorio.
 *
 * - Dar de baja a alguien: borrar su entrada de la lista.
 * - Dar un acceso nuevo: generar un token aleatorio, calcular su SHA-256 y agregar una entrada.
 *
 * Nota: sin backend, esta protección es del lado del navegador. Cuando haya servidor,
 * el token debe validarse ahí.
 */
export interface AdminAccess {
  sha256: string;
  user: StaffUser;
}

const admin = (id: string, name: string, nickname: string): StaffUser => ({
  id,
  name,
  nickname,
  email: '',
  roleId: 'admin',
  active: true,
});

export const ADMIN_ACCESS: AdminAccess[] = [
  {
    sha256: 'c1070c848ac4ebd407a62a704ee1d5effe361a3e161f65bef424cfc19b7fbaa4',
    user: admin('admin-potenciapp', 'Soporte Potenciapp', 'potenciapp'),
  },
  {
    sha256: '0ccbef5312690b336294467b78c9098c981abc5cb333fb5716dd2080ee2c17bb',
    user: admin('admin-abigail', 'Abigail', 'abigail'),
  },
  {
    sha256: '2127f20459e1936ba45097916dcd5ace549d395aa1131a2e44a68282073ad679',
    user: admin('admin-lili', 'Lili', 'lili'),
  },
  {
    sha256: '639fb322fc80e0fac7adae67c851a3238a1bda4c9f23e4443e985842efc51558',
    user: admin('admin-martin', 'Martín', 'martin'),
  },
];

/** Nombre del parámetro de la URL que trae el token. */
export const ADMIN_TOKEN_PARAM = 'acceso';

export async function sha256Hex(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
