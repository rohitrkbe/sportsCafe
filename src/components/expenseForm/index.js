import React, { useState } from 'react';
import { Table, Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';

const ExpenseForm = (props) => {
	var date = (new Date()).toLocaleDateString('en-US');
	const [category, setCategory] = useState( props.editData && props.editData.category ? props.editData.category :'' );
	const [description, setDescription] = useState(  props.editData && props.editData.description ? props.editData.description :'' );
	const [amount, setAmount] = useState( props.editData && props.editData.amount ? props.editData.amount :'' );
	const [important, setImportant] = useState( props.editData && props.editData.important ? props.editData.important : false );
 
	const handleCategoryDropDown = event => {
		setCategory(event.target.value);
	}

	const handleCategoryInput = (event) => {
		setCategory(event.target.value);
	}

	const handleDescriptionInput = (event) => {
		setDescription(event.target.value);
	}

	const handleAmountInput = (event) => {
		setAmount(event.target.value);
	}

	const handleImportantSelection = event => {
		setImportant(event.target.checked);
	}

	const handleSaveExpense = () => {
		let id = props.editData && props.editData.id ? props.editData.id : null;
		if ( category === '' ){
			alert('select or enter new category');
		} else if ( description === '' ){
			alert('enter desciption');
		} else if ( amount === '' ){
			alert('enter amount');
		} else {
			if ( props.editData && props.editData.category ){
				props.onClickUpdate({ id, category, description, amount, important, date })
			}else{
				props.onClickSave({ id, category, description, amount, important });
			}
		}
	}

	const handleCancelExpense = () => {
		props.onClickCancel();
	}

  return (
    <div>
			<Row>
        <Col sm={{ size: '5' }}>
					<FormGroup>
						<Label for="CATEGORIES">SELECT CATEGORIES</Label>
						<Input type="select" name="select" id="exampleSelect" onChange={(event)=>{handleCategoryDropDown(event)}} >
							<option value='' >Select Categories</option>
							{
								props.categoriesList.map((item, index)=>{
									return (
									<option key={item+index} >{item}</option>
									)
								})
							}
						</Input>
					</FormGroup>
				</Col>
				<Col sm={{ size: '2'}}>
					Or enter new
				</Col>
        <Col sm={{ size: '5'}}>
					<FormGroup>
						<Label for="CATEGORY">CATEGORY</Label>
						<Input type="text" name="categories" id="categories" value={category} placeholder="New categories" onChange={(event)=>handleCategoryInput(event)} />
					</FormGroup>
				</Col>
      </Row>
			<Row>
        <Col sm={{ size: '5' }}>
					<FormGroup>
						<Label for="DESCRIPTION">DESCRIPTION</Label>
						<Input type="textarea" name="description" id="description" value={description} onChange={(event)=>handleDescriptionInput(event)} />
					</FormGroup>
				</Col>
        <Col sm={{ size: '5', offset: 2 }}>
					<FormGroup>
						<Label for="AMOUNT">AMOUNT</Label>
						<Input type="number" name="amount" id="amount" value={amount} min='1' onChange={(event)=>handleAmountInput(event)} />
					</FormGroup>
				</Col>
      </Row>
			<Row>
        <Col sm={{ size: '5' }}>
					<FormGroup>
						<Input type="checkbox" name="important" id="important" checked={important}  onChange={(event)=>handleImportantSelection(event)} />
						<Label for="exampleText">Mark as important</Label>
					</FormGroup>
				</Col>
        <Col sm={{ size: '5', offset: 2 }}>
					<Button color="success" onClick={()=>handleSaveExpense()} >{props.editData && props.editData.category ? 'UPDATE' : 'SAVE'}</Button>{' '}
					<Button color="secondary" onClick={()=>handleCancelExpense()}>CANCEL</Button>
				</Col>
      </Row>
		</div>
  );
}

export default ExpenseForm;
