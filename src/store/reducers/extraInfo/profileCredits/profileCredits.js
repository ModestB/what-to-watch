import { 
  FILTER_SINGLE_PAGE_END
} from '../../../actionTypes/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FILTER_SINGLE_PAGE_END: {
      return action.payload.profileCredits;
    }

    default: 
      return state;
  }
}