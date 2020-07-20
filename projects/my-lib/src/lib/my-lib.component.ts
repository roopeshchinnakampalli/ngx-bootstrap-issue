import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-my-lib",
  template: `
    <ng-container>
      <a
        href="javascript:;"
        class="btn btn-default btn-secondary"
        [popover]="test"
        popoverTitle="Popover on top"
        placement="top"
      >
        Popover on top
      </a>
    </ng-container>
    <ng-template #test> </ng-template>
  `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  comp: any;
  constructor() {}

  ngOnInit(): void {}
}
