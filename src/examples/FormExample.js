import React from 'react';
import Button from 'coreui/lib/components/Button';
import 'coreui/lib/components/DateTimePickerInput';
import 'coreui/lib/components/DropdownListInput';
import Label from 'coreui/lib/components/Label';
import Form, { Field, Message } from 'coreui/lib/components/Form';
import yup from 'yup';

const colorEntities = [
  { id: null, name: 'Select a color...' },
  { id: 0, name: 'Red' },
  { id: 1, name: 'Yellow' },
  { id: 2, name: 'Blue' },
  { id: 3, name: 'Other' },
];

const personSchema = yup.object({
  name: yup.object({
    first: yup.string().default('').required('Please enter a first name'),
    last: yup.string().default('').required('Please enter a last name'),
  }),
  dateOfBirth: yup.date().max(new Date(), 'Are you a time traveler?'),
  colorId: yup.number().nullable().required('Please select a color'),
});

const FormExample = () => (
  <div className="example">
    <h3>Form</h3>
    <Form
      defaultValue={personSchema.default()}
      onSubmit={(v) => console.log(v)}
      schema={personSchema}
    >
      <div>
        <div className="form-group">
          <Label>First name</Label>
          <Field
            name="name.first"
            placeholder="First name"
            type="text"
          />
          <Message for="name.first" />
        </div>
        <div className="form-group">
          <Label>Last name</Label>
          <Field
            name="name.last"
            placeholder="Last name"
            type="text"
          />
          <Message for="name.last" />
        </div>
      </div>
      <div className="form-group">
        <Label>Date of Birth</Label>
        <Field name="dateOfBirth" />
        <Message for="dateOfBirth" />
      </div>
      <div className="form-group">
        <Label>Favorite Color</Label>
        <Field
          data={colorEntities}
          mapValue={{ colorId: (c) => c.id }}
          name="colorId"
          textField="name"
          type="dropdownlist"
          valueField="id"
        />
        <Message for="colorId" />
      </div>
      <Button actionType="primary" type="submit">Submit</Button>
    </Form>
  </div>
);

export default FormExample;
