import { useQuery } from 'react-query';
import { fetchForms } from '../utils/localStorage';

export const useFormsQuery = () => {
  const { data: forms = [] } = useQuery('forms', fetchForms);

  return {
    forms,
  };
};
