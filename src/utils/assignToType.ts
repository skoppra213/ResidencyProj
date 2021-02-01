export function assignToType<T extends object>(obj: any, target: T): T {
  Object.keys(obj).forEach((key: string) => {
    if (target.hasOwnProperty(key)) {
      target[key as keyof T] = obj[key];
    }
  });
  return target;
}