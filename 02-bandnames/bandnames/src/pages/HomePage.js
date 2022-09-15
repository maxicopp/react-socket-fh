import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

function HomePage() {
  // const [bands, setBands] = useState([]);

  const { online } = useContext(SocketContext);

  // useEffect(() => {
  //   socket.on('current-bands', (bands) => {
  //     setBands(bands);
  //   });
  // }, [socket]);

  // const vote = (id) => socket.emit('vote-band', id);

  // const deleteBand = (id) => socket.emit('delete-band', id);

  // const changeBandName = (id, name) => socket.emit('change-band-name', {
  //   id,
  //   name
  // });

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status:
          {
            online
              ?
              <span className="text-success">Online</span>
              : <span className="text-danger">Offline</span>
          }
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          {/* <BandList
            data={bands}
            vote={vote}
            deleteBand={deleteBand}
            changeBandName={changeBandName}
          /> */}
        </div>
        <div className="col-4">
          {/* <BandAdd /> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
