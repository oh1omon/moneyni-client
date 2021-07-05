/// <reference types="react-scripts" />

import { Action } from 'redux'

type ISpendsState = ISpend[] | []

interface ISpend {
	_id: Types.ObjectId
	owner: Types.ObjectId
	category: string
	comment: string
	cost: number
	currency: string
}

interface ISpendsStateAction extends Action {
	type: string
	payload: TSpendsState
}

interface IUser {
	_id: Types.ObjectId
	email: string
	password: string
	name: string
	salary: {
		monthly: number
		actual: number
	}
	spends: [] | Types.ObjectId[]
}

type TUserState = IUser | null

type TSpendsState = ISpend[]

interface UserStateAction extends Action {
	type: string
	payload: UserState
}
interface IMonthStateAction extends Action {
	type: string
	payload: IMonthState
}

type TMonthState = IMonth[]

interface IMonth {
	_id: string
	owner: string
	month: number
	spends: string[]
	salary: {
		monthly: number
		actual: number
	}
}

interface IRootState {
	user: TUserState
	spends: TSpendsState
	month: TMonthState
}

interface ISpendWithDate extends ISpend {
	date: Date
}

type TAddDateToSpend = (spend: ISpend) => ISpendWithDate
type TConvertIdToDate = (idString: string) => Date
type TSpendsSplitter = (spendsArr: ISpend[]) => ISpendWithDate[][]

interface IServerResp {
	status: {
		success: boolean
		message: string
	}
}

interface IUserServerResp extends IServerResp {
	user?: IUser
}

interface ISpendsServerResp extends IServerResp {
	spends?: ISpend[]
}

interface ISpendServerResp extends IServerResp {
	spends?: ISpend
}

interface ISpendWindowProps {
	spendsArr: ISpendWithDate[]
}

interface IInputProps {
	inputType: string
	inputId: string
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
	err?: boolean
}

interface IFormObject {
	email?: string
	name?: string
	password?: string
	salary?: number
}

type IValRes = string[]

interface IButtonProps {
	buttonText: string
	clickHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

interface ISpendFormObject {
	category?: string
	comment?: string
	cost?: number
	currency?: string
}
