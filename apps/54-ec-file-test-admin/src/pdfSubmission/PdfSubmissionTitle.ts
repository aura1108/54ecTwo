import { PdfSubmission as TPdfSubmission } from "../api/pdfSubmission/PdfSubmission";

export const PDFSUBMISSION_TITLE_FIELD = "pdf1";

export const PdfSubmissionTitle = (record: TPdfSubmission): string => {
  return record.pdf1?.toString() || String(record.id);
};
