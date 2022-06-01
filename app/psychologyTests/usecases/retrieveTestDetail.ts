import { fetchTestById } from "../adapters";
import { testDetailState } from "../entities";
export async function retrieveTestDetail(testId: string) {
  const { error, tests } = await fetchTestById(testId);
  if (error) {
    return error;
  }
  testDetailState.setTest(tests);
}
