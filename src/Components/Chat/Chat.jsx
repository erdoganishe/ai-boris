import React from 'react'
import './Chat.css'
import { useState, useEffect, useRef } from 'react'
import BorisMessage from '../ChatMessage/BorisMessage'
import UserMessage from '../ChatMessage/UserMessage'
import InputLine from '../InputLine/InputLine'
import axios from 'axios'
import { AudioRecorder } from 'react-audio-voice-recorder'

const Chat = (props) => {


  const [chatHistory, setChatHistory] = props.chatHistory

  const fetchData = async (formData) => {
    const res = await axios.post("/chat", formData)
    const resData = res.data
    return resData
  }


  const onSend = async ()=>{

    const value = document.getElementsByClassName('propmt-line-input')[0].value
    if (value && value !== ""){
     
      console.log(value)
      chatHistory.push({
        "sender": 0,
        "message": value,
      })
     
      document.getElementsByClassName('propmt-line-input')[0].value = ""
      
      let formData = new FormData();
      formData.append(
        "text", value
      )
      console.log(formData)
      console.log("111111111")
      let result = await fetchData(formData)
      console.log(result)

 
    }

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
        onSend()
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

 const handleUpdateChatHistory = () => {

    const newChatHistory = [...chatHistory];
    setChatHistory(newChatHistory);

  };
  useEffect(()=>{
    handleUpdateChatHistory()
  }, [chatHistory]);

  return (
    <div>
     <div className='chat-container'>
      {chatHistory.map((message) => (
        message.sender === 0 ? (
          <BorisMessage key={message.id} message={message.message} />
        ) : (
          <UserMessage key={message.id} message={message.message} />
        )
      ))}
    </div>
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
 </div>
  )
  
}
export default Chat