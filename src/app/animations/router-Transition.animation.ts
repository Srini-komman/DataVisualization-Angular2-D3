import {trigger, state, style, transition, animate, keyframes} from '@angular/core';

export function routerTransition()
{
	return trigger('routerChartTransition', [
			  state('*', style({transform: 'translateX(0)', opacity: 1})),
			  transition('void => *', [
				style({transform: 'translateX(-100%)', opacity: 0}),
				animate(1000)
		  ]),
		  transition('* => void', animate(1000, style({transform: 'translateX(100%)', opacity: 0})))
		])
}