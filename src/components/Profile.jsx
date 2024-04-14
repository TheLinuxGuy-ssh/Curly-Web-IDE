import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import Button from "./Button";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();



  if (isLoading) {
    return <div>Please Wait...</div>;
  }

  {isAuthenticated ? (
    toast.success('Log In Successfull', {
        toastId:"success2",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    })
  ) : (

    " "
  )}

  return (
    <div className="flex justify-center align-center w-[10rem]">
    {isAuthenticated ? (
      <>
        <Button linkTo="editor">
            Editor
        </Button>
      </>
    ) : (
   
           <LoginButton>Try it!</LoginButton>
    )}
  </div>
  );
};

export default Profile;