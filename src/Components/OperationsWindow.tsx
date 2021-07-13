import React from 'react'
import { IOperationWindowProps } from '../react-app-env'
import { months } from '../assets/lists/months'
import { ClothesIcon } from '../assets/icons/ClothesIcon'
import { BadHabitsIcon } from '../assets/icons/BadHabitsIcon'
import { HealthIcon } from '../assets/icons/HealthIcon'
import { HousingIcon } from '../assets/icons/HousingIcon'
import { FoodIcon } from '../assets/icons/FoodIcon'
import { EntertainmentIcon } from '../assets/icons/EntertainmentIcon'
import { ConnectionIcon } from '../assets/icons/ConnectionIcon'
import { GiftIcon } from '../assets/icons/GiftIcon'
import { TravelIcon } from '../assets/icons/TravelIcon'
import { SalaryIcon } from '../assets/icons/SalaryIcon'

const OperationsWindow = ({ operationsArr }: IOperationWindowProps): JSX.Element => {
	const defineIcon = (type: string): JSX.Element => {
		switch (type) {
			case 'Bad Habits':
				return <BadHabitsIcon />
			case 'Hygiene and Health':
				return <HealthIcon />
			case 'Housing':
				return <HousingIcon />
			case 'Clothing and Cosmetics':
				return <ClothesIcon />
			case 'Travel':
				return <TravelIcon />
			case 'FoodIcon':
				return <FoodIcon />
			case 'Entertainment':
				return <EntertainmentIcon />
			case 'ConnectionIcon':
				return <ConnectionIcon />
			case 'Salary':
				return <SalaryIcon />
			case 'Gift':
				return <GiftIcon />
			default:
				return <p> </p>
		}
	}
	return (
		<li className='flex justify-center items-center bg-gradient-to-br from-main-light to-main-dark rounded-tl-2xl rounded-tr-100px rounded-br-2xl rounded-bl-100px mb-10'>
			<div className='w-2/3 h-2/3 text-main-yellow'>
				<p className='pt-2'>{`${operationsArr[0].date.getDate()} ${
					months[operationsArr[0].date.getMonth()]
				}`}</p>
				<ul className='w-full h-auto my-7'>
					{operationsArr.map((spend) => (
						<li className='w-full flex justify-between items-center mb-2' key={spend._id}>
							<div>{defineIcon(spend.category)}</div>
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
