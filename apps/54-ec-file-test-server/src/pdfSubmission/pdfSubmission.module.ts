import { Module } from "@nestjs/common";
import { PdfSubmissionModuleBase } from "./base/pdfSubmission.module.base";
import { PdfSubmissionService } from "./pdfSubmission.service";
import { PdfSubmissionController } from "./pdfSubmission.controller";
import { PdfSubmissionResolver } from "./pdfSubmission.resolver";

@Module({
  imports: [PdfSubmissionModuleBase],
  controllers: [PdfSubmissionController],
  providers: [PdfSubmissionService, PdfSubmissionResolver],
  exports: [PdfSubmissionService],
})
export class PdfSubmissionModule {}
