import React from 'react';
import { Table, ButtonToggle } from 'reactstrap';

const DataTabel = (props) => {
  return (
    <Table bordered responsive hover>
      <thead>
        <tr className='TabelHead' >
          <th>#</th>
          <th>CATEGORIES</th>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
          <th>DATE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
				{
					props.data.map((items, index)=>{
						return(
							<tr key={'table1'+index} className={ items.important ? 'ColoredRow' : '' } >
								<th scope="row">{ index+1 }</th>
								<td>{items.category}</td>
								<td>{items.description}</td>
								<td>{items.amount}</td>
								<td>{items.date}</td>
								<td className='ButtonAlign' >
									<ButtonToggle color="info" onClick={()=>{props.onEditClick(items)}} >EDIT</ButtonToggle>
									<ButtonToggle color="danger" onClick={()=>{props.onDeleteClick(items)}} >DELETE</ButtonToggle>
								</td>
							</tr>
						) 
					})
				}
      </tbody>
    </Table>
  );
}

export default DataTabel;
