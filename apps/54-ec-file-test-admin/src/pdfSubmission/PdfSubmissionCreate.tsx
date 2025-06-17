import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PdfSubmissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="pdf1" source="pdf1" />
        <TextInput label="pdf2" source="pdf2" />
      </SimpleForm>
    </Create>
  );
};
