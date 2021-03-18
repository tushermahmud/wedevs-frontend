import React, { Fragment, useState, useEffect } from 'react'


import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../../redux/actions/productActions'
import { NEW_PRODUCT_RESET } from '../../../redux/constant/productConstants'

const NewProduct = ({ history }) => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

   

    const alert = useAlert();
    const dispatch = useDispatch();

    // const { loading, error, success } = useSelector(state => state.newProduct);
    // console.log(loading)
    // useEffect(() => {

    //     // if (error) {
    //     //     alert.error(error);
    //     //     dispatch(clearErrors())
    //     // }

    //     // if (success) {
    //     //     history.push('/admin/products');
    //     //     alert.success('Product created successfully');
    //     //     dispatch({ type: NEW_PRODUCT_RESET })
    //     // }

    // }, [dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('title', title);
        formData.set('price', price);
        formData.set('description', description);

        formData.append('image', image)

        dispatch(newProduct(formData))
    }

    const onChange = e => {

        const file = e.target.files[0]    }


    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">New Product</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="text"
                                        id="price_field"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="8" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>


                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='image'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                    </div>


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
