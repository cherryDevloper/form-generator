export const fetchForms = async () => {
  const localData = localStorage.getItem('forms');
  const forms = localData ? JSON.parse(localData) : [];
  return forms;
};
