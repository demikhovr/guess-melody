export const createElement = (template) => {
  const div = document.createElement(`div`);

  div.innerHTML = template.trim();

  return div.firstChild;
};
