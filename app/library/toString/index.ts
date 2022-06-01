export function toString(value: any) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return String(value);
}
