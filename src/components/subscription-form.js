/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, Flex, Input, Button, Message} from 'theme-ui';
import {sendMessageToBot} from "../telegram";
import React, {useRef, useState} from "react";

const SubscriptionForm = ({buttonLabel, ...props}) => {
    const [isSend, setSendStatus] = useState(null);
    const tel = useRef(null);
    const handleClick = () => {
        if (tel.current.value) {
            sendMessageToBot(tel.current.value, buttonLabel ?? 'Заказать звонок');
            setSendStatus("Sent")
        } else {setSendStatus("NotSent")}

    };
    return (
        <div>
            <Flex sx={styles.form} {...props}>
                <Input type="tel" id="tel" ref={tel} placeholder="Введите ваш номер телефона"/>
                <Button onClick={handleClick}>{buttonLabel ?? 'Заказать звонок'}</Button>
            </Flex>
            {isSend && (isSend === "Sent" ? <Message sx={styles.message}>Вам позвонят в ближайшее время</Message> :
                <Message sx={styles.messageDanger}>Введите, пожалуйста, ваш номер телефона</Message>)
            }

        </div>
    );
};

export default SubscriptionForm;

const styles = {
    message:{
        marginTop: '15px',
    },
    messageDanger:{
        marginTop: '15px',
        borderLeftColor: 'red',
    },
    form: {
        input: {
            flexGrow: 1,
            p: ['0 20px', null, null, null, '0 25px'],
            minHeight: [60],
            height: 'auto',
        },
        button: {
            backgroundColor: "#5081f9",
            ml: [3],
        },
    },
};
