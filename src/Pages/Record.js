import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import Loading from "../images/loading.gif";
import Recording from "../images/recording.gif";
import VideoOff from "../images/videooff.png";

const Record = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });

  return (
    <div className="">
      <div className="bg-blue-600 w-[40%] relative left-[30%] top-[10vh] text-center py-5">
        <div className="text-green-300 text-3xl mb-10">Record Your Summary</div>
        {status === "recording" ? (
          <button
            className="bg-red-400 px-6 py-3 rounded-2xl font-bold"
            onClick={stopRecording}
          >
            Stop Recording
          </button>
        ) : null}
        {status === "idle" ? (
          <button
            className="bg-red-400 px-6 py-3 rounded-2xl font-bold"
            onClick={startRecording}
          >
            Start Recording
          </button>
        ) : null}
        {status === "stopped" ? (
          <button
            className="bg-red-400 px-6 py-3 rounded-2xl font-bold"
            onClick={startRecording}
          >
            Reshoot Your Video
          </button>
        ) : null}
        {status === "acquiring_media" ? (
          <img
            className="h-20 relative left-[45%] my-48 rounded-2xl"
            src={Loading}
            alt="loading"
          ></img>
        ) : null}
        {status === "recording" ? (
          <div className="mt-5 font-semibold text-2xl">
            Video Recording Started
          </div>
        ) : null}
        {status === "recording" ? (
          <img
            className="h-72 relative left-[20%] my-10 rounded-2xl"
            src={Recording}
            alt="loading"
          ></img>
        ) : null}
        {status === "idle" ? (
          <img
            className="h-20 relative left-[45%] mt-20 mb-10 rounded-2xl"
            src={VideoOff}
            alt="loading"
          ></img>
        ) : null}
        {status === "idle" ? (
          <div className="text-3xl font-bold text-yellow-300 pb-20">
            You don't have any recorded video
          </div>
        ) : null}
        {status === "stopped" ? (
          <video
            className="h-72 relative left-[20%] my-10 rounded-2xl"
            src={mediaBlobUrl}
            controls
            autoPlay
          />
        ) : null}
        {status === "stopped" ? (
          <button className="bg-green-400 text-xl font-bold px-6 py-3 rounded-2xl">
            Submit Summary
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Record;
