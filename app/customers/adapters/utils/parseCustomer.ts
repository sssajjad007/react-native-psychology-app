import { toString, parseDate, toJalaaliDate } from "../../../library"
import type { ICustomer } from "../../types"


export function parseCustomer(payload: any): ICustomer{
    const obj = Object(payload);
    const createdAt = parseDate(toString(obj?.createdAt));
    const modifiedAt = parseDate(toString(obj?.modifiedAt));
    return {
        customerId: toString(obj?.customerId),
        providerId: toString(obj?.providerId),
        businessId: toString(obj?.businessId),
        requestConfirmed: Boolean(obj?.requestConfirmed),
        name: toString(obj?.name),
        profilePictureUrl: toString(obj?.profilePictureUrl),
        description: toString(obj?.description),
        createdAt: createdAt ? toJalaaliDate(createdAt) : toJalaaliDate(new Date()),
        modifiedAt: modifiedAt ? toJalaaliDate(modifiedAt) : toJalaaliDate(new Date()),
    }
}