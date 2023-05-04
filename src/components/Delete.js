import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePictures } from "../feature/pictures.slice";


const Delete = ({ id }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    axios.delete("http://localhost:5000/pictures/" + id).then(
      dispatch(deletePictures(id))
    );
    console.log('lidentifiant', id )
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
