import { useParams } from "react-router-dom";
import { hotels } from "../utils/hotelsData";

const NextPage = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <div className="relative top-[200px]">
        <div>{id}</div>
        <div>
          <ul>
            {hotels.map((data, id) => (
              <li key={id}>
                <div>{data.id}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextPage;
