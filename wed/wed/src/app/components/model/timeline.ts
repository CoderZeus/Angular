export class TimeLine {
description: string;
title: string;
datetime: number;
sequenceNumber: number;

constructor(sequenceNumber: number) {
    this.description = "";
    this.title = "";
    this.datetime = Date.now();
    this.sequenceNumber = sequenceNumber;
}

public init(sequenceNumber: number, description:string, title:string, datetime:number) {
    this.description = description;
    this.title = title;
    this.datetime = datetime;
    this.sequenceNumber = sequenceNumber;
}

}