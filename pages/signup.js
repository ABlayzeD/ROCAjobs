import React, { useState } from 'react';
import { db , auth} from '../services/firebase';
import store from '../services/redux/store';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import { useRouter } from 'next/router';
import { signInEmail, signInPhotoUrl, signInUid, signInUsername } from '../services/redux/actions/authActions';

function Signup() {
  const router=useRouter();
  const [checked,setChecked] = useState(false);
  function onChange(e) {
    setChecked(!checked);
  }
  const openNotification = (error) => {
    notification.open({
      message: 'Error:',
      description: error,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  auth.onAuthStateChanged(function(user) {
    if (user!=undefined) {
      // User is signed in.
          store.dispatch(signInEmail(user.email));
          store.dispatch(signInPhotoUrl(user.photourl));
          store.dispatch(signInUid(user.uid));
          store.dispatch(signInUsername(user.displayName));
      router.push("/home");
      var applicantsRef = db.ref("/Associations/Companies/JobOpenings/Applicants");
      console.log(user.displayName);
      applicantsRef.child(user.uid).set({
        Applications: "",
        FormerEmployee: checked,
        Resume: ""
      });
    }
  });
  async function onFinish (values){
    console.log('Finish:', values);
    await auth.createUserWithEmailAndPassword(values.email, values.password).catch(function(error) {
      if(error.code!=null){
        openNotification(error.message);
        console.log(error.code);
        console.log(error.message);
      }
    });
    await db.ref("/Associations/Companies/JobOpenings/Applicants/"
    .concat(auth.currentUser.uid)).update({
      Name: values.name
    })

  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      style={{
        width: '50%',
        marginLeft: '25%',
        marginTop: '5%'
      }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your full name!',
          },
        ]}
      >
        <Input
          placeholder="Full name"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Create Account
        </Button>
      </Form.Item>
      <Form.Item>
        Former Employee?
        <Checkbox onChangeOne={onChange}/>
      </Form.Item>
    </Form>
    
  );
};

export default Signup;