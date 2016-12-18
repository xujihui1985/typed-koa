export function deprecate(desc: string) {
  return function (target: Function): void {

  }
}

// decorate that change the constructor
export function logger<TFunction extends Function>(target: TFunction): TFunction {
  let newConstructor: Function = function () {
    console.log('Creating new instance');
    console.log(target);
  }
  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;
  return <TFunction>newConstructor;
}

// propety decorator


// Parameter Decorators
function MyParameterDecorator(target: Object,
                              propertyKey: string,
                              parameterIndex: number) {

  // second parameter is the name of the decorator member
  // third parameter is the original index of the decorated parameter
}

// method decorate
// if the method is static the target will be the constructor of the class
// otherwise it will be the prototype of the class
// the second parameter is the name of the decorated method
function readonly(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {

}