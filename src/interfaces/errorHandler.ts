import {
	StatusCodes
} from 'http-status-codes';

export interface IErrorResponse{
    message?:string;
    statusCode?:number;
    status ?:string ;
    comingFrom ?:string;
}