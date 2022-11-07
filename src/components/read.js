import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'semantic-ui-react'
export default function Read() {
	const [APIData, setAPIData] = useState([]);
useEffect(() => {
	axios.get(`https://6368e91e15219b84960a0d31.mockapi.io/fakeData`,)
	.then((response) => {
		setAPIData(response.data);
})    
}, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>

								<Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                               
                             
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}