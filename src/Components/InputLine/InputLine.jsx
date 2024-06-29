import React from 'react'
import './InputLine.css'
import { useState, useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { AudioRecorder } from 'react-audio-voice-recorder';
import axios from 'axios'

const InputLine = (props) => {
  const [chatHistory, setChatHistory] = props.chatHistory
  const [rData, setRData] = useState(null)

  const handleUpdateChatHistory = () => {

    const newChatHistory = [...chatHistory];
    setChatHistory(newChatHistory);

  };
  useEffect(()=>{
    handleUpdateChatHistory()
  }, [chatHistory]);

  function upChHi(value){
    console.log("UPDATE")
    console.log(value)
    chatHistory.push({
      "sender": 0,
      "message": value,
    })
  }

  const fetchData = async (formData) => {
    const res = await axios.post("/chat", formData)
    const resData = res.data
    console.log("FETCH")
    console.log(resData)
    setRData(resData)
  }

  useEffect(() => {
    console.log("RDATA PUSH")
    console.log(rData)
    upChHi("RESDATAS")
    //console.log(chatHistory)
    // let tmp = chatHistory
    // tmp.push({
    //   "sender": 0,
    //   "message": "rData",
    // })
    //setChatHistory(chatHistory)
    // setChatHistory()

  }, [rData])

  // useEffect(()=>{
  //   setChatHistory(chatHistory)
  // },[chatHistory])


  const onSend = ()=>{
    const value = document.getElementsByClassName('propmt-line-input')[0].value
    if (value && value !== ""){
      //let tmp = chatHistory
      
      // chatHistory.push({
      //   "sender": 0,
      //   "message": value,
      // })
      upChHi(value)
      //setChatHistory(tmp)
      document.getElementsByClassName('propmt-line-input')[0].value = ""
      
      let formData = new FormData();
      formData.append(
        "text", value
      )

      fetchData(formData)
      console.log("ON SEND")
      console.log(rData)
    }
    // props.onClick
  }
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log(1)
        onSend()
        console.log(2)
      }
    };


  const handleRecordingComplete = async (audioData) => {
    try {

      const formData = new FormData();
      formData.append('audio', audioData, 'recorded_audio.webm')
      console.log(formData)
      const responceVoice = await axios.post('/audio_chat', formData)

      const voiceData = responceVoice.data

      let tmp = chatHistory

      tmp.push({
        "sender": 1,
        "message": voiceData,
      })
      setChatHistory(tmp)

      console.log(formData)
      //const response = await axios.post('your-backend-endpoint', formData);

      console.log('Audio file uploaded successfully');
      // Optionally handle response from backend
    } catch (error) {
      console.error('Error uploading audio file:', error);
    }
  };


  return (
    <div className='prompt-line-container'>
        <input className='propmt-line-input' placeholder = {"Give your slave Boris a job"} onKeyDown={handleKeyPress}/>
        <AudioRecorder 
        onRecordingComplete={handleRecordingComplete}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }} 
        downloadOnSavePress={true}
        downloadFileExtension="webm"
      />

        <img src='Static/Icons/send.png'  type="text" id = "send-button" onClick={onSend}  />
    </div>

  )
}

export default InputLine