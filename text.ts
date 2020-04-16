import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  descriptionLength = 150;
  truncatedDescription: string;
  showTextButtons: boolean;
  shortText = true;
  descriptionNtnText= 'Show more';

  constructor() { }

  ngOnInit(): void {
    this.truncatedDescription = this.description.length > this.descriptionLength ? this.description.substring(0, this.descriptionLength) : this.description;
    this.showTextButtons = this.description.length > this.descriptionLength;
  }

  showText(): void {
    if (this.shortText) {
      this.truncatedDescription = this.description;
      this.shortText = !this.shortText;
      this.descriptionNtnText = 'Show Less';
    } else {
      this.truncatedDescription = this.description.substring(0, this.descriptionLength);
      this.shortText = !this.shortText;
      this.descriptionNtnText = 'Show more';
    }
  }

}
