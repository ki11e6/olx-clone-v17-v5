import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const date = new Date();
  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection('products').add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString(),
          });
          history.push('/');
        });
      });
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="price"
              name="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <br />
          </form>

          {/* image preview */}
          <br />
          {image && (
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : ''}
            ></img>
          )}

          {/* upload image */}
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          {user ? (
            <button className="uploadBtn" onClick={handleSubmit}>
              upload and Submit
            </button>
          ) : (
            <button onClick={() => history.push('/login')}>
              click to Login
            </button>
          )}
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
