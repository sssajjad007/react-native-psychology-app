import { toString } from "../../../library";
import { IPsychologyTest, tQuestionFields } from "../../types";

export function parseTest(payload: Record<string, unknown>): IPsychologyTest {
  // TODO: refactor 
  const id = toString(payload?.id);
  const title = Object(payload?.title);
  const faTitle = toString(title?.fa);
  const enTitle = toString(title?.en);
  const description = toString(payload?.description);
  const fields = Object(payload?.fields);
  const fieldKeys = Object.keys(fields);
  const minutesToFill = Number(payload?.minutesToFill);
  const parsedFields: tQuestionFields = {};
  for (let index = 0; index < fieldKeys.length; index++) {
    const key = fieldKeys[index];
    const field = fields[key];
    const question = toString(field?.question);
    const choices = Array.isArray(field?.choices) ? field?.choices : [];
    const parsedChoices = [];
    for (let jindex = 0; jindex < choices.length; jindex++) {
      const choice = choices[jindex];
      const label = toString(choice?.label);
      const value = Number(choice?.value);
      parsedChoices.push({ label, value });
    }
    parsedFields[key] = { question, choices: parsedChoices };
  }
  return {
    id,
    title: {
      fa: faTitle,
      en: enTitle,
    },
    description,
    minutesToFill,
    fields: parsedFields,
    shortName: toString(payload?.shortName),
  };
}
