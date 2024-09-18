export const state = () => ({
  searchOpen: false,
  fromPage: "/",
  item: {}
});

export const mutations = {
  toggleSearch(state) {
    state.searchOpen = !state.searchOpen;
  },

  openSearch(state) {
    state.searchOpen = true;
  },

  closeSearch(state) {
    state.searchOpen = false;
  },

  setFromPage(state, page) {
    state.fromPage = page;
  },
  setItem(state, item) {
    state.item = item;
  }
};
