import { ChangeDetectionStrategy, Component, output } from '@angular/core';

/**
 * Aviso al ingresar a la carta: pedir la factura antes de la cuenta y
 * consultar al mozo por restricciones alimentarias. Corto, sin textos legales largos.
 */
@Component({
  selector: 'app-welcome-notice',
  templateUrl: './welcome-notice.html',
  styleUrl: './welcome-notice.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeNotice {
  readonly dismissed = output<void>();
}
