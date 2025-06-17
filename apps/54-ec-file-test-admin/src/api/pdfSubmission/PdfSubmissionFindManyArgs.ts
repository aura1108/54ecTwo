import { PdfSubmissionWhereInput } from "./PdfSubmissionWhereInput";
import { PdfSubmissionOrderByInput } from "./PdfSubmissionOrderByInput";

export type PdfSubmissionFindManyArgs = {
  where?: PdfSubmissionWhereInput;
  orderBy?: Array<PdfSubmissionOrderByInput>;
  skip?: number;
  take?: number;
};
