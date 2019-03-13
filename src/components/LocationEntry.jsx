import React from 'react';
import { Card } from 'semantic-ui-react'

const { Content, Meta, Header } = Card

const LocationEntry = ({ city, date, onClick }) => {
    return (
        <Card onClick={onClick} >
            <Content>
                <Header>{city}</Header>
                <Meta>
                    <span className='date'>{date}</span>
                </Meta>
            </Content>
        </Card>
    )
}

export default LocationEntry;