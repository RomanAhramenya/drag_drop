const CREATE_MAIN_PAGE_CARD = "CREATE_MAIN_PAGE_CARD";
const CREATE_CARDS_AFTER = "CREATE_CARDS_AFTER";
const CREATE_CARD = "CREATE_CARD";
const DRAG_AND_DROP_DELETE = "DRAG_AND_DROP_DELETE";
const SORT = "SORT";
const EMPTY_CARD_DROP = "EMPTY_CARD_DROP";
let initiallState = {
  ListCard: {},
};

export const dataCardreducer = (state = initiallState, action) => {
  switch (action.type) {
    case CREATE_MAIN_PAGE_CARD:
      return {
        ...state,
        ListCard: {
          ...state.ListCard,
          [action.text]: {},
        },
      };
    case CREATE_CARDS_AFTER:
      return {
        ...state,
        ListCard: {
          ...state.ListCard,
          [action.key]: {
            ...state.ListCard[action.key],
            [action.item]: [],
          },
        },
      };
    case CREATE_CARD:
      let card = state.ListCard[action.key][action.item];
      const copyCard = [...card];
      copyCard.splice(action.index, 0, action.text);
      return {
        ...state,
        ListCard: {
          ...state.ListCard,
          [action.key]: {
            ...state.ListCard[action.key],
            [action.item]: copyCard,
          },
        },
      };
    case DRAG_AND_DROP_DELETE:
      return {
        ...state,
        ListCard: {
          ...state.ListCard,
          [action.key]: {
            ...state.ListCard[action.key],
            [action.item]: state.ListCard[action.key][action.item].filter(
              (el) => el !== action.text
            ),
          },
        },
      };
    case SORT:
      let item = state.ListCard[action.key][action.item];

      const copy = [...item];
      copy.splice(action.indexStart, 1);
      copy.splice(action.index, 0, action.text);
      return {
        ...state,
        ListCard: {
          ...state.ListCard,
          [action.key]: {
            ...state.ListCard[action.key],
            [action.item]: copy,
          },
        },
      };
      // case EMPTY_CARD_DROP :
      //   if (state.ListCard[action.key][action.item].length === 0) {
      //     return : {

      //     }
      //   }
    default:
      return state;
  }
};

export const createMainPageCardAC = (text) => ({
  type: CREATE_MAIN_PAGE_CARD,
  text,
});
export const createCardAfterAC = (key, item) => ({
  type: CREATE_CARDS_AFTER,
  key,
  item,
});
export const createCardAC = (key, item, text, index = 0) => ({
  type: CREATE_CARD,
  key,
  item,
  text,
  index,
});
export const drogAndDropDeletedAC = (key, item, text) => ({
  type: DRAG_AND_DROP_DELETE,
  key,
  item,
  text,
});
export const SortAC = (key, item, index, text, indexStart) => ({
  type: SORT,
  key,
  item,
  index,
  text,
  indexStart,
});
