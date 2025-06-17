import * as graphql from "@nestjs/graphql";
import { PdfSubmissionResolverBase } from "./base/pdfSubmission.resolver.base";
import { PdfSubmission } from "./base/PdfSubmission";
import { PdfSubmissionService } from "./pdfSubmission.service";

@graphql.Resolver(() => PdfSubmission)
export class PdfSubmissionResolver extends PdfSubmissionResolverBase {
  constructor(protected readonly service: PdfSubmissionService) {
    super(service);
  }
}
