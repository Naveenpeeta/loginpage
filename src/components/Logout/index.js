// Write your code here
const Logout = props => {
  const {logout} = props

  return (
    <button type="button" onClick={logout}>
      LogOut
    </button>
  )
}
export default Logout
