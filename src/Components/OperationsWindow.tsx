import React from 'react'
import { IOperationWindowProps } from '../react-app-env'
import { months } from '../assets/lists/months'

const OperationsWindow = ({ operationsArr }: IOperationWindowProps): JSX.Element => {
	return (
		<li className='flex justify-center items-center bg-gradient-to-br from-main-light to-main-dark rounded-tl-2xl rounded-tr-100px rounded-br-2xl rounded-bl-100px mb-10'>
			<div className='w-2/3 h-2/3 text-main-yellow'>
				<p className='pt-2'>{`${operationsArr[0].date.getDate()} ${
					months[operationsArr[0].date.getMonth()]
				}`}</p>
				<ul className='w-full h-auto my-7'>
					{operationsArr.map((spend) => (
						<li className='w-full flex justify-between items-center mb-2' key={spend._id}>
							<div>
								<p>P</p>
							</div>
							<div>
								<p className='font-light text-xs'>{spend.category}</p>
							</div>
							<div>
								<p className='font-bold'>{`${Number(spend.cost).toLocaleString('en-US', {
									maximumFractionDigits: 2,
								})} ${spend.currency}`}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</li>
	)
}

export default OperationsWindow
