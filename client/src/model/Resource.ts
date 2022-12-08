class Resource {
  id: string;
  name: string;
  link: string;
  useFor: string[]; //array that holds the names of the relevant tasks

  constructor(id: string, name: string, link: string, useFor: string[]) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.useFor = useFor;
  }
}

export default Resource;
