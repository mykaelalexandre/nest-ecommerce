import React from 'react';
import {} from 'formik';
import {} from '@blueprintjs/core';

interface Props {
    headerText: String;
}

export const AuthComponent: React.FC<Props> = ({headerText}) => {
    return <card>
        <formik initialValues={{username: '', password: '', seler: false}} onSubmit={e => console.log(e)} 
        render = {() => <Form>
            <h2>{e=headerText}</h2>
            <field name="username" render={({field}: FieldProps) => <Formgroup>
                <InputGroup {...field} id="username"
                placeholder= "Enter Username... "/>
            </Formgroup>}/>
        </Form>} />

        <field name="password" render={({field}: FieldProps) => <Formgroup>
            <InputGroup {...field} id="password" placeholder="Enter password" />
        </Formgroup>}/> 
    </card>;
}