import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lib-my-lib",
  template: `
    <ndc-dynamic [ndcDynamicComponent]="comp"></ndc-dynamic>
    <button
      type="button"
      class="btn btn-default btn-secondary"
      popover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
      popoverTitle="Popover on top"
      placement="top"
    >
      Popover on top
    </button>
  `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  comp: any;
  constructor() {}

  ngOnInit(): void {}
}
