import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

// Function to create a new user authenticated using Firebase auth and add the
// New user to the Firebase database(fireStore)
const createNewUser = async (name, email, password) => {
    if(name==='' || email ==='' || password === ''){
        return{
            status: false,
            output: 'One or more fields are empty.'
        };
    }
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        await updateProfile(userCredential.user, {displayName: name});
        const docRef = collection(db, "users")
        await addDoc(docRef,{
            email: email,
            orderHistory : []
        })
        return { status: true, output: `User with email '${email}' created`};
    } catch (error) {
        if(error.message.includes('email-already-in-use'))
            return{ status: false, output: `User with email '${email}' already exist`};
        else if(error.message.includes('invalid-email'))
            return {status: false, output: `'${email}' is invalid! Please provide a valid email`};
        else if(error.message.includes('weak-password'))
            return {status: false, output: 'PassWord should be at least 8 characters!'};
        else
            return{ status: false, output: `Somethig went wrong while creating User with email '${email}'`}        
    }    
}

// function to authenticate the user and log them in
const login = async (email, password) => {
    if( email ==='' || password === ''){
        return{
            status: false,
            output: 'One or more fields are empty.'
        };
    }
    try {
        const authenticatedUser = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        if (error.message.includes('invalid-login-credentials') || error.message.includes('invalid-credential'))
            return { status: false, output: 'Incorrect email or password'};
        else if (error.message.output('invalid-email'))
            return { status: false, output: `'${email}' is invalid! please provide a valid email`};
        else
            return { status: false, output: 'Something went wrong while in! please try again later'};
    }
}

// Function to Logout the authenticated user
const Logout = async ()=>{
    await auth.signOut();
}

export { createNewUser, login, Logout };

// Function to get the current authenticated user
const getCurrentUser = () => {
    return auth.currentUser;
}
export { getCurrentUser };