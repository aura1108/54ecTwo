import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PdfSubmissionService } from "./pdfSubmission.service";
import { PdfSubmissionControllerBase } from "./base/pdfSubmission.controller.base";

@swagger.ApiTags("pdfSubmissions")
@common.Controller("pdfSubmissions")
export class PdfSubmissionController extends PdfSubmissionControllerBase {
  constructor(protected readonly service: PdfSubmissionService) {
    super(service);
  }
}
