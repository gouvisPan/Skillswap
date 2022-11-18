class Resource {
  name: string;
  link: string;
  useFor: string[]; //array that holds the names of the relevant tasks

  constructor(name: string, link: string, useFor: string[]) {
    this.name = name;
    this.link = link;
    this.useFor = useFor;
  }
}

export default Resource;
