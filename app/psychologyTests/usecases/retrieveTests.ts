import { fetchTests } from "../adapters";
import { testListState } from "../entities";

export async function retrieveTests() {
  const { error, tests } = await fetchTests();
  if (error) {
    // TODO: handle error
  }
  testListState.setTests(tests);
}
