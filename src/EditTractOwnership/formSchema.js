import { string, number, object } from 'yup';
import * as yup from 'yup';

export default yup.object().shape({
  minerals: yup
    .array()
    .of(
      object().shape({
        id: string(),
        owner: string().required().min(1).max(20),
        interest: number().required().positive().max(100),
        lease: string().required().min(1).max(20),
        npris: yup.array().of(
          object().shape({
            id: string(),
            owner: string().required().min(1).max(20),
            interest: number().required().positive().max(100),
          })
        ),
      })
    )
    .required()
    .min(1),
});
