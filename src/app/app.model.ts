export class card_data {
  public name: string;
  public description: string;
  public imagePath: string;
  public category: string;
  public language: string;
  public author: string;
  public type: string;
  public tags: string;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    tags: string,
    category: string,
    language: string,
    author: string,
    type: string,
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.author = author;
    this.category = category;
    this.language = language;
    this.tags = tags;
    this.type = type;
  }
}
