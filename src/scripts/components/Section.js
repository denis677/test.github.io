

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.containerSelector = containerSelector; 
  }

  renderItem() {
    this.items.forEach(item => this.renderer(item));
  }

  addItem(element) {
    this.containerSelector.append(element);
  }
}