/// <reference types="react-scripts" />
import { Action } from 'redux'
import { ChangeEvent } from 'react'

type IOperationsState = IOperation[]

interface IOperation {
	_id: string
	owner: string
	category: string
	comment: string
	cost: number
	currency: string
}

interface IOperationsStateAction extends Action {
	type: string
	payload: IOperationsState
}

interface IUser {
	_id: string
	email: string
	password: string
	name: string
	balance: {
		current: number
		spent: number
		income: number
	}
	operations: [] | string[]
	months: { month: number; id: string }[]
}

type TUserState = IUser | null

interface UserStateAction extends Action {
	type: string
	payload: TUserState
}

interface IMonthStateAction extends Action {
	type: string
	payload: TMonthState
}

type TMonthState = IMonth[]

interface IMonth {
	_id: string
	owner: string
	month: number
	operations: string[]
	balance: {
		current: number
		spent: number
		income: number
	}
}

interface IRootState {
	user: TUserState
	operations: IOperationsState
	month: TMonthState
}

interface IOperationWithDate extends IOperation {
	date: Date
}

type TAddDateToOperation = (spend: IOperation) => IOperationWithDate
type TConvertIdToDate = (idString: string) => Date
type TOperationsSplitter = (spendsArr: IOperation[]) => IOperationWithDate[][]

interface IServerResp {
	status: {
		success: boolean
		message: string
	}
}

interface IUserServerResp extends IServerResp {
	user?: IUser
}

interface IOperationsServerResp extends IServerResp {
	operations?: IOperation[]
}

interface IMonthServerResp extends IServerResp {
	monthData?: IMonth
}

interface IOperationServerResp extends IServerResp {
	operation?: IOperation
}

interface IOperationWindowProps {
	operationsArr: IOperationWithDate[]
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
}

type IValRes = string[]

interface IButtonProps {
	buttonText: string
	clickHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

interface IOperationFormObject {
	category?: string
	comment?: string
	cost?: number
	currency?: string
}
