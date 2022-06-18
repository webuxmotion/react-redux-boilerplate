export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = '' }) => {
  return state.countries.list.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });
};
