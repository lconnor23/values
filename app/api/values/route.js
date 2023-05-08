//to be able to send a response from this
import { NextResponse } from 'next/server'
import values from './data.json'

export async function GET(request){
    return NextResponse.json(values)
}