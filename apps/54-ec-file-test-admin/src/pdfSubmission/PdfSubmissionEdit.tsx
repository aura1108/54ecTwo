import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PdfSubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="pdf1" source="pdf1" />
        <TextInput label="pdf2" source="pdf2" />
        <TextInput label="userId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
