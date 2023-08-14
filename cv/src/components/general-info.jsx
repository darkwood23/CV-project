import { v4 as uuidv4 } from 'uuid'

function General(props) {
    return (
        <div className="general-information">
            <h2>General Information</h2>
            <div className='row1'>
                <div className="temp-div">  
                    <LabelType for="name" class="general-info info" text="Name*" />
                    <InputType type="text" id="name-text" name="name" class="general-input input" value={props.dict.name} change={props.changable}/>
                </div>

                <div className="temp-div">
                    <LabelType for="email" class="general-info info" text="Email*" />
                    <InputType type="email" id="email-text" class="general-input input" name="email" value={props.dict.email} change={props.changable}/>
                </div>
            </div>

            <div className='row2' >
                <div className="temp-div">
                    <LabelType for="phone" class="general-info info" text="Phone no.*" />
                    <InputType type="number" id="number-text" class="general-input input" name="phone" value={props.dict.phone} change={props.changable}/>
                </div>

                <div className="temp-div">
                    <LabelType for="dob" class="general-info info" text="DOB*" />
                    <InputType type="date" id="dob-date" class="general-input input" name="dob" value={props.dict.dob} change={props.changable}/>
                </div>
            </div>

            <div className='row3'>
                <div className="temp-div">
                    <LabelType for="address" class="general-info info" text="Address" />
                    <InputType type="text" id="address-text" class="general-input input" name="address" value={props.dict.address} change={props.changable}/>
                </div>

                <div className="temp-div">
                    <LabelType for="gender" class="general-info info" text="Gender*" />
                    <SelectOpt selectClass="select-menu-gender input general-input" valArray={['Male', 'Female', 'Others']} name='gender' value={props.dict.gender} change={props.changable}/>
                </div>
            </div>
        </div>
    )
}

function LabelType(props) {
    return (
        <>
            <label htmlFor={props.for} className={props.class} >{props.text}</label>
        </>
    )
}

function InputType(props) {
    return (
        <>
            <input type={props.type} id={props.id} className={props.class} value={props.value} name={props.name} onChange={props.change}/>
        </>
    )
}

function SelectOpt(props) {
    return (
        <>
            <select className={props.selectClass} key={uuidv4()} name={props.name} value={props.value} onChange={props.change}>
                {props.valArray.map((val) => {
                    return <option value={val} key={uuidv4()}>{val}</option>
                })}
            </select>
        </>
    )
}

export default General
export {LabelType, InputType, SelectOpt}