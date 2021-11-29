export const throwIfMissing = (val: any, message: string) => {
  if (val === undefined || val === null) {
    throw message;
  }
}