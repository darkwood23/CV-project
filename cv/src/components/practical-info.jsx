import { InputType, LabelType, SelectOpt } from "./general-info"

function Practical() {
    return (
        <div id="practical">
            <h2>Practical Experience in the past</h2>
            <div className="row1">
                <div className="temp-div">
                    <LabelType for="company" class="practical-info info" text="Company Name" />
                    <InputType type="text" id="company-text" class="practical-input input" />
                </div>

                <div className="temp-div">
                    <LabelType for="from" class="practical-info info" text="Worked from" />
                    <InputType type="date" id="from-date" class="practical-input input date" />
                </div>
            </div>

            <div className="row2">
                <div className="temp-div">
                    <LabelType for="position-title" class="practical-info info" text="Position Title" />
                    <InputType type="text" id="position-title-text" class="practical-input input" />
                </div>

                <div className="temp-div">
                    <LabelType for="to" class="practical-info info" text="Worked to" />
                    <InputType type="date" id="company-date" class="practical-input input date" />
                </div>
            </div>
        </div>
    )
}

export default Practical