import { Pipe, PipeTransform } from '@angular/core';
import { toRemainingTimeFormat } from './remaining-time-format';

@Pipe({
  standalone: true,
  name: 'remainingTimeFormat',
})
export class RemainingTimeFormatPipe implements PipeTransform {
  transform(value: number | null): string {
    return toRemainingTimeFormat(value ?? 0);
  }
}
