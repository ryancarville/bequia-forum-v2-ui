// Function which extracts keys from an object into an array
export function keys<O extends object>(obj: O): (keyof O)[] {
  return Object.keys(obj) as (keyof O)[];
}

export function objValues<O extends object>(obj: O): any[] {
  return Object.values(obj);
}

export function uriMapper(path: string, currChar: string, newChar: string) {
  let uri: string = path;
  uri = uri.replaceAll(currChar, newChar);
  return uri;
}