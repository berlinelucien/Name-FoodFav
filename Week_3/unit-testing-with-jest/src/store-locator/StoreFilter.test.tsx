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

test("stores for a specific city", () => {
  // 1. Write a unit test to call the storesForCity() function
  // 2. Assert (or expect) the return value to have a certain array length
});

test("stores for a list of cities", () => {
  // 1. Write a unit test to call the storesForCities() function
  // 2. Assert (or expect) the return value to have a certain array length
});

test("store by name", () => {
  // 1. Write a unit test to call the store() function
  // 2. Assert (or expect) the return value to have a certain array length
});
