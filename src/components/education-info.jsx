import { LabelType, InputType, SelectOpt } from "./general-info"

function Education(props) {
    return (
        <div id="education">
            <h2>Education</h2>
            <div className="row1">
                <div className="temp-div">
                    <LabelType for="school" class="education-info info" text="School Name*" />
                    <InputType type="text" id="school-text" class="education-input input" name="school" value={props.dict.school} change={props.changable}/>
                </div>

                <div className="temp-div">
                    <LabelType for="tos" class="education-info info" text="Title of study*" />
                    <InputType type="text" id="tos-text" class="education-input input" name="titleStudy" value={props.dict.titleStudy} change={props.changable}/>
                </div>
            </div>
            <div className="row2">
                <div className="temp-div">
                    <LabelType for="dog" class="education-info info" text="Date of graduation*" />
                    <InputType type="date" id="dog-date" class="education-input input" name="graduation" value={props.dict.graduation} change={props.changable}/>
                </div>

                <div className="temp-div">
                    <LabelType for="plan" class="education-info info" text="Do you plan to study further?*" />
                    <SelectOpt selectClass="select-menu-plan input education-input" valArray={['No', 'Yes']} name="plan" value={props.dict.plan} change={props.changable}/>
                </div>
            </div>
        </div>
    )
}

export default Education