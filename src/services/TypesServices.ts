import { api } from '../config/axios';
import type { AppDispatch } from '../store';
import { setIsLoadingTypes, setTypesList } from '../store/TypesSlice';
import { ResourceSummary } from '../types/pokemon';

export default class TypesService {
  fetchTypesList() {
    return async (dispatch: AppDispatch) => {
      try {
        dispatch(setIsLoadingTypes(true));
        const response = await api.get('type');
        const typesList: ResourceSummary[] = response.data.results;
        console.log(typesList);
        dispatch(setIsLoadingTypes(false));
        dispatch(setTypesList(typesList));
      } catch (error) {
        dispatch(setTypesList([]));
      } finally {
        setIsLoadingTypes(false);
      }
    };
  }
}
