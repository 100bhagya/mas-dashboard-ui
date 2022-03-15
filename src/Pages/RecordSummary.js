import React from "react";
import RecorderControls from "../Components/Recorder/components/recorder-controls";
import RecordingsList from "../Components/Recorder/components/recordings-list";
import useRecorder from "../Components/Recorder/hooks/useRecorder";
import "../index.css";

const RecordSummary = () => {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;
  return (
    <section className="voice-recorder">
      <h1 className="title">Record Your Summary</h1>
      <div className="recorder-container">
        <RecorderControls recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
      </div>
    </section>
  );
};

export default RecordSummary;
