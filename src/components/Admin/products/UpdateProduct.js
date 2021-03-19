import { Title } from '@material-ui/icons'
import React, { Fragment, useState, useEffect } from 'react'
import {getProducts} from "../../../redux/actions/productActions"


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateProduct, clearErrors } from '../../../redux/actions/productActions'
import { NEW_PRODUCT_RESET } from '../../../redux/constant/productConstants'

const UpdateProduct = ({ history,match }) => {

    const [values, setValues] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
      });

      var file,formData;
      
    const alert = useAlert();
    const {products} = useSelector(state => state.productsReducer)
    const dispatch = useDispatch();
    const { title, description,price,image } = values;
    const handleChange = (name) => (event) => {
        file = name === 'image' ? event.target.files[0] : event.target.value;
        const value = name === 'image' ? event.target.files[0] : event.target.value;
        setValues({ ...values, [name]: value });
      };
      useEffect(() => {
        const product=products.find(pd=>pd.id===parseInt(match.params.id));
        setValues({title:product.title,description:product.description,price:product.price})
        dispatch(getProducts())

    }, [dispatch])
    
    const submitHandler = (e) => {
        e.preventDefault();
        const id=match.params.id;
        console.log(image);
        dispatch(updateProduct({title,description,price,image,id }))
        

    }


    

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
                                    UPDATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default UpdateProduct
