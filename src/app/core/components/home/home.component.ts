import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInFromLeft', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('3000ms ease-out')
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('slideRightToLeft', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('3000ms ease-out')
      ]),
      transition(':leave', [
        animate('1500ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('slideRightToLeftPoint2', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('3000ms 200ms ease-out')
      ]),
      transition(':leave', [
        animate('1500ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('downToUpEnter-pt1', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }), // Starting position (translated down by 100% of its height)
        animate('3000ms 500ms ease-in-out', style({ transform: 'translateY(0)' })) // Ending position (not translated)
      ])
    ]),
    trigger('downToUpEnter-pt2', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }), // Starting position (translated down by 100% of its height)
        animate('3000ms 1000ms ease-in-out', style({ transform: 'translateY(0)' })) // Ending position (not translated)
      ])
    ]),
    trigger('downToUpEnter-pt3', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }), // Starting position (translated down by 100% of its height)
        animate('3000ms 1500ms ease-in-out', style({ transform: 'translateY(0)' })) // Ending position (not translated)
      ])
    ]),
    trigger('downToUpEnter-pt4', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }), // Starting position (translated down by 100% of its height)
        animate('3000ms 2000ms ease-in-out', style({ transform: 'translateY(0)' })) // Ending position (not translated)
      ])
    ])
  ]
})

export class HomeComponent {
  partnerBaseUrl: string = '../../../../assets/partners-img/';
  partners: any = [
    { name: 'boeing', path: 'boeing.png' },
    { name: 'emirates', path: 'emirates.png' },
    { name: 'etihad', path: 'etihad.png' },
    { name: 'fly-dubai', path: 'fly-dubai.png' },
    { name: 'ari-india', path: 'air-india.png' },
    { name: 'indigo', path: 'indigo.png' }
  ]
}
