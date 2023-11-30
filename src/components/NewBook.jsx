
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link,useNavigate } from 'react-router-dom';

const NewBook = ({ book, setBook }) => {
    const initialValues = {
        title: '',
        image: '',
        author: '',
        edition: '',
        pages: '',
      };
    
      const validationSchema = Yup.object().shape({
        title: Yup.string().required('Title is required'),
        image: Yup.string().required('Image URL is required'),
        author: Yup.string().required('Author is required'),
        edition: Yup.number().required('Edition is required'),
        pages: Yup.number().required('Pages is required'),
      });
      const navigate = useNavigate();

      const onSubmit = (values, { resetForm }) => {
        setBook([...book, { id: book.length + 1, ...values }]);
        resetForm();
        navigate('/Book-List');
      };
    
      const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
      });
    
      return (
        <div className='container-fluid bg-danger bg-opacity-75 rounded text-white'>
          <form onSubmit={formik.handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='title' className='form-label fw-bold'>
                Book Title :
              </label>
              <input
                type='text'
                className='form-control'
                id='title'
                autoComplete='off'
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Enter book Title'
              />
              {formik.touched.title && formik.errors.title ? (
                <span className='fw-bold text-danger'>{formik.errors.title}</span>
              ) : null}
            </div>
            <div className='mb-3'>
              <label htmlFor='image' className='form-label fw-bold'>
                Book Image_Url :
              </label>
              <input
                type='text'
                className='form-control'
                id='image'
                autoComplete='off'
                placeholder='Enter image url'
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.image && formik.errors.image ? (
                <span className='fw-bold text-danger'>{formik.errors.image}</span>
              ) : null}
            </div>
            <div className='mb-3'>
              <label htmlFor='author' className='form-label fw-bold'>
                Book Author Name :
              </label>
              <input
                type='text'
                className='form-control'
                id='author'
                autoComplete='off'
                placeholder='Enter author name'
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.author && formik.errors.author ? (
                <span className='fw-bold text-danger'>{formik.errors.author}</span>
              ) : null}
            </div>
            <div className='mb-3'>
              <label htmlFor='edition' className='form-label fw-bold'>
                Book Edition No :
              </label>
              <input
                type='number'
                className='form-control'
                id='edition'
                autoComplete='off'
                placeholder='Enter book edition'
                value={formik.values.edition}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.edition && formik.errors.edition ? (
                <span className='fw-bold text-danger'>{formik.errors.edition}</span>
              ) : null}
            </div>
            <div className='mb-3'>
              <label htmlFor='pages' className='form-label fw-bold'>
                Book Page Count :
              </label>
              <input
                type='number'
                className='form-control'
                id='pages'
                autoComplete='off'
                placeholder='Enter book pages count'
                value={formik.values.pages}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.pages && formik.errors.pages ? (
                <span className='fw-bold text-danger'>{formik.errors.pages}</span>
              ) : null}
            </div>
            <Link to='/Book-List'>
              <button className='btn btn-primary bg-success m-3 pe-4 ps-4'>Back</button>
            </Link>
    
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
  )
}

export default NewBook