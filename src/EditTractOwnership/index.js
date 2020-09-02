import React, { Fragment, useState } from 'react';
import {
  Col,
  Row,
  Container,
  Button,
  Form as RForm,
  Spinner,
} from 'react-bootstrap';
import { Formik, Form, FieldArray, Field } from 'formik';
import Icon from '../Icon';
import { v4 as uuidv4 } from 'uuid';
import formSchema from './formSchema';
import { getFormClassName, FormErrorMessage } from './formUtils';

const renderAddButton = (onClickHandler) => (
  <Button onClick={onClickHandler}>Add Mineral Interest</Button>
);
const renderNPRIForm = (
  { values, errors, touched },
  mineralIdx,
  removeNPRI
) => {
  const items = values.minerals[mineralIdx].npris;
  return items && items.length > 0
    ? items.map((npri, npriIdx) => (
        <Container key={`minerals-${mineralIdx}-npri-${npriIdx}-container`}>
          <RForm.Row>
            <Col>
              <Field
                name={`minerals[${mineralIdx}].npris[${npriIdx}].owner`}
                className={getFormClassName(
                  errors,
                  touched,
                  `minerals[${mineralIdx}].npris[${npriIdx}].owner`
                )}
                placeholder="Owner name..."
                data-testid={`npri-${npri.id}.owner`}
              ></Field>
              <FormErrorMessage
                fieldName={`minerals[${mineralIdx}].npris[${npriIdx}].owner`}
              />
              <Field
                type="hidden"
                name={`minerals[${mineralIdx}].npris[${npriIdx}].id`}
                data-testid={`npri-${npri.id}`}
              />
            </Col>
            <Col></Col>
            <Col>
              <Field
                name={`minerals[${mineralIdx}].npris[${npriIdx}].interest`}
                className={getFormClassName(
                  errors,
                  touched,
                  `minerals[${mineralIdx}].npris[${npriIdx}].interest`
                )}
                placeholder="Interest..."
                data-testid={`npri-${npri.id}.interest`}
              ></Field>
              <FormErrorMessage
                fieldName={`minerals[${mineralIdx}].npris[${npriIdx}].interest`}
              />
            </Col>
            <Col></Col>
            <Col>
              <span
                onClick={() => removeNPRI(npriIdx)}
                data-testid={`npri-${npri.id}.remove`}
              >
                <Icon icon={'remove'} />
              </span>
            </Col>
          </RForm.Row>
        </Container>
      ))
    : null;
};
const renderForm = ({ values, errors, touched }, removeMineral, onChange) => {
  onChange(values.minerals);
  const items = values.minerals;
  return items && items.length > 0
    ? items.map((mineral, idx) => (
        <Container
          key={`mineral-${idx}-container`}
          style={{
            margin: '1rem 0',
            padding: '1rem',
            boxShadow: '0 0 10px  rgba(0,0,0,0.6)',
            border: 'solid 1px #555',
          }}
        >
          <RForm.Row key={`mineral-${idx}-form`}>
            <Col>
              <Field
                name={`minerals[${idx}].owner`}
                className={getFormClassName(
                  errors,
                  touched,
                  `minerals[${idx}].owner`
                )}
                placeholder="Owner..."
                data-testid={`mineralInterest-${mineral.id}.owner`}
              ></Field>
              <FormErrorMessage fieldName={`minerals[${idx}].owner`} />

              <Field
                type="hidden"
                name={`minerals[${idx}].id`}
                data-testid={`mineralInterest-${mineral.id}`}
              />
            </Col>
            <Col>
              <Field
                name={`minerals[${idx}].interest`}
                className={getFormClassName(
                  errors,
                  touched,
                  `minerals[${idx}].interest`
                )}
                placeholder="Interest..."
                data-testid={`mineralInterest-${mineral.id}.interest`}
              ></Field>
              <FormErrorMessage fieldName={`minerals[${idx}].interest`} />
            </Col>
            <Col></Col>
            <Col>
              <Field
                name={`minerals[${idx}].lease`}
                className={getFormClassName(
                  errors,
                  touched,
                  `minerals[${idx}].lease`
                )}
                placeholder="Lease name..."
                data-testid={`mineralInterest-${mineral.id}.lease`}
              ></Field>
              <FormErrorMessage fieldName={`minerals[${idx}].lease`} />
            </Col>
            <Col>
              <span
                onClick={() => removeMineral(idx)}
                data-testid={`mineralInterest-${mineral.id}.remove`}
              >
                <Icon icon={'remove'} />
              </span>
            </Col>
          </RForm.Row>
          <RForm.Row key={`mineral-${idx}-npris`}>
            <Col>
              <FieldArray name={`minerals[${idx}].npris`}>
                {(arrHelper) => {
                  return (
                    <Fragment>
                      {renderNPRIForm(
                        { values, errors, touched },
                        idx,
                        (npriIndex) => {
                          arrHelper.remove(npriIndex);
                        }
                      )}
                      {
                        <Button
                          onClick={() =>
                            arrHelper.push({
                              id: uuidv4(),
                              owner: '',
                              lease: '',
                            })
                          }
                        >
                          Add NPRI
                        </Button>
                      }
                    </Fragment>
                  );
                }}
              </FieldArray>
            </Col>
          </RForm.Row>
        </Container>
      ))
    : null;
};

export default ({ value = [], onChange = () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <div>
      <Spinner animation="grow" />
      Sending data... hold on!
    </div>
  ) : (
    <Fragment>
      <Row>
        <Col>Owner</Col>
        <Col>Mineral Interest</Col>
        <Col>NPRI</Col>
        <Col>Lease</Col>
      </Row>
      <Row>
        <Formik
          validationSchema={formSchema}
          initialValues={{ minerals: value }}
          onSubmit={() => {
            console.log('sending form....');
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 3000);
          }}
        >
          {({ values, errors, touched }) => {
            const isFormValid = Object.keys(errors).length === 0;
            return (
              <Form>
                <Row>
                  <FieldArray name="minerals">
                    {(arrayHelpers) => {
                      return (
                        <Fragment>
                          <Row>
                            {renderForm(
                              { values, errors, touched },
                              (minIndex) => {
                                arrayHelpers.remove(minIndex);
                              },
                              () => {
                                console.info(
                                  'Every time you do any of the above actions, the onChange prop should be fired'
                                );
                                onChange(values.minerals);
                              }
                            )}
                          </Row>
                          <Row style={{ marginTop: '2rem' }}>
                            {renderAddButton(() =>
                              arrayHelpers.push({ id: uuidv4() })
                            )}
                          </Row>
                        </Fragment>
                      );
                    }}
                  </FieldArray>
                </Row>
                <Row style={{ marginTop: '2rem' }}>
                  <Button type="submit" disabled={!isFormValid}>
                    SEND
                  </Button>
                </Row>
              </Form>
            );
          }}
        </Formik>
      </Row>
    </Fragment>
  );
};
