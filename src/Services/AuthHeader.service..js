






















































/* This function/service tries to retrieve data(i.e user)
 from local storation header els retun empty object*/

 const AuthHeader=()=>{
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer' + user.accessToken };
    } else {
        return {};
    }
}

export default AuthHeader;