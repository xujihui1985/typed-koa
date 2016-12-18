export class Field<T> {
  private currentValue: T;
  private previousValue: T | null;

  constructor(value: T) {
    this.currentValue = value;
    this.previousValue = null;
  }

  public get val(): T {
    return this.currentValue;
  }

  public set val(value: T) {
    this.previousValue = this.currentValue;
    this.currentValue = value;
  }

  public hasChanged() {
    return this.currentValue !== this.previousValue;
  }
}