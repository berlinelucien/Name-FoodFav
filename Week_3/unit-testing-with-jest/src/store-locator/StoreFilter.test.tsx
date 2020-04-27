import StoreFilter from "./StoreFilter";

var storeFilter: StoreFilter;

beforeEach(() => {
  storeFilter = new StoreFilter();
});

test("all stores should return", () => {
  // 1. Write a unit test to call the stores() function
  const allStores = storeFilter.stores();

  // 2. Assert (or expect) the return value to have a certain array length
  expect(allStores).toHaveLength(9);
});

test("stores for a specific city e.g. Seattle", () => {
  // 1. Write a unit test to call the storesForCity() function with a city
  // 2. Assert (or expect) the return value to have a certain array length
});

test("stores for a list of cities e.g. ['Seattle', 'Bellevue']", () => {
  // 1. Write a unit test to call the storesForCities() function with an array of cities
  // 2. Assert (or expect) the return value to have a certain array length
});

test("store by name", () => {
  // 1. Write a unit test to call the store() function with a store name
  // 2. Assert (or expect) the return value to have a certain array length
});
