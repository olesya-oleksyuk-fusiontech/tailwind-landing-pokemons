export class ObjToArr {
  public static values<T>(obj: { [key: string]: T }): T[] {
    return Object.values(obj);
  }

  public static keys(obj: object): string[] {
    return Object.keys(obj);
  }

  public static entries<T>(obj: { [key: string]: T }): [string, T][] {
    return Object.entries(obj);
  }
}
