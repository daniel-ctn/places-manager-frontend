import UserItem from './UserItem'
import './UsersList.css'
import Card from '../../shared/components/UIElement/Card'

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No user found.</h2>
        </Card>
      </div>
    )
  }

  return (
    <ul className="users-list">
      {items.map(user => {
        return <UserItem key={user.id} {...user}/>
      })}
    </ul>
  )
}

export default UsersList
