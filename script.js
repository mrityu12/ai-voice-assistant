let button=document.querySelector("button")
let content = document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wiseMe(){
    let day=new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon sir")
    }
    else{
        speak("Good Evening sir")
    }
}
window.addEventListener('load',()=>{
    wiseMe()
})
let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takecommand(transcript.toLowerCase())
}
button.addEventListener("click",()=>{
    recognition.start()
    button.style.display="none"
    voice.style.display="block"
})
function takecommand(message){
    button.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello")){
        speak("hello sir,how can i help you?")
    }
    else if (message.includes("i love you")){
        speak("since i am a virtual assistance i cannot love you but we can be friends though ")
    }
    else if (message.includes("namaste")){
        speak("Namaste ,maay aap kee kay madat kar sakata hu ?")
    }
    else if (message.includes("nothing")||message.includes("kuchh nahi")){
        speak("okey ,thank you take care")
    }
    else if (message.includes("it was nice talking to you")){
        speak("same here ! Always happy to help")
    }
    else if(message.includes("tell me about yourself")||message.includes("who are you")){
        speak("i am virtual assistance , created by Mrityunjay kumar")
    }else if(message.includes("youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }else if(message.includes("opening google")){
        speak("opning google")
        window.open("https://www.google.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatapps")){
        speak("opening whatapps..:")
        window.open("whatapp://")
    }
    else if(message.includes("time")){
    let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric", month:"short"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("sophia","")||message.replace("sofia","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("sophia","")}`,"_blank")
    }

}