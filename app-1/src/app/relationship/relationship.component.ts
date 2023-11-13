import { Component, Input } from '@angular/core';

@Component({
  selector: 'relationship-root',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.css']
})
export class RelationshipComponent {
  title = 'relationship-1';
  @Input  name : string;
}