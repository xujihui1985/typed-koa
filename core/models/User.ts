import { Field } from '../Field';
import {deprecate, logger} from '../decorator';

export const CLASS_INFO = Symbol();

@logger
@deprecate('hello')
export class User {

  private _name: Field<string>;

  constructor() {
    this._name = new Field<string>('');
  }

  [CLASS_INFO]() {
    console.log('class info');
  }

  static [Symbol.hasInstance](obj: Object) {
    return obj.hasOwnProperty('name');
  }

  public get name(): string {
    return this._name.val;
  }

  public set name(name: string) {
    this._name.val = name;
  }

  public hasChanged(): boolean {
    for (const key in this) {
      const field = this[key];
      if (field instanceof Field) {
        if (field.hasChanged()) {
          return true;
        }
      }
    }
    return false;
  }



}