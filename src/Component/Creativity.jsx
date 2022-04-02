import React from 'react'
import "../Styles/Creativity.css"

const Creativity = () => {
    return (
        <div className='Creativity'>
            <div className="Creativity2">
                <h3 className="CreativityH1">10 step to improve your creativity at workplace</h3>
                <div className="Creativity1">
                    <div className="Creativity1Left">
                        <p className="">Rol</p>
                        <h3 className="">Mentee</h3><br />
                        <p className="">Mentor's inrolled</p>
                        <h3 className="">Mentee</h3><br />
                        <p className="">Mentor's inrolled</p>
                        <h3 className="">Mentee</h3>
                    </div>
                    <div className="Creativity1Right">
                        <div className="Creativity1Right1">
                            <p className="">Rol</p>
                            <h3 className="">Mentee</h3><br />
                            <p className="">Mentor's inrolled</p>
                            <h3 className="">Mentee</h3>

                        </div>
                        <div className="Creativity1Right1">
                            {/* <Form>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    label="Check this switch"
                                />
                                <Form.Check
                                    disabled
                                    type="switch"
                                    label="disabled switch"
                                    id="disabled-custom-switch"
                                />
                            </Form> */}
                        </div>
                    </div>
                </div>
                <div className="CreativityButton">
                    <button><h3>Application</h3></button>
                    <button><h3>View Details</h3></button>
                </div>
            </div>
        </div>
    )
}

export default Creativity