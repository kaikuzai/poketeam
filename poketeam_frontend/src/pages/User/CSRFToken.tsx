import useCSRFToken from '../../hooks/User/useCSRFToken'

const GetCSRFToken = () => {

    useCSRFToken();
  return (
    <p>
        You got your token!
    </p>
  )
}

export default GetCSRFToken