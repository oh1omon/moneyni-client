import React, { useState } from 'react'
import { IOperationWindowProps } from '../react-app-env'
import { months } from '../assets/lists/months'
import { defineIcon } from '../assets/icons/DefineIcon'

const OperationsWindow = ({ operationsArr }: IOperationWindowProps): JSX.Element => {
	const [showCom, setShowCom] = useState(false)

	const showComHandler = () => {
		setShowCom(!showCom)
	}
	return (
		<li
			className='flex justify-center items-center bg-gradient-to-br from-main-light to-main-dark rounded-tl-2xl rounded-tr-100px rounded-br-2xl rounded-bl-100px mb-10'
			onClick={showComHandler}
		>
			<div className='w-2/3 h-2/3 text-main-yellow'>
				<p className='pt-2'>{`${operationsArr[0].date.getDate()} ${
					months[operationsArr[0].date.getMonth()]
				}`}</p>
				<ul className='w-full h-auto my-7'>
					{operationsArr.map((spend) => (
						<li className='flex flex-col' key={spend._id}>
							<div className='w-full flex justify-between items-center mb-2'>
								<div>{defineIcon(spend.category)}</div>
								<div>
									<p className='font-light text-xs'>{spend.category}</p>
								</div>
								<div>
									<p className='font-bold'>{`${Number(spend.cost).toLocaleString('en-US', {
										maximumFractionDigits: 2,
									})} ${spend.currency}`}</p>
								</div>
							</div>
							<div
								className={`font-light text-xs transition-all duration-200 ${
									showCom && spend.comment ? 'h-4' : 'h-0'
								}`}
							>
								{showCom ? spend.comment : ''}
							</div>
						</li>
					))}
				</ul>
			</div>
		</li>
	)
}

export default OperationsWindow
