export function getCoordinatesFromMessage(message: string): string {
  let  defaultCoordinates = '9.0000000000,0.0000000000';
  if(!message) { return defaultCoordinates; }
  let target = "maps?q=";
  let position = message.indexOf(target);
  if(position === -1) { return defaultCoordinates; }
  let partial = message.substring(position + target.length);
  let pieces = partial.split(' ');
  let first = pieces[0];
  return first;
}