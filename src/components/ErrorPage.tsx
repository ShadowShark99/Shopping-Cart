import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <h1>Looks like you walked out of the Store!</h1>
      <p>Let's go back <Link className="home-button" to="/">Home</Link></p>

    </div>
  )
}

export default ErrorPage