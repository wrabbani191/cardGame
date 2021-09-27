import {Component, Input} from '@angular/core';


@Component(
  {
    selector: 'app-card',
    template: `
      <ng-container *ngIf="count > 0">
        <table>
          <thead>
          <th *ngFor="let item of [].constructor(count); let i=index" [id]="i">column {{i + 1}}</th>
          </thead>
          <tr>
            <td *ngFor="let item of [].constructor(count); let i=index" (click)="toggleText(i)" [id]="i">down</td>
          </tr>
        </table>
      </ng-container>
    `
  }
)
export class Card {

  @Input() count = 0;

  toggleText(index: number) {
    const columns = document.querySelectorAll('td');
    columns.forEach(element => {
      if (element.innerText === 'up')
        element.innerText = 'down';
    })
    columns[index].innerText = 'up';
  }
}
