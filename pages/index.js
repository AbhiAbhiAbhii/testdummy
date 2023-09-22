
import Image from "next/image";
import { useState, useEffect } from "react";

export default function FrontDesk(){

  const [ boolean, setBoolean ] = useState(false) // Boolean switch, Form A and Form B

  const [ firstData, setFirstData ] = useState("") // First time at Atomic Data


  // Form functionality and data
  const [ fullName, setFullName ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ mail, setMail ] = useState('')
  const [ company, setCompany ] = useState('')
  const [ id, setId ] = useState('')
  const [ location, setLocation ] = useState('')
  const [ purpose, setPurpose ] = useState('')

  // Extra Field
  const [ event, setEvent ] = useState('')
  const [ meeting, setMeeting ] = useState('')
  const [ interview, setInterview ] = useState('')


  // Focus and Blur states
  const [ fullNameFocused, setFullNameFocused ] = useState(false)

  const handleNameFocus = () => {
    setFullNameFocused(true)
  }

  const handleNameBlur = () => {
    setFullNameFocused(false)
  }

  const [ numberFocused, setNumberFocused ] = useState(false)

  const handleNumberFocus = () => {
    setNumberFocused(true)
  }

  const handleNumberBlur = () => {
    setNumberFocused(false)
  }

  const [ mailFocus, setMailFocus ] = useState(false)

  const handleMailFocus = () => {
    setMailFocus(true)
  }

  const handleMailBlur = () => {
    setMailFocus(false)
  }

  const [ companyFocus, setCompanyFocus ] = useState(false)
  
  const handleCompanyFocus = () => {
    setCompanyFocus(true)
  }

  const handleCompanyBlur = () => {
    setCompanyFocus(false)
  }

  const[ idFocus, setIdFocus ] = useState(false)
  
  const handleIdFocus = () => {
    setIdFocus(true)
  }

  const handleIdBlur = () => {
    setIdFocus(false)
  }

  const [ locationFocus, setLocationFocus ] = useState(false)

  const handleLocationFocus = () => {
    setLocationFocus(true)
  }

  const handleLocationBlur = () => {
    setLocationFocus(false)
  }

  const [ eventFocused, setEventFocused ] = useState(false)

  const handleEventFocus = () => {
    setEventFocused(true)
  }

  const handleEventBlur = () => {
    setEventFocused(false)
  }

  const [ meetingFocused, setMeetingFocused ] = useState(false)

  const handleMeetingFocus = () => {
    setMeetingFocused(true)
  }

  const handleMeetingBlur = () => {
    setMeeting(false)
  }


  const [ interviewFocused, setInterviewFocused ] = useState(false)

  const handleInterviewFocus = () => {
    setInterviewFocused(true)
  }

  const handleInterviewBlur = () => {
    setInterview(false)
  }

  // Handle Submit

  const disabled = fullName === "" || number === ""; // Disable Submit Btn Condition

  const handleSubmit = async (e) => { // Handle Submit
    e.preventDefault()

    const data = {
      firstData,
      fullName,
      number,
      mail,
      company,
      id,
      location,
      purpose, 
      event,
      meeting,
      interview
    }

   if(!fullName || !number) {
    formError()
    console.log("error")
   } else {
    formSuccess()
    console.log("SUCCESS")

    setFullName('')
    setNumber('')
    setMail('')
    setId('')
    setCompany('')
    setLocation('')
    setEvent('')
   }

  await fetch("/api/sheet", {
    method:'POST',
    headers: {
       Accept: 'application/json',
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(data)
   })


  }

  function formSuccess(e) {

    let NotifyWrapper = document.querySelector('.notify-wrapper')

    let Notify = document.querySelector('.notify')

    NotifyWrapper.classList.add('active')

    setTimeout(() => Notify.classList.add('notify-active'), 1000)



    setTimeout(() => NotifyWrapper.classList.remove('active'), 3500)

  }

  function formError(e) {
    let NotifyWrapper = document.querySelector('.notify-wrapper')

    let Notify = document.querySelector('.notify-error')

    NotifyWrapper.classList.add('active')

    setTimeout(() => Notify.classList.add('notify-active'), 1000)



    setTimeout(() => NotifyWrapper.classList.remove('active'), 3500)
  }




  let options = [
    {
      value:"",
      text:"Choose your purpose"
    },
    {
      value:"Event",
      text:"Event"
    },
    {
      value:"Meeting",
      text:"Meeting"
    },
    {
      value:"Interview",
      text:"Interview"
    }
  ]

  let data = [
    {
     text:'Yes' 
    },
    {
      text:'No'
    }
  ]

  useEffect(() => {

   let text = document.querySelectorAll('.first-data')
    
    text.forEach(item => {
      item.addEventListener('click', () => {
        setFirstData(item.innerHTML)
        setBoolean(true)
      })
    })
   // First Data Value

  })



  let SubText = "Visitor Information"

  let TitleA = "Is this your first time at atomic?"

  return(
    <main className="main">
        <div className="main-text-holder"> 
          <div className="main-logo">
            <Image src={'/ATOMIC_logo.svg'} alt="THE ATOMIC" height={100} width={200} />
          </div>
          <div className="main-sub-text">
            <p className="c-f">
              {SubText}
            </p>
          </div>
        </div>
      
        {/* Boolean */}
        {
          boolean === false ?
          <div className="form-A-wrapper">
            <form className="form-A">
              <div className="form-A-title">
                <p className="inter">
                  {TitleA}
                </p>
              </div>
              <div className="form-A-opt">
                {
                  data.map((item, i) => {
                    return(
                      <div className="form-A-opt-item" key={i}>
                        <p className="first-data inter" >
                          { item.text }
                        </p>
                      </div>
                    )
                  })
                }
              </div>
            </form>
         </div>
        :
        <div className="form-B-wrapper">
          {/* Notification */}
          <div className="notify-wrapper">
            <div className="notify">
              <div className="notify-text">
                <p className="inter">Success</p>
              </div>
              <div className="notify-svg">
                <Image src={'/success.svg'} alt="success" height={200} width={200} />
              </div>
            </div>

            <div className="notify-error">
              <div className="notify-text">
                <p className="inter">Submission Error</p>
              </div>
              <div className="notify-svg">
                <Image src={'/error.svg'} alt="success" height={200} width={200} />
              </div>
            </div>
          </div>
          {/* Notification Fin */}


          <form className="form-B inter">
            {/* FullName */}
            <div className="form-input-wrapper">
              <label>
                Full Name *
              </label>
              <input type="text" placeholder="Full Name" id="fullName" 
              className= {fullNameFocused ? 'focused':'notFocused'} 
              value={fullName} 
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              onChange={(e) => {setFullName(e.target.value)}}  />
            </div>
            {/* Mobile Number */}
            <div className="form-input-wrapper">
              <label>
                Mobile Number *
              </label>
              <div onBlur={handleNumberBlur} onFocus={handleNumberFocus} className={ numberFocused ? 'mobInput focused':"mobInput notFocused"}>
                <p style={{display:'flex', width:'fit-content', paddingRight:'0.52em'}}>+91 🇮🇳</p><input style={{width:'80%', border:'none', outline:'none', padding:'0'}} type="text" placeholder="Mobile Number" id="number" value={number} onChange={(e) => setNumber(e.target.value)}  />
              </div>
            </div>
            {/* Email */}
            <div className="form-input-wrapper">
              <label>
                Email Address
              </label>
              <input type="email" placeholder="Email" id="mail" 
              className= {mailFocus ? 'focused':'notFocused'} 
              onBlur={handleMailBlur}
              onFocus={handleMailFocus}
              value={mail} 
              onChange={(e) => setMail(e.target.value)}  />
            </div>
            {/* Company */}
            <div className="form-input-wrapper">
              <label>
                Company
              </label>
              <input type="text" placeholder="Company Name" id="company" 
              className= {companyFocus ? 'focused':'notFocused'} 
              onBlur={handleCompanyBlur}
              onFocus={handleCompanyFocus}
              value={company} 
              onChange={(e) => setCompany(e.target.value)} />
            </div>
            {/* ??? */}
            <div className="form-input-wrapper">
              <label>
                You are a 
              </label>
              <input type="text" placeholder="Input" id="" 
              className= {idFocus ? 'focused':'notFocused'} 
              onBlur={handleIdBlur}
              onFocus={handleIdFocus}
              value={id} 
              onChange={(e) => setId(e.target.value)} />
            </div>
            {/* Location */}
            <div className="form-input-wrapper">
              <label>
                Location
              </label>
              <input type="text" placeholder="Trivandrum..." id="location" 
              className= {locationFocus ? 'focused':'notFocused'} 
              onBlur={handleLocationBlur}
              onFocus={handleLocationFocus}
              value={location} 
              onChange={(e) => setLocation(e.target.value)} />
            </div>
            {/* Purpose of visit */}
            <div className="form-input-wrapper">
              <label>
                Purpose of visit
              </label>
              <select placeholder="" 
              value={purpose}
              onChange={(e) => {
                setPurpose(e.target.value)
                }}>
                {
                  options.map((item, i) => {
                    return(
                      <option key={i} value={item.value}>{item.text}</option>
                    )
                  })
                }
              </select>
            </div>
            {/* AFTER CHOICE */}
            {
              purpose === "Event" ? 
              <div className="form-input-wrapper">
              <label>
                Name of Event
              </label>
              <input type="text" placeholder="Event Name" id="" 
              className= {eventFocused ? 'focused':'notFocused'} 
              onBlur={handleEventBlur}
              onFocus={handleEventFocus}
              value={event} 
              onChange={(e) => setEvent(e.target.value)} />
            </div>
              :
              purpose === "Meeting" ? 
              <div className="form-input-wrapper">
                <label>
                  Meeting 
                </label>
                <input type="text" placeholder="Meeting Name" id="" 
                className= {meetingFocused ? 'focused':'notFocused'} 
                onBlur={handleMeetingBlur}
                onFocus={handleMeetingFocus}
                value={meeting} 
                onChange={(e) => setMeeting(e.target.value)} />
              </div>
              :
              purpose === "Interview" ?
              <div className="form-input-wrapper">
                <label>
                  Interview
                </label>
                <input type="text" placeholder="Interview Name" id="" 
                className= {interviewFocused ? 'focused':'notFocused'} 
                onBlur={handleInterviewBlur}
                onFocus={handleInterviewFocus}
                value={interview} 
                onChange={(e) => setInterview(e.target.value)} />
              </div>
              :
              null
            }
            {/* AFTER CHOICE END */}
          </form>
          <div className="form-btn">
            <button onClick={handleSubmit} value="Submit" 
            disabled={disabled} 
            style={{background: !disabled ? '#000':'rgba(255, 255, 255, 0.15)', border: !disabled ? '':'1px #9D9D9D solid'}}
            >
              Submit
            </button>
          </div>

        </div>
        }
        {/* Boolean End */}
    </main>
  )
}
