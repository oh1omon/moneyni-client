import { BadHabitsIcon } from './BadHabitsIcon'
import { HealthIcon } from './HealthIcon'
import { HousingIcon } from './HousingIcon'
import { ClothesIcon } from './ClothesIcon'
import { TravelIcon } from './TravelIcon'
import { FoodIcon } from './FoodIcon'
import { EntertainmentIcon } from './EntertainmentIcon'
import { ConnectionIcon } from './ConnectionIcon'
import { SalaryIcon } from './SalaryIcon'
import { GiftIcon } from './GiftIcon'
import React from 'react'

export const defineIcon = (type: string): JSX.Element => {
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
