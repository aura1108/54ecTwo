import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PdfSubmissionServiceBase } from "./base/pdfSubmission.service.base";

@Injectable()
export class PdfSubmissionService extends PdfSubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
