export class Menu {
  name: string;
  permalink: string;
  icon: string;

  constructor(json) {
    this.name = json.name;
    this.permalink = json.permalink;
    this.icon = json.icon;
  }
}
