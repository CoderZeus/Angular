export interface Person {
    id: number;
    uuid: string;
    name: string;
    sex: string;
    imageUrl: string;
    realtionships: Map<string, Person>;
  }