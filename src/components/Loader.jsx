import { Load, Spinner } from "../styles/Loader";
import loader from '../assets/loader.png'

export default function Loader() {
  return (
    <Load>
      <Spinner />
      <img src={loader} width= '180px' alt='loader'/>
    </Load>
  );
} 