export const checkFileName = (name: string) => ({
  isFile: name.includes('.'),
  isExe: name.includes('.exe'),
});
