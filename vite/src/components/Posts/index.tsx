import { Outlet, useParams } from 'react-router-dom';
import './style.css'

export const Posts = () => {
const { id } = useParams()

  return (
    <div>
      <h1>Posts {id}</h1>
      <Outlet/>
    </div>
  );
}
