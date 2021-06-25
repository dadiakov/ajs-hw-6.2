export default function superAttack(char) {
  const { special } = char;
  if (!special) { return null; }
  const outputObj = [];
  special.forEach((o) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = o;
    outputObj.push({
      id, name, description, icon,
    });
  });
  return outputObj;
}
