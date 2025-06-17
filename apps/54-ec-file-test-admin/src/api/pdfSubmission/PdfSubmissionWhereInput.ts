import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PdfSubmissionWhereInput = {
  id?: StringFilter;
  pdf1?: StringFilter;
  pdf2?: StringNullableFilter;
};
