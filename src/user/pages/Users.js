import UsersList from '../components/UsersList'

const USERS = [
  {
    id: 'u1',
    name: 'Tzuyu',
    placeCount: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Chou_Tzuyu_at_the_Golden_Disc_Awards_2019.png',
  },
  {
    id: 'u2',
    name: 'Jennie',
    placeCount: 1,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Jennie_Kim_for_Marie_Claire_Korea_Magazine_on_October_9%2C_2018_%285%29.png',
  },
  {
    id: 'u3',
    name: 'Yoo Jung',
    placeCount: 2,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/20201124_%EA%B9%80%EC%9C%A0%EC%A0%95_4.jpg',
  },
]

const Users = (props) => {

  return (
    <>
      <UsersList items={USERS}/>
    </>
  )
}

export default Users

