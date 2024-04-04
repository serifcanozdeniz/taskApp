import * as yup from 'yup';

const taskSchema = yup.object().shape({
    title: yup.string().required('Zorunlu Alan'),
    description: yup.string().required('Zorunlu Alan'),
    startDate: yup.string().required('Zorunlu Alan'),
    endDate: yup.string().required('Zorunlu Alan'),

});
export { taskSchema };