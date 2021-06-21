/// <reference types="react-scripts" />

import { Action } from 'redux'

type ISpendAction = {
	type: string
	spending: ISpending
}

type SpendsState = ISpend[] | []

interface ISpend {
	_id: string
	category: string
	comment: string
	cost: number
	currency: string
}

interface SpendsStateAction extends Action {
	type: string
	payload: TSpendsState
}

interface IUser {
	_id: string
	email: string
	name: string
	spends: string[]
}
type TUserState = boolean | IUser

type TSpendsState = ISpend[]

interface UserStateAction extends Action {
	type: string
	payload: UserState
}

interface IRootState {
	user: TUserState
	spends: TSpendsState
}

interface ISpendWithDate {
	_id: string
	category: string
	comment: string
	cost: number
	currency: string
	date: Date
}

type TAddDateToSpend = (spend: ISpend) => ISpendWithDate
type TConvertIdToDate = (idString: string) => Date
type TSpendsSplitter = (spendsArr: ISpend[]) => ISpendWithDate[][]
