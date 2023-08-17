import { InputType, LabelType } from "./general-info"

function Practical(props) {
    return (
        <div id="practical">
            <h2>Practical Experience in the past</h2>
            <div className="row1">
                <div className="temp-div">
                    <LabelType for="company" class="practical-info info" text="Company Name" />
                    <InputType type="text" id="company-text" class="practical-input input" name="company" value={props.dict.company} change={props.changable}/>
                </div>

                <div className="temp-div">
                    <LabelType for="from" class="practical-info info" text="Worked from" />
                    <InputType type="date" id="from-date" class="practical-input input date" name="from" value={props.dict.from} change={props.changable}/>
                </div>
            </div>

            <div className="row2">
                <div className="temp-div">
                    <LabelType for="position-title" class="practical-info info" text="Position Title" />
                    <InputType type="text" id="position-title-text" class="practical-input input" name="position" value={props.dict.position} change={props.changable}/>
                </div>

                <div className="temp-div">
                    <LabelType for="to" class="practical-info info" text="Worked to" />
                    <InputType type="date" id="company-date" class="practical-input input date" name="to" value={props.dict.to} change={props.changable}/>
                </div>
            </div>
        </div>
    )
}

export default Practical