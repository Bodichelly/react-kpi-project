import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/redux/actions";

const PrivateNotaryPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.updateMessageList());
    }, []);

    const messages = useSelector((state) => state.message.messages)

    const getListItems = () => {
        if (!!messages) {
            return messages.map(message => {
                return (
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                message title
                    </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                message text
                        </div>
                        </div>
                    </div>

                )
            })
        } else {
            return (
                <h4>Повідомлення відсутні</h4>
            )
        }

    }


    return (
        <div className="container-md mt-1">
            <div className="card bg-warning">
                <div className="card-body bg-light m-1">
                    <h2>Сторінка повідомлень</h2>
                    <hr class="dropdown-divider mb-3 mt-3" />
                    <div class="accordion" id="accordionExample">
                    {getListItems()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateNotaryPage;
