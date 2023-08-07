function General() {
    return (
        <div className="general-information">
            <div className="temp-div">
                <LabelType for="name" class="general-info info" text="Name*" />
                <InputType type="text" id="name-text" class="general-input input" />
            </div>

            <div className="temp-div">
                <LabelType for="email" class="general-info info" text="Email*" />
                <InputType type="email" id="email-text" class="general-input input" />
            </div>

            <div className="temp-div">
                <LabelType for="phone" class="general-info info" text="Phone no.*" />
                <InputType type="number" id="number-text" class="general-input input" />
            </div>

            <div className="temp-div">
                <LabelType for="dob" class="general-info info" text="DOB*" />
                <InputType type="date" id="dob-text" class="general-input input" />
            </div>

            <div className="temp-div">
                <LabelType for="address" class="general-info info" text="Address" />
                <InputType type="text" id="address-text" class="general-input input" />
            </div>

        </div>
    )
}

function LabelType(props) {
    return (
        <>
            <label for={props.for} className={props.class} >{props.text}</label>
        </>
    )
}

function InputType(props) {
    return (
        <>
            <input type={props.type} id={props.id} className={props.class} required />
        </>
    )
}

export default General