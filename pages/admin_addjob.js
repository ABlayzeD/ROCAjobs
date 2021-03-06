import React from 'react';
import Footer from '../components/layout/user/Footer';
import Container from '../components/layout/Container';
import AdminHeader from '../components/layout/admin/AdminHeader';
import AdminAddJobBody from '../components/layout/admin/AdminAddJobBody';
import { auth } from '../services/firebase';
import { db } from '../services/firebase';

class admin_addjob extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loading: true
  }
}
async componentDidMount(){
  let adminauth=await this.checkAuth();
  this.setState({loading: adminauth});
  console.log(adminauth);
  return adminauth;
}
async checkAuth(){
  if(auth.currentUser!=null){
    return db.ref("/Admins/".concat(auth.currentUser.uid)).once("value").then((snapshot)=>{
      if(snapshot.val().uid!=null) return false;
      else return true;
        
    })
  }
  else{
    return true;
  }
    
}

render(){
    
    return this.state.loading ? (
            <div>
                Loading...
            </div>
    ) : (
        <Container>
          <AdminHeader />
            <AdminAddJobBody />
          <Footer />
        </Container>
        );
      }
  }
export default admin_addjob;