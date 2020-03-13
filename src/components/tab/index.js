import React, { useState } from 'react';
import { 
	TabContent, TabPane, Nav, NavItem, NavLink, Button,
	ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import classnames from 'classnames';
import DataTabel from '../dataTabel';
import ExpenseForm from '../expenseForm';
import Chart from '../chart';

const TabNav = (props) => {
	const  tableData = props.tableData.bills;
	const [activeTab, setActiveTab] = useState('1');
	const [filterSelected, setFilterSelected] = useState(false);
	const [dropdownValue, setDropdownValue] = useState('');
	const [filteredList, setFilteredList] = useState([]);
	const [dropdownOpen, setOpen] = useState(false);
	const [showExpenseForm, setShowExpenseForm] = useState(false);
	const [expenseToEdit, setExpenseToEdit] = useState({});

	const toggleDropdown = () => setOpen(!dropdownOpen);
	
	const toggleTab = tab => {
		if(activeTab !== tab) setActiveTab(tab);
	}

	const handleFilterClick = itemName => {
		setFilterSelected(true);
		setDropdownValue(itemName);
		let tempFilterArray = [];
		for ( let i=0; i<tableData.length; i++ ){
			if( tableData[i].category === itemName ){
				tempFilterArray.push(tableData[i])
			}
		}
		setFilteredList(tempFilterArray);
	}

	const handleFilterReset = () => {
		setFilterSelected(false);
		setDropdownValue('');
		setFilteredList([]);
	}

	const handleTableItemEditClick = item => {
		setExpenseToEdit(item);
		setShowExpenseForm(true);
	}

	const handleTableItemDeleteClick = item => {
		props.deleteExpense(item);
	}

	const handleExpenseFormSaveClick = item => {
		setShowExpenseForm(false);
		props.addExpense(item);
	}

	const handleExpenseFormUpdateClick = item => {
		setShowExpenseForm(false);
		props.updateExpense(item, expenseToEdit);
		setExpenseToEdit({});
	}

	const handleExpenseFormCancelClick = () => {
		setShowExpenseForm(false);
		setExpenseToEdit({});
	}
  
	return (
		<div>
			<Nav tabs>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '1' })}
						onClick={() => { toggleTab('1'); }}
					>
						Expense Details
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						className={classnames({ active: activeTab === '2' })}
						onClick={() => { toggleTab('2'); }}
					>
						chart
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={activeTab}>
				<TabPane tabId="1" className='TabBlock1' >
					{
						!showExpenseForm
						?
							<div>
								<div className='FilterButton' >
									<ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
										<DropdownToggle caret>
											{
												filterSelected ? dropdownValue : 'Select Filter'
											}
										</DropdownToggle>
										<DropdownMenu>
											{
												filterSelected && 
												<DropdownItem onClick={()=> handleFilterReset() } >
													All Categories
												</DropdownItem>
											}
											{
												tableData.map( ( item, index )=>{
													return(
														<DropdownItem key={item.category+index} onClick={()=> handleFilterClick(item.category) } >
															{ item.category }
														</DropdownItem>
													);										
												})
											}
										</DropdownMenu>
									</ButtonDropdown>
									<Button color="primary" onClick={()=> setShowExpenseForm(true) } >Add Expense</Button>
								</div>
								<div>
									<p style={{color:'red'}} > *All important Expense are shown with background color below* </p>
								</div>
								<DataTabel 
									data={ filterSelected ? filteredList : tableData } 
									onEditClick={(item)=>{handleTableItemEditClick(item)}}
									onDeleteClick={(item)=>{handleTableItemDeleteClick(item)}}
								/>
							</div>
						:
							<ExpenseForm
								categoriesList={props.categoriesList} 
								editData={expenseToEdit}
								onClickSave={(item)=>{handleExpenseFormSaveClick(item)}}
								onClickUpdate={(item)=>{handleExpenseFormUpdateClick(item)}}
								onClickCancel={()=>handleExpenseFormCancelClick()} 
							/>
					}
				</TabPane>
				<TabPane tabId="2">
					<Chart chartData={props.chartData} categoriesList={props.categoriesList} />
				</TabPane>
			</TabContent>
		</div>
	);
}
  
export default TabNav;