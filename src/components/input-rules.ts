export function required(value: any): boolean | string {
  if (value == null || value == "") return "This field is required";

  return true;
}
