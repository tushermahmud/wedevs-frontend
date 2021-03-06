import { Title } from '@material-ui/icons'
import React, { Fragment, useState, useEffect } from 'react'


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../../redux/actions/productActions'
import { NEW_PRODUCT_RESET } from '../../../redux/constant/productConstants'

const NewProduct = ({ history }) => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
      });

      var file,formData;
      useEffect(() => {
      }, [])
    const alert = useAlert();
    const {success,error} = useSelector(state => state.newProductReducer)
    const dispatch = useDispatch();
    const { title, description,price,image } = values;
    const handleChange = (name) => (event) => {
        file = name === 'image' ? event.target.files[0] : event.target.value;
        const value = name === 'image' ? event.target.files[0] : event.target.value;
        setValues({ ...values, [name]: value });
      };
      console.log(error)

    useEffect(() => {
        if (error) {
            error.map(err=>{
                console.log(err)
                return alert.error(Object.values(err));

            })
            dispatch(clearErrors())
        }

        if (success) {
            history.push('/products');
            alert.success('Product created successfully');
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, success,error, history])

    const submitHandler = (e) => {
        e.preventDefault();
   
        console.log(image);
        dispatch(newProduct({title,description,price,image}))
        

        // dispatch(newProduct(formData))
    }

    // const onChange = e => {

    //     const file = e.target.files[0]    }


    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} enctype="multipart/form-data">
                            <h4>Post Photo</h4>
                            <div className='form-group'>
                                <label className='btn btn-secondary'>
                                <input
                                    onChange={handleChange('image')}
                                    type='file'
                                    name='image'
                                    accept='image/*'
                                />
                                </label>
                            </div>

                            <div className='form-group'>
                                <label className='text-muted'>Title</label>
                                <input
                                onChange={handleChange('title')}
                                type='text'
                                className='form-control'
                                value={title}
                                />
                            </div>

                            <div className='form-group'>
                                <label className='text-muted'>Description</label>
                                <textarea
                                onChange={handleChange('description')}
                                className='form-control'
                                value={description}
                                />
                            </div>

                        <div className='form-group'>
                            <label className='text-muted'>Price</label>
                            <input
                            onChange={handleChange('price')}
                            type='number'
                            className='form-control'
                            value={price}
                            />
      </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    // disabled={loading ? true : false}
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default NewProduct
