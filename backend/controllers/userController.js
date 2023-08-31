
// @desc Register new USer
// @desc POST /api/users
//@access Public

const registerUser = (req, res)=>{
    res.json({message: 'Register User'})

}

// @desc Register new USer
// @desc POST /api/users/login
//@access Public

const loginUser = (req, res)=>{
    res.json({message: 'Login User'})

}

// @desc Get User data
// @desc GET /api/users/me
//@access Public

const getMe = (req, res)=>{
    res.json({message: 'User Data disply'})

}





module.exports = {
    registerUser,
    loginUser,
    getMe
}