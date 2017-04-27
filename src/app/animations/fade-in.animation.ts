import { trigger, state, animate, transition, style } from '@angular/core';
export const fadeInAnimation =
    trigger('fadeInAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
        ]),
    ]);