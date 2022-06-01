import { logger } from "../../library";
import { fetchGetNotes } from "../adapters";
import { noteListState } from "../entities";

export async function retrieveNotes(customerId: string) {
  const { error, notes, httpStatus } = await fetchGetNotes(customerId);
  if (httpStatus === 404) {
    noteListState.serRemoveList();
  }
  if (error) {
    logger({
      container: "notes",
      path: { section: "usecases", file: "retrieveNotes" },
      type: "error",
      logMessage: `Error when retrieving noted for customerId: ${customerId} is ${error}`,
    });
    return;
  }
  noteListState.setNotes(notes);
}
