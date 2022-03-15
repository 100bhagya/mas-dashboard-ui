import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import useRecordingsList from "../../hooks/use-recordings-list";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function RecordingsList({ audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);
  const navigate = useNavigate()

 const Submitrecording = () => {
  navigate("/summarywriting")

 }

  return (
    <div className="recordings-container justify-center">
      {recordings.length > 0 ? (
        <>
          <h1>Your recordings</h1>
          <div className="recordings-list">
            {recordings.map((record) => (
              <div className="record" key={record.key}>
                <audio controls src={record.audio} />
                <div className="delete-button-container">
                  <button
                    className="delete-button"
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={Submitrecording} className="px-6 py-3 mt-3 relative left-[20%] bg-blue-800 hover:bg-white hover:text-blue-800 rounded-2xl">Submit Recording</button>
        </>
      ) : (
        <div className="no-records">
          <FontAwesomeIcon icon={faExclamationCircle} size="2x" color="#f2ea02" />
          <span>You don't have any summary recordings</span>
        </div>
      )}
    </div>
  );
}
