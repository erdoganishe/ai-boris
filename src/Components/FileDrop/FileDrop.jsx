import React, { useState } from 'react';
import './FileDrop.css'; // Import your CSS file for styling (optional)

const FileDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDragging(false);

    const droppedFiles = [...e.dataTransfer.files];
    setFiles(droppedFiles);

    // You can handle the dropped files here (e.g., upload to server)
    console.log('Dropped files:', droppedFiles);
  };

  return (
    <div
      className={`file-drop-area ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-center">
        <div>
        <h3>Drag & Drop Files Here</h3>

        <button id = "submit-button-file" onClick={()=>{
            if (files[0]){
                let val = files[0]
                let extension = String(files[0].name).split(".")[String(files[0].name).split(".").length - 1]

                if (extension == "boris"){
                    console.log(val.name)
                }
                else{
                    alert("Put boris")
                }

            }else{
                alert("Put file")
            }

        }}>Submit</button>
      </div>
      {files.length > 0 && (
        <div className="file-list">
          <h4>Files Dropped:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
</div>
<div>
       <h3 color='rgb(208, 189, 189)'>Or just put your secret key</h3>
       <input className='key-input' placeholder='Your phrase...' type = 'text'></input>
       <button id = "submit-button-phrase" onClick={()=>{
            let val = document.getElementsByClassName("key-input")[0].value;
            console.log(val)
        }}>Submit</button>
    </div></div>
  );
};

export default FileDrop;
