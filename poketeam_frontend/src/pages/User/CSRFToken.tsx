import CSRFToken from "../../services/CSRFToken"


const GetCSRFToken = () => {

    CSRFToken();
  return (
    <p>
        You got your token!
    </p>
  )
}

export default GetCSRFToken