import React from 'react'
import { ISpendWindowProps } from '../react-app-env'

const SpendWindow = ({ spendsArr }: ISpendWindowProps): JSX.Element => {
	return (
		<li className='flex justify-center items-center bg-gradient-to-br from-main-light to-main-dark rounded-tl-2xl rounded-tr-100px rounded-br-2xl rounded-bl-100px mb-10'>
			<div className='w-2/3 h-2/3 text-main-yellow'>
				<p className='pt-2'>{`${spendsArr[0].date.getDate()}/${spendsArr[0].date.getMonth() + 1}`}</p>
				<ul className='w-full h-auto my-7'>
					{spendsArr.map((spend) => (
						<li className='w-full flex justify-between items-center mb-2' key={spend._id}>
							<div>
								<p>PH</p>
							</div>
							<div>
								<p className='font-light'>{spend.category}</p>
							</div>
							<div>
								<p className='font-bold'>{`${spend.cost} ${spend.currency}`}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</li>
	)
}

export default SpendWindow
