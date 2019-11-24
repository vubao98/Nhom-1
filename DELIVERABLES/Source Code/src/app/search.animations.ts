import { animate, state, style, transition, trigger } from '@angular/animations';

export function toggleSearch() {
    return trigger('toggleSearch', [
        state('void', style({})),
        state('open', style({
            // width: '10',
            display: 'block',
            opacity: '1'
        })),
        state('close', style({
            // width: '35rem',
            display: 'none',
            opacity: '0'
        })),
        transition('open => close', [
            animate('.1s')
        ]),
        transition('close => open', [
            animate('.1s')
        ])
    ]);
}

export function toggleSearchContainer() {
    return trigger('toggleSearchContainer', [
        state('void', style({})),
        state('open', style({
            display: 'block',
            opacity: '1',
            position: 'absolute'
        })),
        state('close', style({
            display: 'none',
            opacity: '0',
            position: 'absolute'
        })),
        transition('open => close', [
            animate('.1s')
        ]),
        transition('close => open', [
            animate('.1s')
        ])
    ]);
}

export function slideToTop() {
    return trigger('routerTransition', [
        state('void', style({})),
        state('*', style({})),
        transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
        ]),
        transition(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
