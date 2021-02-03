import * as React from "react";

import { NewObjectProps } from "./NewObject.d";
import PrimaryContainer from "../../layout/PrimaryContainer/PrimaryContainer";
import PrimaryForm from "../../ui/PrimaryForm/PrimaryForm";

const NewObject: React.FC<NewObjectProps> = ({ objectName }) => {
  return (
    <PrimaryContainer title={`New ${objectName}`}>
      <PrimaryForm
        objectName={objectName}
        onSubmit={values => console.info("submit")}
      />
    </PrimaryContainer>
  );
};

export default NewObject;
