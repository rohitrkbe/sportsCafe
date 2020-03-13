import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = props => {
	return (
		<BarChart
			width={800}
			height={400}
			data={props.chartData}
			margin={{
				top: 5, right: 30, left: 20, bottom: 5,
			}}
		>
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			<Legend />
			{
				props.categoriesList.map((item,index)=>{
					return(
						<Bar key={item+index} dataKey={item} fill={'#'+(Math.random()*0xFFFFFF<<0).toString(16)} />
					)
				})
			}
		</BarChart>
	);
}


export default Chart;