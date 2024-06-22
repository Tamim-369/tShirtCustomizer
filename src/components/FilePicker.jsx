import React from "react";
import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import state from "../store";

const FilePicker = ({ file, setFile, readFile }) => {
  const snap = useSnapshot(state);

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => e.target.files[0] && setFile(e.target.files[0])}
        />
        <label
          htmlFor="file-upload"
          className="p-2 border border-primary text-sm bg-primary/90 font-semibold rounded-md w-fit text-gray-100 cursor-pointer"
        >
          Upload File
        </label>
        <p className="mt-2 text-gray-200 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type={"outline"}
          title={"Logo"}
          handleClick={() => {
            readFile("logo");
          }}
          customStyles={"text-xs"}
        />
        <CustomButton
          type={"filled"}
          title={"Full"}
          handleClick={() => readFile("full")}
          customStyles={"text-xs"}
        />
      </div>
    </div>
  );
};

export default FilePicker;
