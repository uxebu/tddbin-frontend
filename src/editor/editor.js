import Ace from './ace';

export default class Editor {

  constructor(domNodeId) {
    this.ace = new Ace();
    this.ace.setDomNodeId(domNodeId);
  }

  setContent(content) {
    this.ace.setContent(content);
  }

  getContent() {
    return this.ace.getContent();
  }

}
